import Invoice from "../models/invoice.model.js";

// create user (signup)
export const createInvoice = async (req, res) => {
  const { inv_number, items, staff, company, client } = req.body;

  try {
    // check content from req.body
    if (!inv_number || !items || !staff || !company || !client) {
      throw new Error("All fields are required!");
    }

    // save new business
    const invoice = new Invoice({
      inv_number,
      items,
      staff,
      company,
      client,
    });

    await invoice.save();

    res.status(201).json({
      success: true,
      message: "New Invoice Added Successfully",
      invoice,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// get all registered clients
export const getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find().populate("company");

    res.status(201).json({
      success: true,
      message: "Invoices fetched successfully",
      invoices,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// get one registered client
export const getOneInvoice = async (req, res) => {
  const invoiceId = req.params.invoiceId;

  try {
    const invoice = await Invoice.findById({ _id: invoiceId });

    res.status(201).json({
      success: true,
      message: "Invoice fetched successfully",
      client,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
