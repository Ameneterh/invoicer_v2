import express from "express";
import {
  addClient,
  getClients,
  getOneClient,
} from "../controllers/client.controller.js";

const router = express.Router();

router.post("/add-client", addClient);
router.get("/get-clients", getClients);
router.get("/get-client/:clientId", getOneClient);

export default router;
