import TitleText from "../components/TitleText";
import { Button, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaSignInAlt, FaEyeSlash, FaEye } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import Divider from "../components/Divider";
import { LoginBusiness } from "../apiCalls/business";
import { useDispatch } from "react-redux";
import { setLoader } from "../redux/loaderSlice";

const rules = [
  {
    required: true,
    message: "Field required",
  },
];

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    // console.log(values);
    // try {
    //   dispatch(setLoader(true));
    //   const response = await LoginBusiness(values);
    //   dispatch(setLoader(false));
    //   if (response.success) {
    //     message.success(response.message);
    //     localStorage.setItem("token", response.data);
    //     window.location.href = "/";
    //   } else {
    //     throw new Error(response.message);
    //   }
    // } catch (error) {
    //   dispatch(setLoader(false));
    //   message.error(error.message);
    // }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full p-4 max-w-xl mx-auto bg-white rounded shadow">
        <div className="text-2xl mb-5">
          <TitleText text1="login" text2="here" />
          <Divider />
        </div>

        <Form layout="vertical" onFinish={handleSubmit}>
          {/* username & email input */}
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <div className="w-full">
              <Form.Item
                label="Business Email"
                name="business_email"
                rules={rules}
              >
                <Input
                  type="email"
                  placeholder="Enter your valid email"
                  className=" -mt-[6px]"
                />
              </Form.Item>
            </div>
          </div>

          {/* password input */}
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <div className="w-full">
              <Form.Item
                label="Password"
                name="business_password"
                rules={rules}
              >
                <div className="flex items-center w-full relative -mt-[6px]">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Choose a strong password"
                  />
                  <span
                    className="absolute right-2 top-3 text-[#999BA1] text-xl cursor-pointer"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </Form.Item>
            </div>
          </div>

          <Button type="primary" htmlType="submit" block className="mt-4 h-10">
            Login
          </Button>
        </Form>

        <div className="flex gap-2 text-sm mt-5">
          <span>You don't have an account?</span>
          <Link to="/register" className="text-blue-500">
            Register Here
          </Link>
        </div>
      </div>
    </div>
  );
}
