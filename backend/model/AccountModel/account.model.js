import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  platform: { type: String, required: true }, // e.g., Instagram
  username: { type: String, required: true },
  followers: { type: Number, default: 0 },
  price: { type: Number, required: true },
  status: { type: String, enum: ["available", "pending", "sold"], default: "available" },
  buyerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  transactionId: { type: mongoose.Schema.Types.ObjectId, ref: "Transaction" },
}, { timestamps: true });

export default mongoose.model("Account", accountSchema);
