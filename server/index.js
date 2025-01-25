import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

import dbConnection from "./config/dbConfig.js";
import businessRouter from "./routes/business.routes.js";
import authRouter from "./routes/auth.routes.js";
import clientRouter from "./routes/client.routes.js";
import invoiceRouter from "./routes/invoice.routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/server/auth", authRouter);
app.use("/server/business", businessRouter);
app.use("/server/client", clientRouter);
app.use("/server/invoice", invoiceRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  dbConnection(), console.log(`NodeJS/Express Server Started on Port ${PORT}`);
});
