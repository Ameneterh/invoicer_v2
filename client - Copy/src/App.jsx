import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import InvoicePage from "./pages/InvoicePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddCashier from "./pages/AddCashier";
import AddSignature from "./pages/AddSignature";
import ProtectedPage from "./components/ProtectedPage";
import Spinner from "./components/Spinner";
import { useSelector } from "react-redux";
import NextSteps from "./pages/NextSteps";

function App() {
  const contentRef = useRef();
  const reactToPrintFn = useReactToPrint({ contentRef });

  const { loading } = useSelector((state) => state.loaders);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden">
      {loading && <Spinner />}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedPage>
                <InvoicePage />
              </ProtectedPage>
            }
          />
          <Route
            path="/add-user-details"
            element={
              <ProtectedPage>
                <AddCashier />
              </ProtectedPage>
            }
          />
          <Route
            path="/add-user-signature"
            element={
              <ProtectedPage>
                <AddSignature />
              </ProtectedPage>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/next-step" element={<NextSteps />} />
          {/* <Route path="/add-user-signature" element={<AddSignature />} /> */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
