import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuClipboardSignature } from "react-icons/lu";
import { FaEyeSlash, FaEye, FaCloudUploadAlt } from "react-icons/fa";
import { Form, Input, Button, Upload, message } from "antd";
import Divider from "../components/Divider.jsx";
import TextArea from "antd/es/input/TextArea";
import { useDispatch, useSelector } from "react-redux";

const rules = [
  {
    required: true,
    message: "Required Fields Cannot Be Empty",
  },
];

export default function NextSteps() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    navigate("/add-user-details");
    // try {
    //   dispatch(setLoader(true));
    //   const response = await AddPremise(values);
    //   dispatch(setLoader(false));
    //   if (response.success) {
    //     message.success(response.message);
    //     navigate("/sign-in");
    //   } else {
    //     throw new Error(response.message);
    //   }
    // } catch (error) {
    //   dispatch(setLoader(false));
    //   message.error(error.message);
    // }
  };

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     navigate("/");
  //   }
  // }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col w-full p-4 max-w-xl mx-auto bg-white rounded shadow">
        <div className="py-2 w-full flex flex-col items-center">
          <img src="./thank_you.jpg" alt="" className="w-1/2 mx-auto" />
        </div>

        <div className="flex flex-col items-center gap-3 mb-8">
          <p className="w-3/4 text-center text-sm text-gray-700">
            Thank you for your interest in our Invoicer App. Please, follow the
            steps outlined below to complete your registration to begin to enjoy
            the amazing services available
          </p>
          <div className="p-2 bg-gray-100 w-full rounded flex flex-col gap-y-3">
            <p>1. Login into your account using the details just created</p>
            <p>
              2. Add details of your staff that will handle the invoice creation
            </p>
            <p>3. Go ahead and enjoy our amazing services</p>
          </div>
        </div>

        <Button type="primary" onClick={() => navigate("/login")}>
          Click to Login
        </Button>
      </div>
    </div>
  );
}
