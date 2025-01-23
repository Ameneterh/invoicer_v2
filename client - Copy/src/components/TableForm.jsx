import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { MdOutlineDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Button } from "antd";

export default function TableForm({
  jobTitle,
  setJobTitle,
  jobDescription,
  setJobDescription,
  information,
  quantity,
  setQuantity,
  rate,
  setRate,
  amount,
  setAmount,
  list,
  setList,
  total,
  setTotal,
}) {
  const [isEditing, setIsEditing] = useState(false);

  // calculate amount function
  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(quantity * rate);
    };

    calculateAmount(amount);
  }, [quantity, rate, amount, setAmount]);

  //   calculate total amount of items in the invoice
  useEffect(() => {
    let rows = document.querySelectorAll(".amount");
    let sum = 0;

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].className === "amount") {
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML);
        setTotal(sum);
      }
    }
  });

  //   submit table
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!jobTitle || !jobDescription || !quantity || !rate) {
      alert("Please, fill all fields");
    } else {
      const newItem = {
        id: uuidv4(),
        jobTitle,
        jobDescription,
        quantity,
        rate,
        amount,
      };

      setJobTitle("");
      setJobDescription("");
      setQuantity("");
      setRate("");
      setAmount("");

      setList([...list, newItem]);
      setIsEditing(false);
    }
  };

  // Edit Function
  const editItem = (id) => {
    const editingItem = list.find((item) => item.id === id);
    setList(list.filter((item) => item.id !== id));
    setIsEditing(true);
    setJobTitle(editingItem.jobTitle);
    setJobDescription(editingItem.jobDescription);
    setQuantity(editingItem.quantity);
    setRate(editingItem.rate);
    setAmount(editingItem.amount);
  };

  // Delete FUnction
  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <div className="px-4 mt-5 mb-10">
      <div className="flex items-center w-full gap-3 mb-5">
        <h1 className="text-xl font-bold">Enter Job Details</h1>
        <p className="flex-1 h-[1px] bg-gray-600"></p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="md:grid grid-cols-2 gap-10">
          <div className="flex flex-col">
            <label htmlFor="job_title" className="text-sm mb-1">
              Item/Job Title
            </label>
            <input
              type="text"
              name="job_title"
              id="job_title"
              placeholder="Item/Job Title"
              className="p-2"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="job_description" className="text-sm mb-1">
              Item/Job Description
            </label>
            <input
              type="text"
              name="job_description"
              id="job_description"
              placeholder="Item/Job Description"
              className="p-2"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            />
          </div>
        </div>

        <div className="md:grid grid-cols-3 gap-10 mt-6">
          <div className="flex flex-col">
            <label htmlFor="quantity" className="text-sm mb-1">
              Quantity
            </label>
            <input
              type="text"
              name="quantity"
              id="quantity"
              placeholder="Quantity"
              className="p-2"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="rate" className="text-sm mb-1">
              Rate
            </label>
            <input
              type="text"
              name="rate"
              id="rate"
              placeholder="Rate"
              className="p-2"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="amount" className="text-sm mb-1">
              Amount
            </label>
            <p className="font-bold flex flex-1 items-center bg-[#f1f1f1] px-3 py-4 md:py-0 rounded">
              {amount.toLocaleString("en-US", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-bold py-2 px-8 rounded hover:bg-blue-100 hover:text-blue-600 transition-all duration-300 mt-6 mb-10 border-none"
        >
          {isEditing ? "Add Edited Item" : "Add New Invoice Item"}
        </button>
      </form>

      {/* show table items */}
      <div className="flex flex-col gap-y-3 border-2 rounded">
        <h1 className="mb-1 text-xl font-bold">Added Item/Job</h1>
        <table width="100%">
          <thead>
            <tr className="bg-gray-50 h-10 border-none">
              <td className="font-bold text-center">S/N</td>
              <td className="font-bold text-center">Item/Job Description</td>
              <td className="font-bold text-center">Qty</td>
              <td className="font-bold text-center">Rate</td>
              <td className="font-bold text-center">Amount</td>
              <td className="font-bold text-center">Actions</td>
            </tr>
          </thead>
          {list.map(
            (
              { id, jobTitle, jobDescription, quantity, rate, amount },
              index
            ) => (
              <React.Fragment key={id}>
                <tbody>
                  <tr>
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
                    <td className="amount">{amount}</td>
                    <td className="">
                      <span onClick={() => deleteItem(id)}>
                        <MdOutlineDelete className="text-2xl text-red-600 hover:scale-150 transition-all duration-300" />
                      </span>
                      <span onClick={() => editItem(id)}>
                        <CiEdit className="text-2xl text-green-600 hover:scale-150 transition-all duration-300 ml-6" />
                      </span>
                    </td>
                  </tr>
                </tbody>
              </React.Fragment>
            )
          )}
        </table>
        <div>
          Gross Total:{" "}
          {total.toLocaleString("en-US", {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          })}
        </div>
      </div>
    </div>
  );
}
