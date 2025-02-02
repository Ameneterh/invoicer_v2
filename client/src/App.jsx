import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
// import InvoicePage from "./pages/InvoicePage";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import AddCashier from "./pages/AddCashier";
// import AddSignature from "./pages/AddSignature";
// import ProtectedPage from "./components/ProtectedPage";
// import { useSelector } from "react-redux";
// import NextSteps from "./pages/NextSteps";
import Spinner from "./components/Spinner";
import FloatingShapes from "./components/FloatingShapes";
import HeaderComponent from "./components/HeaderComponent";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AddHandler from "./pages/AddHandler";
import RegisterBusiness from "./pages/RegisterBusiness";
import PasswordResetPage from "./pages/PasswordResetPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import HandlerActivationPage from "./pages/HandlerActivationPage";
import toast, { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore.js";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import UserDashboard from "./pages/UserDashboard.jsx";
import CreateInvoice from "./pages/CreateInvoice.jsx";

// protected routes
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    // toast.error("You need to log in to access this page");
    return <Navigate to="/user-login" replace />;
  }

  if (!user.isActive) {
    // toast.error("Your account is not active, contact HR!");
    return <Navigate to="/verify-handler" replace />;
  }

  return children;
};

// redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user.isActive) {
    return <Navigate to="/" replace />;
  }
  return children;
};

function App() {
  const contentRef = useRef();
  const reactToPrintFn = useReactToPrint({ contentRef });

  const { isCheckingAuth, checkAuth, isAuthenticated, user } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <Spinner />;

  return (
    <div className="min-h-screen bg-gradient-to-tr from-green-950 via-slate-900 to-green-950 flex relative overflow-hidden">
      <FloatingShapes
        color="bg-green-500"
        size="w-64 h-64"
        top="-5%"
        left="10%"
        delay={0}
      />
      <FloatingShapes
        color="bg-emerald-500"
        size="w-48 h-48"
        top="70%"
        left="80%"
        delay={5}
      />
      <FloatingShapes
        color="bg-lime-500"
        size="w-32 h-32"
        top="40%"
        left="10%"
        delay={2}
      />

      {/* routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
        <Route path="/activate-handler" element={<HandlerActivationPage />} />
        <Route path="*" element={<NotFoundPage />} />

        {/* protected routes */}
        <Route
          path="/user-dashboard"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-invoice"
          element={
            <ProtectedRoute>
              <CreateInvoice />
            </ProtectedRoute>
          }
        />

        {/* private routes for only authenticated users */}
        <Route
          path="/forgot-password"
          element={
            <RedirectAuthenticatedUser>
              <ForgotPasswordPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/reset-password/:token"
          element={
            <RedirectAuthenticatedUser>
              <PasswordResetPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/add-new-business"
          element={
            <RedirectAuthenticatedUser>
              <RegisterBusiness />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/add-handler"
          element={
            <RedirectAuthenticatedUser>
              <AddHandler />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/user-login"
          element={
            <RedirectAuthenticatedUser>
              <LoginPage />
            </RedirectAuthenticatedUser>
          }
        />
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;
