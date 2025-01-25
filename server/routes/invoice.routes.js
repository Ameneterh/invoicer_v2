import express from "express";
import {
  createInvoice,
  getInvoices,
  getOneInvoice,
} from "../controllers/invoice.controller.js";

const router = express.Router();

router.post("/create-invoice", createInvoice);
router.get("/get-invoices", getInvoices);
router.get("/get-invoice/:invoiceId", getOneInvoice);

export default router;
