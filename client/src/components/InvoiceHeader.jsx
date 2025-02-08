import React from "react";
import { Button } from "flowbite-react";
import { RiArrowGoBackLine } from "react-icons/ri";
import { MdOutlineSaveAs } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function InvoiceHeader({ handlePrint }) {
  const navigate = useNavigate();

  return (
    <Button
      className="bg-blue-600 text-white hover:bg-opacity-70 px-8 py-2 rounded flex items-center gap-2"
      onClick={handlePrint}
    >
      <MdOutlineSaveAs className="text-xl mr-2" />
      Save Invoice
    </Button>
  );
}
