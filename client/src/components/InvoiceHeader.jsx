import React from "react";
import { Button } from "flowbite-react";
import { RiArrowGoBackLine } from "react-icons/ri";
import { MdOutlineSaveAs } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function InvoiceHeader({ handlePrint }) {
  const navigate = useNavigate();

  return (
    <header className="flex flex-col md:flex-row items-center justify-between mb-5 pb-2 border-b">
      <div>
        <Button
          className="flex items-center"
          onClick={() => window.location.reload()}
        >
          <RiArrowGoBackLine size={18} className="mr-1" />
          Home
        </Button>
      </div>

      <div>
        <ul className="flex items-center justify-between flex-wrap gap-x-4">
          <li>
            <Button
              className="bg-blue-600 text-white hover:bg-opacity-70 px-8 py-2 rounded flex items-center gap-2"
              onClick={handlePrint}
            >
              <MdOutlineSaveAs className="text-xl mr-2" />
              Save Invoice
            </Button>
          </li>
          {/* <li>
            <Button className="bg-green-600 hover:bg-opacity-70 text-white px-5 py-2 rounded">
              Send
            </Button>
          </li> */}
        </ul>
      </div>
    </header>
  );
}
