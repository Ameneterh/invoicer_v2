import { motion } from "framer-motion";
import { Input } from "../components/Input";
import { CircleUserRound, Mail, Lock, Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import { useAuthStore } from "../store/authStore.js";
import { useBusinessStore } from "../store/businessStore.js";

export default function AddHandler() {
  const navigate = useNavigate();

  const [fullname, setFullname] = useState("");
  const [user_email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");
  const [affiliation, setAffiliation] = useState("");

  const [businesses, setBusinesses] = useState([]);

  const { addUser, error, isLoading } = useAuthStore();
  const { getAllBusinesses } = useBusinessStore();

  const handleRegisterHandler = async (e) => {
    e.preventDefault();

    try {
      await addUser(fullname, user_email, user_password, affiliation);
      navigate("/activate-handler");
    } catch (error) {
      console.log(error);
    }
  };

  // get all businesses
  const getBusinesses = async () => {
    try {
      const { businesses } = await getAllBusinesses();
      setBusinesses(businesses);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBusinesses();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-slate-700 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-lg shadow-xl overflow-hidden my-10"
    >
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to bg-emerald-500 text-transparent bg-clip-text">
          Register a Handler
        </h2>

        <form onSubmit={handleRegisterHandler}>
          <Input
            icon={CircleUserRound}
            type="text"
            placeholder="Name of Handler"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <Input
            icon={Mail}
            type="email"
            placeholder="Handler Email"
            value={user_email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={Lock}
            type="password"
            placeholder="Enter Strong Password"
            value={user_password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <select
            onChange={(e) => setAffiliation(e.target.value)}
            className="w-full pl-3 pr-3 py-2 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400 transition duration-200"
          >
            <option>Select Business Affiliation</option>
            {businesses &&
              businesses.map((business, index) => {
                return (
                  <option key={index} value={business._id}>
                    {business.business_name}
                  </option>
                );
              })}
          </select>

          {error && (
            <p className="text-red-800 font-semibold mt-2 p-2 text-center bg-red-100 rounded">
              {error}
            </p>
          )}

          {/* password strength meter */}
          <PasswordStrengthMeter password={user_password} />

          <motion.button
            className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-500 font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 border border-green-700 focus:outline-none focus:ring-1 focus:ring-green-500 focus:ring-offset-1 focus:ring-offset-gray-900 transition duration-200 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader className="animate-spin mx-auto" />
            ) : (
              "Register Handler"
            )}
          </motion.button>
        </form>
      </div>

      <div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
        <p className="text-sm text-gray-400">
          Already registered your Handler?{" "}
          <Link to="/add-handler" className="text-green-400 hover:underline">
            Add Another
          </Link>{" "}
          or{" "}
          <Link to="/user-login" className="text-green-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </motion.div>
  );
}
