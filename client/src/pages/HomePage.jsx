import React from "react";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import { useAuthStore } from "../store/authStore";
import { formatDate } from "../../../server/utils/date";
import MainLayout from "../layout/MainLayout";

export default function HomePage() {
  const { user, logout, isLoading } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl min-h-screen w-full mx-auto mt-2 p-4 bg-gray-100 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800"
      >
        <p className="max-w-xl mx-auto text-2xl sm:text-4xl my-6 text-center bg-gradient-to-r from-green-950 to-black text-transparent bg-clip-text">
          The easiest Invoicing and Invoice Management Platform for Small
          Businesses and Freelancers
        </p>

        <motion.div
          className="max-w-2xl h-96 mx-auto p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-green-400 mb-3">
            video showing how it works
          </h3>
        </motion.div>

        <motion.button
          className="mx-auto mt-5 py-2 px-4 bg-gradient-to-r from-green-800 to-emerald-900 rounded-lg hover:from-green-600 hover:to-emerald-700 text-white focus:outline-none focus:ring-1 focus:ring-green-500 focus:ring-offset-1 focus:ring-offset-gray-900 transition duration-200 cursor-pointer flex items-center justify-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
        >
          Get Started with Invoice Gen
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-4"
        ></motion.div>
      </motion.div>
    </MainLayout>
  );
}
