import React from "react";
import { users } from "../assets/users";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Divider from "./Divider";
import { MdWhatsapp, MdAddCall } from "react-icons/md";

export default function InvoiceFooter() {
  const { business } = useSelector((state) => state.businesses);
  const today = new Date();

  return (
    <footer className="flex flex-col gap-8">
      <div className="flex gap-x-4 border-t-2 pt-3 justify-between">
        <div>
          <p>Invoice prepared by:</p>
          <ul className="">
            <li>
              <img src={business.staff_signature} className="h-16" />
            </li>
            <li className="font-bold uppercase">{business.staff_name}</li>
            <li className="text-xs">{business.staff_email}</li>
            <li className="text-xs">{business.staff_phone}</li>
          </ul>
        </div>
        <div className="flex flex-col mt-5 px-3 py-2 rounded-md w-96 gap-y-8">
          <div className="flex gap-x-1">
            <p>Received by:</p>
            <p className="flex-1 border-b-2"></p>
          </div>
          <div className="flex gap-x-1">
            <p>Date:</p>
            <p className="flex-1 border-b-2"></p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-xs text-right mb-1 text-gray-500">
          Invoice created on{" "}
          <span>
            {today.getDate().toString().padStart(2, "0")}/
            {(today.getMonth() + 1).toString().padStart(2, "0")}/
            {today.getFullYear()} - {today.toLocaleTimeString()}
          </span>
        </p>
        <Divider />
      </div>
      <div className="text-xs flex items-center gap-2 w-full justify-center">
        <p>
          <b>Invoicer</b> - coded and maintained by{" "}
          <Link to="https://ameneterh-portfolio.onrender.com">
            AMENE Ter'Hemen
          </Link>{" "}
        </p>
        <span className="flex items-center">
          <MdWhatsapp /> <MdAddCall className="mx-1" />
          08154230654
        </span>
      </div>
    </footer>
  );
}
