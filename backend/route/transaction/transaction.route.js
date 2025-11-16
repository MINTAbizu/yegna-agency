import express from "express";
import { protect } from "../../middleware/authMiddleware.js";
import {
  createTransaction,
  completeTransaction,
  getUserTransactions,
  getTransactionById,
} from "../../controller/transaction/transaction.controller.js";

const router = express.Router();

// Buyer creates a new transaction
router.post("/", protect, createTransaction);

// Complete transaction (mark as completed after payment verification)
router.put("/:transactionId/complete", protect, completeTransaction);

// Get all transactions for logged-in user
router.get("/my-transactions", protect, getUserTransactions);

// Get single transaction
router.get("/:transactionId", protect, getTransactionById);

export default router;
