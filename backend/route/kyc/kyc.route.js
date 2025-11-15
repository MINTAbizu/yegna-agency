import express from "express";
import upload from "../../middleware/kyc/middlewareupload.js";
import { submitKYC } from "../../controller/kyc/kyc.controller.js";

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
