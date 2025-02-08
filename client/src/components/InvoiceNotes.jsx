import React from "react";
import { useAuthStore } from "../store/authStore";

export default function InvoiceNotes() {
  const { user } = useAuthStore();

  return (
    <section className="mb-5 flex flex-col sm:flex-row justify-between p-2 bg-gray-100 rounded max-w-96 text-sm">
      <ul className="flex-1">
        <li>
          Bank Name:{" "}
          <span className="font-bold">{user.affiliation.banker}</span>
        </li>
        <li>
          Account Name:{" "}
          <span className="font-bold">{user.affiliation.account_name}</span>
        </li>
        <li>
          Account Number:{" "}
          <span className="font-bold">{user.affiliation.account_number}</span>
        </li>
      </ul>

      {/* <div className="flex-1 bg-slate-100">
        <p className="font-bold">Please Note:</p>
        <p className="">Information</p>
      </div> */}
    </section>
  );
}
