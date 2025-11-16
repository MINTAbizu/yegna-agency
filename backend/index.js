import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import fs from "fs";
import userroute from "./route/user.route/user.route.js";

import kycRoutes from "./route/kyc/kyc.route.js";
import accountRoutes from "./route/Accountsell/account.route.js";
import transactionRoutes from "./route/transaction/transaction.route.js";




dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Correct CORS configuration
app.use(
  cors({
    origin: [
      "http://localhost:5173",        // local development
      // "https://shala22.netlify.app"   // your deployed frontend (NO trailing slash!)
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // if you’re using cookies or auth tokens
  })
);

app.use(express.json()); // ✅ parse JSON request bodies

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Routes
app.use("/api/users", userroute);
// app.use("/uploads", express.static("uploads")); // file access

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// app.use("/uploads", express.static(path.join(process.cwd(), "backend/uploads")));



// Routes
app.use("/api/kyc", kycRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
const uploadPath = path.join(process.cwd(), "uploads");
// Acoount selling
app.use("/api/accounts", accountRoutes);
app.use("/api/transactions", transactionRoutes);
// Create folder if it doesn't exist

if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}
// ✅ Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));






// Use JWT authentication (protect) middleware to identify req.user.

// Implement payment gateway in createTransaction:

// Charge buyer

// Hold money in escrow (Stripe Connect or similar)

// Only mark transaction as completed after ownership verification.