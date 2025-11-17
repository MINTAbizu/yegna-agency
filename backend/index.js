import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import fs from "fs";
import path from "path";

import digitalProductRoutes from "./route/digitalProduct.route/digitalProduct.route.js";
// import physicalProductUploadPath from "./route/physhicalproduct/phshicalproduct.js";
import userregister from "./route/user.route/user.route.js";
// kyc
import kycRoutes from './route/kyc/kyc.route.js'
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// CORS
app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));
app.use(express.json());

// MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));
  const __dirname = path.resolve(); // if using ES modules

// Make uploads folder publicly accessible
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
  app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// Ensure upload folders exist
//digital product
const digitalProductUploadPath = path.join(process.cwd(), "uploads/digitalProducts");
if (!fs.existsSync(digitalProductUploadPath)) fs.mkdirSync(digitalProductUploadPath, { recursive: true });
// physhical product
const physhicalProductUploadPath = path.join(process.cwd(), "uploads/digitalProducts");
if (!fs.existsSync(physhicalProductUploadPath)) fs.mkdirSync(physhicalProductUploadPath, { recursive: true });






// Serve uploaded images
app.use("/uploads/digitalProducts", express.static(digitalProductUploadPath));
// app.use("/uploads/physicalproduct", express.static(physicalProductUploadPath));

// Routes
app.use("/api/digital-products", digitalProductRoutes);
app.use("/api/users", userregister);

// kyc
app.use("/api/kyc", kycRoutes)

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
