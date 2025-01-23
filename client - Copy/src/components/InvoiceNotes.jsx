import React from "react";
import { useSelector } from "react-redux";

export default function InvoiceNotes() {
  const { business } = useSelector((state) => state.businesses);

  return (
    <section className="mb-5 flex flex-col sm:flex-row justify-between p-4 bg-slate-100 rounded max-w-96">
      <ul className="flex-1">
        <li>
          Bank Name: <span className="font-bold">{business.banker}</span>
        </li>
        <li>
          Account Name:{" "}
          <span className="font-bold">{business.account_name}</span>
        </li>
        <li>
          Account Number:{" "}
          <span className="font-bold">{business.account_number}</span>
        </li>
      </ul>

      {/* <div className="flex-1 bg-slate-100">
        <p className="font-bold">Please Note:</p>
        <p className="">Information</p>
      </div> */}
    </section>
  );
}
