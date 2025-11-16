// backend/route/Accountsell/account.route.js
import express from "express";
import { protect } from "../../middleware/authMiddleware.js";
import { createAccount, getAccounts, getAccountById, markAccountSold } from "../../controller/Account/account.controller.js";

const router = express.Router();

// Seller posts new account
router.post("/", protect, createAccount);

// List all available accounts
router.get("/", getAccounts);

// Get single account
router.get("/:id", getAccountById);

// Mark account sold
router.put("/:id/sold", protect, markAccountSold);

export default router;
