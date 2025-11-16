import express from "express";
import { protect } from "../../middleware/authMiddleware.js";
import { createTransaction, completeTransaction, getUserTransactions } from "../../controller/transaction/transaction.controller.js";

const router = express.Router();

// Buyer initiates purchase
router.post("/", protect, createTransaction);

// Admin/platform verifies transfer → complete transaction
router.put("/:id/complete", protect, completeTransaction);

// Get all transactions for a user
router.get("/user/:userId", protect, getUserTransactions);

export default router;
