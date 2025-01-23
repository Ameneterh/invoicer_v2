import express from "express";
import Business from "../models/business.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import authMiddleware from "../middlewares/authMiddleware.js";
import {
  addBusiness,
  verifyEmail,
  getBusinesses,
} from "../controllers/business.controller.js";

const router = express.Router();

router.post("/add-new-business", addBusiness);
router.post("/verify-email", verifyEmail);
router.get("/get-businesses", getBusinesses);

export default router;
