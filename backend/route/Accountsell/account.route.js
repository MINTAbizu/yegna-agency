import express from "express";
import { protect } from "../../middleware/authMiddleware.js";
import { createAccount, getAccounts, getAccountById, markAccountSold } from "../../controller/Account/account.controller.js";

const router = express.Router();

// Seller posts new account
router.post("/", protect, createAccount);

// List all available accounts for buyers
router.get("/", getAccounts);

// Get single account details
router.get("/:id", getAccountById);

// Mark account sold (used after transaction is verified)
router.put("/:id/sold", protect, markAccountSold);

export default router;
