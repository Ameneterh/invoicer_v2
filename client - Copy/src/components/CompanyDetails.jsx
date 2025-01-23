import React from "react";
import { MdAddCall, MdEmail, MdLocationCity } from "react-icons/md";
import Divider from "./Divider";

export default function CompanyDetails({ business }) {
  return (
    <section className="flex flex-col">
      {/* <div className="border-b border-b-gray-300 text-center uppercase tracking-wide py-1">
        graphics | printing | web design/hosting | consultanccy
      </div> */}
      <div className="flex justify-between mb-4">
        <div className="flex gap-4">
          <img src={business.business_logo} className="w-14 h-14" />
          <div className="flex flex-col text-sm">
            <p className="text-3xl font-bold">{business.business_name}</p>
            <div className="flex justify-between">
              <p className="flex items-center gap-2">
                <MdEmail />
                {business.business_email}
              </p>
              <p className="flex items-center gap-2">
                <MdAddCall />
                {business.business_phone}
              </p>
            </div>
            <p className="flex items-start gap-2">
              <MdLocationCity />
              {business.business_address}
            </p>
          </div>
        </div>
        <div className="hidden sm:flex w-1/2 gap-x-3 text-sm">
          {/* <div className="flex flex-col">
            <p className="font-bold">Business Locations:</p>
          </div> */}
          {/* <p className="font-bold flex-1">
            Locations:
            <span className="block font-normal">
              Ado-Ekiti | Gboko | Makurdi
            </span>
          </p> */}
        </div>
      </div>
      <Divider />
    </section>
  );
}
