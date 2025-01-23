import React from "react";
import { toWords } from "number-to-words";
import { TbCurrencyNaira } from "react-icons/tb";

export default function InvoiceTable({ list, total }) {
  return (
    <section className="my-5">
      <table width="100%">
        <thead>
          <tr className="bg-gray-100 h-10">
            <td className="font-bold text-center">S/N</td>
            <td className="font-bold text-center">Item/Job Description</td>
            <td className="font-bold text-center">Qty</td>
            <td className="font-bold text-center">Rate</td>
            <td className="font-bold text-center">Amount</td>
          </tr>
        </thead>
        {list.map(
          ({ id, jobTitle, jobDescription, quantity, rate, amount }, index) => (
            <React.Fragment key={id}>
              <tbody>
                <tr className="border-b  text-sm">
                  <td>{index + 1}</td>
                  <td>
                    <p className="font-bold">
                      {jobTitle}
                      <span className="block font-normal">
                        {jobDescription}
                      </span>
                    </p>
                  </td>
                  <td>{quantity}</td>
                  <td>{rate}</td>
                  <td>
                    {amount.toLocaleString("en-US", {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                    })}
                  </td>
                </tr>
              </tbody>
            </React.Fragment>
          )
        )}
      </table>
      <div className="mt-5 rounded flex items-start gap-4 w-full">
        <div className=" p-2 bg-gray-50 flex items-start gap-4 md:w-3/4 min-h-[72px]">
          <h2 className="font-bold text-sm">Amount in Words:</h2>
          <p className="capitalize text-sm">
            {toWords(Number(total))} Naira only
          </p>
        </div>
        <p className="flex flex-col items-center gap-1 font-bold p-2 border rounded">
          <span>Grand Total:</span>
          <span className="flex items-center -mt-2 text-2xl">
            <TbCurrencyNaira className="text-3xl" />
            {total.toLocaleString("en-US", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })}
          </span>
        </p>
      </div>
    </section>
  );
}
