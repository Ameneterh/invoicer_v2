import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema(
  {
    inv_number: {
      type: String,
      required: true,
      unique: true,
    },
    inv_copy: {
      type: String,
      required: true,
    },
    staff: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Business",
    },
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

const Invoice = mongoose.model("Invoice", invoiceSchema);

export default Invoice;
