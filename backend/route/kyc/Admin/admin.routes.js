import express from "express";
import { protect, adminOnly } from "../middleware/auth.middleware.js";
import { getAllKYC, getKYCById, updateKYCStatus } from "../controllers/admin.controller.js";

const router = express.Router();

router.use(protect);
router.use(adminOnly);

router.get("/kyc", getAllKYC);
router.get("/kyc/:id", getKYCById);
router.put("/kyc/:id", updateKYCStatus);

export default router;
