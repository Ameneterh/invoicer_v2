import { useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import InvoiceHeader from "../components/InvoiceHeader";
import InvoiceFooter from "../components/InvoiceFooter";
import InvoiceNotes from "../components/InvoiceNotes";
import InvoiceTable from "../components/InvoiceTable";
import ClientDetails from "../components/ClientDetails";
import CompanyDetails from "../components/CompanyDetails";
import { useState } from "react";
import TableForm from "../components/TableForm";
import { Button } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function InvoicePage() {
  const { business } = useSelector((state) => state.businesses);
  const navigate = useNavigate();

  const contentRef = useRef();
  const handlePrint = useReactToPrint({ contentRef });

  const [showInvoice, setShowInvoice] = useState(false);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [invNumber, setInvNumber] = useState("");
  const [invDate, setInvDate] = useState("");
  const [invoiceType, setInvoiceType] = useState("");
  const [validity, setValidity] = useState("");

  //   invoice table states
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [rate, setRate] = useState("");
  const [amount, setAmount] = useState("");

  //   populate list
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (business.staff_name === undefined) {
      navigate("/add-user-details");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <main className="w-full p-4 max-w-5xl mx-auto mt-5 bg-white rounded shadow mb-20">
      <InvoiceHeader handlePrint={handlePrint} />

      {/* content of invoice to print */}
      {showInvoice ? (
        <>
          <div ref={contentRef} className="w-full px-20 py-10">
            <CompanyDetails business={business} />

            <ClientDetails
              name={name}
              address={address}
              phone={phone}
              inv_number={invNumber}
              inv_date={invDate}
              validity={validity}
              invoiceType={invoiceType}
              total={total}
            />

            <InvoiceTable
              jobTitle={jobTitle}
              jobDescription={jobDescription}
              quantity={quantity}
              rate={rate}
              amount={amount}
              list={list}
              setList={setList}
              total={total}
              setTotal={setTotal}
            />

            {/* <AmountInWords /> */}

            <InvoiceNotes />

            <InvoiceFooter />
          </div>
          <button
            onClick={() => setShowInvoice(false)}
            className="bg-blue-600 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-600 hover:bg-transparent hover:text-blue-600 transition-all duration-300 mt-6"
          >
            Edit Details
          </button>
        </>
      ) : (
        <>
          <div className="flex flex-col justify-center gap-y-5">
            {/* client details */}
            <article className="flex flex-col gap-y-3 px-5 border-2 rounded">
              <h1 className="mb-5 text-xl font-bold">Enter Client Details</h1>
              <div className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col flex-1">
                  <label htmlFor="client_name" className="text-sm mb-1">
                    Enter Client's Name
                  </label>
                  <input
                    type="text"
                    name="client_name"
                    id="client_name"
                    placeholder="Enter Client Name"
                    autoComplete="off"
                    className="p-2"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col flex-1">
                  {" "}
                  <label htmlFor="client_phone" className="text-sm mb-1">
                    Enter Client's Phone
                  </label>
                  <input
                    type="text"
                    name="client_phone"
                    id="client_phone"
                    placeholder="Enter Client Phone"
                    autoComplete="off"
                    className="p-2"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label htmlFor="client_email" className="text-sm mb-1">
                    Enter Client's Email
                  </label>
                  <input
                    type="text"
                    name="client_email"
                    id="client_email"
                    placeholder="Enter Client Email"
                    autoComplete="off"
                    className="p-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col flex-1">
                <label htmlFor="client_address" className="text-sm mb-1">
                  Enter Client's Address
                </label>
                <textarea
                  rows={2}
                  name="client_address"
                  id="client_address"
                  placeholder="Enter Client Address"
                  autoComplete="off"
                  className="p-2"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </article>

            {/* invoice details */}
            <article className="flex flex-col gap-y-3 px-5 border-2 rounded">
              <div className="md:grid grid-cols-4 gap-10">
                <div className="flex flex-col flex-1">
                  <label htmlFor="inv_number" className="text-sm mb-1">
                    Invoice Number
                  </label>
                  <input
                    type="text"
                    name="inv_number"
                    id="inv_number"
                    placeholder="Invoice Number"
                    autoComplete="off"
                    className="p-2"
                    value={invNumber}
                    onChange={(e) => setInvNumber(e.target.value)}
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label htmlFor="inv_date" className="text-sm mb-1">
                    Invoice Date
                  </label>
                  <input
                    type="date"
                    name="inv_date"
                    id="inv_date"
                    placeholder="Enter Invoice Date"
                    autoComplete="off"
                    className="p-2"
                    value={invDate}
                    onChange={(e) => setInvDate(e.target.value)}
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label htmlFor="validity" className="text-sm mb-1">
                    Invoice Type
                  </label>
                  <select
                    // type="text"
                    // name="invoice_type"
                    id="invoice_type"
                    className="p-2"
                    // value={validity}
                    onChange={(e) => setInvoiceType(e.target.value)}
                  >
                    <option>Select Invoice Type</option>
                    <option value="proforma">Proforma Invoice</option>
                    <option value="cash">Cssh Sales Invoice</option>
                  </select>
                </div>

                {invoiceType === "proforma" ? (
                  <div className="flex flex-col flex-1">
                    <label htmlFor="validity" className="text-sm mb-1">
                      Validity Period (Days)
                    </label>
                    <input
                      type="number"
                      name="validity"
                      id="validity"
                      placeholder="Validity Period (Days)"
                      autoComplete="off"
                      className="p-2"
                      value={validity}
                      onChange={(e) => setValidity(e.target.value)}
                    />
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </article>

            {/* table form */}
            <article>
              <TableForm
                jobTitle={jobTitle}
                setJobTitle={setJobTitle}
                jobDescription={jobDescription}
                setJobDescription={setJobDescription}
                quantity={quantity}
                setQuantity={setQuantity}
                rate={rate}
                setRate={setRate}
                amount={amount}
                setAmount={setAmount}
                list={list}
                setList={setList}
                total={total}
                setTotal={setTotal}
              />
            </article>

            {/* preview button */}
            <Button
              type="primary"
              onClick={() => setShowInvoice(true)}
              className="font-bold py-2 px-8 rounded"
            >
              Preview Invoice
            </Button>
          </div>
        </>
      )}
    </main>
  );
}

export default InvoicePage;
