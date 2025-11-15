import express from "express";
import upload from "../middleware/upload.js";
import { submitKYC } from "../controllers/kyc.controller.js";

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

export default router;
