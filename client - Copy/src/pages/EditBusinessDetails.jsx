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

export default function EditBusinessDetails() {
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
    <div className="w-full p-4 max-w-xl mx-auto mt-5 bg-white rounded shadow mb-20">
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
            label="Login Password"
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

        {/* details of handling staff */}
        <Divider />

        <h1 className="text-2xl text-red-900 mt-4 mb-3">Details of Handler</h1>
        <div className="flex md:gap-5 w-full flex-col md:flex-row">
          <Form.Item
            label="Name of Staff"
            name="staff_name"
            className="flex-1"
            rules={rules}
          >
            <Input type="text" className=" -mt-[6px]" />
          </Form.Item>
        </div>
        <div className="flex md:gap-5 w-full flex-col md:flex-row">
          <Form.Item
            label="Phone Number"
            name="staff_phone"
            className="flex-1"
            rules={rules}
          >
            <Input type="text" className=" -mt-[6px]" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="staff_email"
            className="flex-1"
            rules={rules}
          >
            <Input type="email" className=" -mt-[6px]" />
          </Form.Item>
        </div>

        {/* details of handling staff */}
        <Divider />

        <h1 className="text-2xl text-red-900 mt-4 mb-3">
          Company Logo & Authorised Signature
        </h1>
        <div className="flex md:gap-5 w-full flex-col md:flex-row">
          <Form.Item
            label="Name of Staff"
            name="staff_name"
            className="flex-1"
            rules={rules}
          >
            <Input type="text" className=" -mt-[6px]" />
          </Form.Item>
          <Form.Item
            label="License Number"
            name="superintendent_license"
            className="flex-1"
            rules={rules}
          >
            <Input type="text" className=" -mt-[6px]" />
          </Form.Item>
        </div>

        {/* agreement with terms and conditions */}
        <div className="p-3 w-full bg-sky-50">
          <p>
            By clicking on signup, you indicate your agreement with all our{" "}
            <Link to={"/t&c"}>Terms and Conditions</Link>
          </p>
        </div>

        <Button type="primary" htmlType="submit" block className="mt-4">
          {/* {loading ? (
              <>
                <Spinner size="sm" />
                <span className="pl-3">Loading ...</span>
              </>
            ) : ( */}
          Sign Up
          {/* )} */}
        </Button>
      </Form>
      <div className="flex gap-2 text-sm mt-5">
        <span>Do you already have an account?</span>
        <Link to="/sign-in" className="text-blue-500">
          Sign In
        </Link>
      </div>
    </div>
  );
}
