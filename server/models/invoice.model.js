import mongoose, { mongo } from "mongoose";

const invoiceSchema = new mongoose.Schema(
  {
    inv_number: {
      type: String,
      required: true,
      unique: true,
    },
    items: {
      type: String,
      required: true,
      unique: true,
    },
    staff: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
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
