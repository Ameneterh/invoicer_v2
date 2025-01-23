import { message } from "antd";
import React, { useEffect, useState } from "react";
import { GetLoggedBusiness } from "../apiCalls/business";
import { useNavigate } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import { useDispatch, useSelector } from "react-redux";
import { setLoader } from "../redux/loaderSlice";
import { setBusiness } from "../redux/businessSlice";

export default function ProtectedPage({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { business } = useSelector((state) => state.businesses);

  const validToken = async () => {
    // try {
    //   dispatch(setLoader(true));
    //   const response = await GetLoggedBusiness();
    //   dispatch(setLoader(false));
    //   if (response.success) {
    //     dispatch(setBusiness(response.data));
    //   } else {
    //     navigate("/login");
    //     message.error(response.message);
    //   }
    // } catch (error) {
    //   dispatch(setLoader(false));
    //   navigate("/login");
    //   message.error(error.message);
    // }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      validToken();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    business && (
      <div>
        <HeaderComponent business={business} />
        <div className="p-5">{children}</div>
      </div>
    )
  );
}
