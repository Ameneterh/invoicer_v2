import React from "react";
import { motion } from "framer-motion";
import MainLayout from "../layout/MainLayout";

export default function CreateInvoice() {
  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen max-w-7xl w-full mx-auto mt-2 p-4 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800"
      >
        CreateInvoice
      </motion.div>
    </MainLayout>
  );
}
