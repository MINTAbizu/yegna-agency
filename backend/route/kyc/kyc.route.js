import express from "express";
import upload from "../../middleware/kyc/middlewareupload.js";
import { submitKYC, getAllKYC, deleteKYC } from "../../controller/kyc/kyc.controller.js";

const router = express.Router();

router.post(
  "/submit-kyc",
  upload.fields([
    { name: "faceId", maxCount: 1 },
    { name: "idFront", maxCount: 1 },
    { name: "idBack", maxCount: 1 },
  ]),
  submitKYC
);

router.get("/", getAllKYC);           // Get all KYC
router.delete("/:id", deleteKYC);     // Delete KYC

export default router;
