import { motion } from "framer-motion";
import { Input } from "../components/Input";
import {
  CircleUserRound,
  Mail,
  Headset,
  MapPinHouse,
  FilePenLine,
  Loader,
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useBusinessStore } from "../store/businessStore";

export default function RegisterBusiness() {
  const navigate = useNavigate();

  const [business_name, setName] = useState("");
  const [business_email, setEmail] = useState("");
  const [business_phone, setPhone] = useState("");
  const [business_address, setAddress] = useState("");
  const [banker, setBanker] = useState("");
  const [account_name, setAccountName] = useState("");
  const [account_number, setAccountNumber] = useState("");

  const { registerBusiness, error, isLoading } = useBusinessStore();

  const handleRegisterBusiness = async (e) => {
    e.preventDefault();

    try {
      await registerBusiness(
        business_name,
        business_email,
        business_phone,
        business_address,
        banker,
        account_name,
        account_number
      );
      navigate("/verify-email");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-slate-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-lg shadow-xl overflow-hidden my-10"
    >
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to bg-emerald-500 text-transparent bg-clip-text">
          Register a Business
        </h2>

        <form onSubmit={handleRegisterBusiness}>
          <Input
            icon={CircleUserRound}
            type="text"
            placeholder="Name of Business"
            value={business_name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            icon={Mail}
            type="email"
            placeholder="Business Email"
            value={business_email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={Headset}
            type="text"
            placeholder="Business Phone"
            value={business_phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            icon={MapPinHouse}
            type="text"
            placeholder="Business Address"
            value={business_address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Input
            icon={FilePenLine}
            type="text"
            placeholder="Banker's Name"
            value={banker}
            onChange={(e) => setBanker(e.target.value)}
          />
          <Input
            icon={FilePenLine}
            type="text"
            placeholder="Account Name"
            value={account_name}
            onChange={(e) => setAccountName(e.target.value)}
          />
          <Input
            icon={FilePenLine}
            type="text"
            placeholder="Account Number"
            value={account_number}
            onChange={(e) => setAccountNumber(e.target.value)}
          />

          {error && (
            <p className="text-red-800 font-semibold mt-2 p-2 text-center bg-red-100 rounded">
              {error}
            </p>
          )}

          <motion.button
            className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-500 font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 border border-green-700 focus:outline-none focus:ring-1 focus:ring-green-500 focus:ring-offset-1 focus:ring-offset-gray-900 transition duration-200 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
          >
            {isLoading ? (
              <Loader className="animate-spin mx-auto" />
            ) : (
              "Register Business"
            )}
          </motion.button>
        </form>
      </div>

      <div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
        <p className="text-sm text-gray-400">
          Already registered your business?{" "}
          <Link to="/add-handler" className="text-green-400 hover:underline">
            Add Handler
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
