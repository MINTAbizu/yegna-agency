import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import userroute from "./route/user.route/user.route.js";


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
app.use("/api", userroute);


// ✅ Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
