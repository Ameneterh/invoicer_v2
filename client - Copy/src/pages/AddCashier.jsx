import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuClipboardSignature } from "react-icons/lu";
import { FaEyeSlash, FaEye, FaCloudUploadAlt } from "react-icons/fa";
import { Form, Input, Button, Upload, message } from "antd";
import Divider from "../components/Divider.jsx";
import { useDispatch, useSelector } from "react-redux";
import { EditBusinessDetails } from "../apiCalls/business.js";
import { setLoader } from "../redux/loaderSlice.js";

const rules = [
  {
    required: true,
    message: "Required Fields Cannot Be Empty",
  },
];

export default function AddCashier() {
  const { business } = useSelector((state) => state.businesses);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      dispatch(setLoader(true));
      const response = await EditBusinessDetails(business._id, values);
      dispatch(setLoader(false));
      if (response.success) {
        message.success(response.message);
        window.location.reload();
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(setLoader(false));
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (business.staff_name !== undefined) {
      navigate("/");
    }
  }, []);

  return (
    <div className="flex items-center">
      <div className="w-full p-4 max-w-xl mx-auto mt-5 bg-white rounded shadow">
        <div className="py-2 border-b-2 w-full">
          <h1 className="flex items-center gap-2 text-2xl font-bold mb-3">
            <LuClipboardSignature className="text-xl" />
            Add Your Staff Handler
          </h1>
          <Divider />
        </div>
        <Form layout="vertical" className="mt-3" onFinish={handleSubmit}>
          <h1 className="text-2xl text-red-900 mb-3">Staff Details</h1>

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
              label="Staff Designation"
              name="staff_designation"
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

          <Button type="primary" htmlType="submit" block className="mt-4">
            Add User Details
          </Button>
        </Form>
      </div>
    </div>
  );
}
