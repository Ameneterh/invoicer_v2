import { useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Button } from "flowbite-react";
import InvoiceHeader from "../components/InvoiceHeader";
import InvoiceFooter from "../components/InvoiceFooter";
import InvoiceNotes from "../components/InvoiceNotes";
import InvoiceTable from "../components/InvoiceTable";
import ClientDetails from "../components/ClientDetails";
import CompanyDetails from "../components/CompanyDetails";
import { useState } from "react";
import TableForm from "../components/TableForm";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import MainLayout from "../layout/MainLayout";
import { useAuthStore } from "../store/authStore";
import { useClientStore } from "../store/clientStore";
import { useInvoiceStore } from "../store/invoiceStore";

export default function CreateInvoice() {
  const { user } = useAuthStore();
  const { getAllInvoices } = useInvoiceStore();

  const navigate = useNavigate();

  const contentRef = useRef();
  const handlePrint = useReactToPrint({ contentRef });

  const [isChecked, setIsChecked] = useState(false);
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

  //   get clients and one client
  const [clients, setClients] = useState([]);
  const [client, setClient] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const { registerClient, getAllClients, getOneClient } = useClientStore();

  console.log(invoices);
  console.log("affiliation", user.affiliation._id);
  //   console.log("invoice", invoices.company._id);

  const getRegisteredClients = async () => {
    try {
      const { clients } = await getAllClients();
      setClients(clients);
    } catch (error) {
      console.log(error);
    }
  };

  const getInvoices = async () => {
    try {
      const { invoices } = await getAllInvoices();
      const filteredInvoices = invoices.filter(
        (invoice) => user.affiliation._id === invoice.company._id
      );
      setInvoices(filteredInvoices);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user.fullname === undefined) {
      navigate("/add-handler");
    }
    getRegisteredClients();
    getInvoices();
  }, []);

  const handleChange = (e) => {
    const isChecked = e.target.checked;
    setIsChecked(isChecked);
  };

  const getClient = async (clientId) => {
    try {
      const { client } = await getOneClient(clientId);
      setClient(client);
      setName(client.client_name);
      setEmail(client.client_email);
      setPhone(client.client_phone);
      setAddress(client.client_address);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen max-w-7xl w-full mx-auto mt-2 p-4 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl bg-white border border-gray-800"
      >
        <InvoiceHeader handlePrint={handlePrint} />

        {/* content of invoice to print */}
        {showInvoice ? (
          <>
            <div ref={contentRef} className="w-full px-20 py-10">
              <CompanyDetails business={user.affiliation} />

              <ClientDetails
                name={name}
                address={address}
                phone={phone}
                inv_number={(invoices.length + 1).toString().padStart(6, "0")}
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
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-bold">Enter Client Details</h1>
                  <p className="flex-1 h-[1px] bg-slate-500"></p>
                </div>
                <div className="flex flex-col sm:flex-row gap-5 items-center mb-5">
                  <div className="flex items-center gap-2 text-sm">
                    <input
                      onChange={(e) => handleChange(e)}
                      type="checkbox"
                      className="h-6 w-6"
                    />
                    <label>Choose Client from Database</label>
                  </div>
                  {isChecked && (
                    <select
                      onChange={(e) => getClient(e.target.value)}
                      className="w-full sm:w-1/4 pl-3 pr-3 py-2 rounded-lg border border-gray-700 text-sm placeholder-gray-400 transition duration-200"
                    >
                      <option>Select your Client</option>
                      {clients &&
                        clients.map((client, index) => {
                          return (
                            <option key={index} value={client._id}>
                              {client.client_name}
                            </option>
                          );
                        })}
                    </select>
                  )}
                </div>
                <div className="md:grid grid-cols-3 gap-10">
                  <div className="flex flex-col flex-1">
                    <label htmlFor="client_name" className="text-sm mb-1">
                      Enter Client's Name
                    </label>
                    <input
                      type="text"
                      name="client_name"
                      id="client_name"
                      placeholder={
                        client.length !== 0
                          ? client.client_name
                          : "Enter Client Name"
                      }
                      autoComplete="off"
                      className="p-2"
                      value={client.length !== 0 ? client.client_name : name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      disabled={isChecked}
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
                      value={client.length !== 0 ? client.client_phone : phone}
                      onChange={(e) => setPhone(e.target.value)}
                      disabled={isChecked}
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
                      value={client.length !== 0 ? client.client_email : email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isChecked}
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
                    value={
                      client.length !== 0 ? client.client_address : address
                    }
                    onChange={(e) => setAddress(e.target.value)}
                    disabled={isChecked}
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
                      className={`p-2 bg-gray-200`}
                      value={(invoices.length + 1).toString().padStart(6, "0")}
                      onChange={(e) => setInvNumber(e.target.value)}
                      disabled
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
      </motion.div>
    </MainLayout>
  );
}
