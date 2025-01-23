import express from "express";
import {
  addHandler,
  verifyHandlerRegistration,
  login,
  logout,
  forgotPassword,
  resetPassword,
  CheckAuth,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.get("/check-auth", verifyToken, CheckAuth);

router.post("/add-handler", addHandler);
router.post("/verify-handler", verifyHandlerRegistration);
router.post("/user-login", login);
router.post("/user-logout", logout);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

export default router;
