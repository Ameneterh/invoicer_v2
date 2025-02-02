import React from "react";

export default function ClientDetails({
  client_name,
  client_address,
  client_phone,
  client_email,
  inv_number,
  inv_date,
  invoiceType,
  validity,
}) {
  // const { business } = useSelector((state) => state.businesses);

  return (
    <section className="mb-3 flex flex-col items-start justify-between p-4 border-2 rounded">
      <div className="my-3 text-center text-3xl w-full prata-regular">
        {invoiceType === "proforma" ? (
          <p>Proforma Invoice</p>
        ) : (
          <p>Cash Sales Invoice</p>
        )}
      </div>

      <div className="flex w-full justify-between">
        {/* client name, address, phone, email */}
        <div>
          <p className="font-bold">Invoiced to:</p>
          <div className="ml-5">
            <h1 className="font-bold uppercase">{client_name}</h1>
            <p>{client_address}</p>
            <p className="flex items-center gap-2">
              <span>{client_phone}</span>
              <span>{client_email}</span>
            </p>
          </div>
        </div>

        {/* invoice number, invoice date, due date */}
        <div className="flex flex-col items-end justify-end">
          <ul>
            <li className="p-1">
              <span className="font-bold">Inv Number:</span> {inv_number}
            </li>
            <li className="p-1 bg-slate-100 py-1 rounded">
              <span className="font-bold">Inv Date:</span> {inv_date}
            </li>
            <li className="p-1">
              {invoiceType === "proforma" ? (
                <>
                  <span className="font-bold">Validity:</span> {validity} days
                </>
              ) : (
                <></>
              )}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
