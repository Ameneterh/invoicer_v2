import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

export default function HeaderComponent({ business }) {
  const navigate = useNavigate();

  return (
    <div className="w-full px-4 py-2 max-w-5xl mx-auto bg-[#145da0] shadow mb-5 sticky top-0 flex items-center justify-between z-50">
      <Link to="/">
        <div className="text-white font-bold text-4xl flex items-center gap-1">
          <img src="./at-personal-logo.png" alt="" className="w-8" />
          <p className="hidden sm:inline-block">AMSH Rx - Invoicer</p>
        </div>
      </Link>
      {business ? (
        <div className="bg-white px-2 py-1 rounded flex items-center gap-2">
          <FaUserCircle className="text-2xl" />{" "}
          <p className="font-bold text-md text-blue-800 uppercase cursor-pointer underline underline-offset-2 hover:scale-110 transition-all duration-500">
            {business.business_name.split(" ")[0]}
          </p>
          <div className="flex items-center ml-4 bg-red-100 px-2 py-1 rounded">
            <MdLogout
              className="text-lg text-red-600 cursor-pointer hover:scale-110 transition-all duration-300"
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
            />
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-3 text-md">
          <Link
            to="/login"
            className="bg-[#2066a8] px-3 py-1 rounded text-white hover:text-blue-800 hover:bg-white"
          >
            Login
          </Link>{" "}
          <Link
            to="/register"
            className="bg-[#2066a8] px-3 py-1 rounded text-white hover:text-blue-800 hover:bg-white"
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
}
