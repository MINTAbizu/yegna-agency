import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import userroute from "./route/user/user.route.js";
import booking from "./route/Booking/booking.route.js";
import menuRoutes from "./route/menu/menu.routes.js";
import ChapaPayment from "./payment/chaparoute.js";
import inventoryRoutes from "./route/inventory/inventory.routes.js";
import orderRoutes from "./route/order/orders.routes.js";
// import customersRoutes from "./route/customers/customers.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Correct CORS configuration
app.use(
  cors({
    origin: [
      "http://localhost:5173",        // local development
      "https://shala22.netlify.app"   // your deployed frontend (NO trailing slash!)
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
app.use("/api", booking);
app.use("/api/menu", menuRoutes);
app.use("/api/items", inventoryRoutes);
app.use("/api/orders", orderRoutes);
// app.use("/api", customersRoutes);
app.use("/api", ChapaPayment);

// ✅ Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
