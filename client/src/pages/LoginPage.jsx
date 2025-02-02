import { motion } from "framer-motion";
import { Input } from "../components/Input";
import { Mail, Lock, Loader, MapPinHouse, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export default function LoginPage() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [user_email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");
  const { isLoading, login, error } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login(user_email, user_password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto w-full bg-green-950 bg-opacity-80 backdrop-filter backdrop-blur-xl rounded-lg shadow-xl overflow-hidden my-10"
      >
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to bg-emerald-500 text-transparent bg-clip-text">
            Welcome Back!
          </h2>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <Input
              icon={Mail}
              type="email"
              placeholder="Handler Email"
              value={user_email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative flex items-center w-full">
              <Input
                icon={Lock}
                type={showPassword ? "text" : "password"}
                placeholder="Enter Strong Password"
                value={user_password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className="absolute right-2 inset-y-0 cursor-pointer flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="size-5 text-green-500" />
                ) : (
                  <Eye className="size-5 text-green-500" />
                )}
              </div>
            </div>

            <div>
              <Link
                to="/forgot-password"
                className="text-sm text-green-400 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {error && (
              <p className="text-red-800 font-semibold mt-2 p-2 text-center bg-red-100 rounded">
                {error}
              </p>
            )}

            <motion.button
              className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-500 font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 border border-green-700 focus:outline-none focus:ring-1 focus:ring-green-500 focus:ring-offset-1 focus:ring-offset-gray-900 transition duration-200 cursor-pointer flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader className="w-6 h-6 animate-spin mx-auto text-white font-bold" />
              ) : (
                "Login"
              )}
            </motion.button>
          </form>
        </div>

        <div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
          <p className="text-sm text-gray-400">
            Don't have a registerd handler?{" "}
            <Link to="/add-handler" className="text-green-400 hover:underline">
              Add a Handler
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
