import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuClipboardSignature } from "react-icons/lu";
import Divider from "../components/Divider.jsx";
import { useDispatch, useSelector } from "react-redux";
import { Button, message, Upload } from "antd";
// import { setLoader } from "../redux/loaderSlice";
// import { EditProduct, UploadProductImage } from "../apiCalls/products";
import { MdOutlineDeleteForever } from "react-icons/md";

export default function AddSignature() {
  const { business } = useSelector((state) => state.businesses);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [images, setImages] = useState(business.staff_signature);
  const [showPreview, setShowPreview] = useState(true);
  const [file, setFile] = useState(null);

  const uploadFile = async () => {
    // try {
    //   dispatch(setLoader(true));
    //   //   upload image to cloudinary
    //   const formData = new FormData();
    //   formData.append("file", file);
    //   formData.append("productId", selectedProduct._id);
    //   const response = await UploadProductImage(formData);
    //   dispatch(setLoader(false));
    //   if (response.success) {
    //     message.success(response.message);
    //     setImages([...images, response.data]);
    //     setShowPreview(false);
    //     setFile(null);
    //     getData();
    //     // setShowProductForm(false);
    //   } else {
    //     message.error(response.message);
    //   }
    // } catch (error) {
    //   dispatch(setLoader(false));
    //   message.error(error.message);
    // }
  };

  const deleteProductImage = async (image) => {
    // try {
    //   dispatch(setLoader(true));
    //   const updatedImageArray = images.filter((img) => img !== image);
    //   const updatedProduct = { ...selectedProduct, images: updatedImageArray };
    //   const response = await EditProduct(selectedProduct._id, updatedProduct);
    //   if (response.success) {
    //     message.success(response.message);
    //     setImages(updatedImageArray);
    //     getData();
    //   } else {
    //     throw new Error(response.message);
    //   }
    // } catch (error) {
    //   dispatch(setLoader(false));
    //   message.error(error.mesage);
    // }
  };

  return (
    <div className="w-full p-4 max-w-xl mx-auto mt-5 bg-white rounded shadow mb-20">
      <div className="py-2 border-b-2 w-full">
        <h1 className="flex items-center gap-2 text-2xl font-bold mb-3">
          <LuClipboardSignature className="text-xl" />
          Add User Staff Handler Signature
        </h1>
        <Divider />
      </div>
      <h1 className="text-2xl text-red-900 mb-3">Upload Staff Signature</h1>

      <div className="flex gap-5 mb-5">
        <div className="flex gap-2 border border-solid border-gray-500 rounded-md p-3 items-end relative">
          <img
            src={business.staff_signature}
            alt=""
            className="h-20 w-20 object-cover"
          />

          <MdOutlineDeleteForever
            className="cursor-pointer text-2xl text-red-600 hover:scale-110 transition-all duration-300 absolute right-0 bottom-1"
            onClick={() => {
              deleteProductImage(business.staff_signature);
            }}
          />
        </div>
        ;
      </div>
      <Upload
        listType="picture"
        beforeUpload={() => false}
        onChange={(info) => {
          setFile(info.file);
          setShowPreview(true);
        }}
        showUploadList={showPreview}
      >
        <Button type="default">Upload Image</Button>
      </Upload>

      <div className="flex justify-end gap-5 mt-5">
        <Button
          type="default"
          onClick={() => {
            setShowProductForm(false);
          }}
        >
          Cancel
        </Button>

        <Button type="primary" onClick={uploadFile} disabled={!file}>
          Upload
        </Button>
      </div>
    </div>
  );
}
