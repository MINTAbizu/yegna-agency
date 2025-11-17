import express from "express";
import { upload } from "../middleware/upload.js";

import {
  createSocialAccount,
  approveAccount,
  rejectAccount,
  getApprovedAccounts,
  getPendingAccounts,
} from "../controllers/socialAccount.controller.js";

import { protectRoute, adminOnly } from "../middleware/auth.js";

const router = express.Router();

// USER: Post new account
router.post("/create", protectRoute, upload.single("image"), createSocialAccount);

// PUBLIC: Get only approved listings
router.get("/approved", getApprovedAccounts);

// ADMIN: See pending accounts
router.get("/pending", protectRoute, adminOnly, getPendingAccounts);

// ADMIN: Approve account
router.put("/approve/:id", protectRoute, adminOnly, approveAccount);

// ADMIN: Reject account
router.put("/reject/:id", protectRoute, adminOnly, rejectAccount);

export default router;
