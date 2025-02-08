import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { useAuthStore } from "../store/authStore";

export default function HeaderComponent({ business }) {
  const navigate = useNavigate();

  const [visible, setVisible] = useState(true);

  const { error, isLoading, logout, user } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="w-full px-5 sm:px-20 py-2 sm:py-4 bg-slate-950 bg-opacity-80 shadow sticky left-0 top-0 flex items-center justify-between z-50">
      <Link to="/">
        <div className="text-white flex items-center gap-1">
          <img src="./at-personal-logo.png" alt="" className="w-8" />

          <p className="hidden sm:inline-block text-2xl ml-3">
            Invoice <span className="italianno-regular text-3xl">Gen</span>
          </p>
        </div>
      </Link>

      {user ? (
        <div className="bg-white px-2 py-1 rounded flex items-center gap-2">
          <Link to={"/user-dashboard?tab=dash"} className="flex items-center">
            <img src={user.avatar} className="rounded-full h-8 w-8" />
          </Link>
          <p className="font-bold text-md text-blue-800 uppercase cursor-pointer underline underline-offset-2 hover:scale-110 transition-all duration-500">
            {user.affiliation.business_name.split(" ")[0]}
          </p>
          <div className="flex items-center ml-4 bg-red-100 px-2 py-1 rounded">
            <MdLogout
              className="text-lg text-red-600 cursor-pointer hover:scale-110 transition-all duration-300"
              onClick={handleLogout}
            />
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-3 text-md">
          <Link
            to="/user-login"
            className="bg-green-950 px-3 py-1 rounded text-white hover:text-green-950 hover:bg-white"
          >
            Login
          </Link>{" "}
          <Link
            to="/add-new-business"
            className="bg-[#2066a8] px-3 py-1 rounded text-white hover:text-blue-800 hover:bg-white"
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
}
