import mongoose from "mongoose";

const businessSchema = new mongoose.Schema(
  {
    business_name: {
      type: String,
      required: true,
      unique: true,
    },
    business_email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    business_phone: {
      type: String,
      required: true,
      unique: true,
    },
    business_address: {
      type: String,
      required: true,
    },
    banker: {
      type: String,
    },
    account_name: {
      type: String,
    },
    account_number: {
      type: String,
    },
    business_logo: {
      type: String,
      default:
        "https://img.freepik.com/premium-vector/black-white-handshake-symbol-with-starburst-background_1294240-23568.jpg?semt=ais_hybrid",
    },
    status: {
      type: String,
      default: "active",
    },
    isVerified: {
      type: Boolean,
      default: "false",
    },
    verificationToken: String,
    verificationTokenExpiresAt: Date,
  },
  { timestamps: true }
);

const Business = mongoose.model("Business", businessSchema);

export default Business;
