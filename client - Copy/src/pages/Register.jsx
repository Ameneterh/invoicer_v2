import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuClipboardSignature } from "react-icons/lu";
import { FaEyeSlash, FaEye, FaCloudUploadAlt } from "react-icons/fa";
import { Form, Input, Button, Upload, message } from "antd";
import Divider from "../components/Divider.jsx";
import TextArea from "antd/es/input/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { RegisterBusiness } from "../apiCalls/business.js";
import { setLoader } from "../redux/loaderSlice.js";

const rules = [
  {
    required: true,
    message: "Required Fields Cannot Be Empty",
  },
];

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      dispatch(setLoader(true));
      const response = await RegisterBusiness(values);
      dispatch(setLoader(false));
      if (response.success) {
        message.success(response.message);
        navigate("/next-step");
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(setLoader(false));
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full p-4 max-w-xl mx-auto mt-5 bg-white rounded shadow">
        <div className="py-2 border-b-2 w-full">
          <h1 className="flex items-center gap-2 text-2xl font-bold mb-3">
            <LuClipboardSignature className="text-xl" />
            Register Your Business
          </h1>
          <Divider />
        </div>
        <Form layout="vertical" className="mt-3" onFinish={handleSubmit}>
          <h1 className="text-2xl text-red-900 mb-3">Details of Business</h1>
          <div className="flex md:gap-5 w-full flex-col md:flex-row">
            <Form.Item
              label="Business Name"
              name="business_name"
              className="flex-1"
              rules={rules}
            >
              <Input type="text" className=" -mt-[6px]" />
            </Form.Item>
          </div>

          <div className="flex md:gap-5 w-full flex-col md:flex-row">
            <Form.Item
              label="Business Email"
              name="business_email"
              className="flex-1"
              rules={rules}
            >
              <Input type="email" className=" -mt-[6px]" />
            </Form.Item>
            <Form.Item
              label="Phone Number"
              name="business_phone"
              className="flex-1"
              rules={rules}
            >
              <Input type="text" className=" -mt-[6px]" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="business_password"
              className="flex-1"
              rules={rules}
            >
              <div className="flex items-center w-full relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Strong password"
                  className=" -mt-[6px]"
                />
                <span
                  className="absolute right-2 top-2 text-[#999BA1] text-xl cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </Form.Item>
          </div>

          <div className="flex md:gap-5 w-full flex-col md:flex-row">
            <Form.Item
              label="Business Address"
              name="business_address"
              className="flex-1"
              rules={rules}
            >
              <TextArea type="text" maxLength={80} className=" -mt-[6px]" />
            </Form.Item>
          </div>

          <Divider />
          {/* get company bank details */}
          <h1 className="text-2xl text-red-900 my-3">
            Your Business Bank Details
          </h1>
          <div className="flex md:gap-5 w-full flex-col md:flex-row">
            <Form.Item
              label="Bank Name:"
              name="banker"
              className="flex-1"
              rules={rules}
            >
              <Input type="text" className=" -mt-[6px]" />
            </Form.Item>
            <Form.Item
              label="Account Number:"
              name="account_number"
              className="flex-1"
              rules={rules}
            >
              <Input type="text" className=" -mt-[6px]" />
            </Form.Item>
          </div>
          <div className="flex md:gap-5 w-full flex-col md:flex-row">
            <Form.Item
              label="Account Name:"
              name="account_name"
              className="flex-1"
              rules={rules}
            >
              <Input type="text" className=" -mt-[6px]" />
            </Form.Item>
          </div>

          {/* agreement with terms and conditions */}
          <div className="p-3 w-full bg-sky-50 text-sm text-center">
            <p>
              By clicking on <b>Register</b>, you indicate your agreement with
              all our{" "}
              <Link to={"/t&c"} className="block">
                Terms and Conditions
              </Link>
            </p>
          </div>

          <Button type="primary" htmlType="submit" block className="mt-4">
            {/* {loading ? (
              <>
                <Spinner size="sm" />
                <span className="pl-3">Loading ...</span>
              </>
            ) : ( */}
            Register Business
            {/* )} */}
          </Button>
        </Form>
        <div className="flex gap-2 text-sm mt-5">
          <span>Do you already have an account?</span>
          <Link to="/login" className="text-blue-500">
            Login Here
          </Link>
        </div>
      </div>
    </div>
  );
}
