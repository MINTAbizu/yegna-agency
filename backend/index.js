import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import fs from "fs";
import path from "path";

import digitalProductRoutes from "./route/digitalProduct.route/digitalProduct.route.js";
import userregister from "./route/user.route/user.route.js";

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

// Ensure upload folders exist
const digitalProductUploadPath = path.join(process.cwd(), "uploads/digitalProducts");
if (!fs.existsSync(digitalProductUploadPath)) fs.mkdirSync(digitalProductUploadPath, { recursive: true });

// Serve uploaded images
app.use("/uploads/digitalProducts", express.static(digitalProductUploadPath));

// Routes
app.use("/api/digital-products", digitalProductRoutes);
app.use("/api/users", userregister);

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
