import express from "express";
import upload from "../../middleware/digitalproduct/upload.js";
import { addDigitalProduct, getAllDigitalProducts } from "../../controller/digitalProduct.controller/digitalProduct.controller.js";

const router = express.Router();

// Add a new digital product
router.post("/create", upload.single("image"), addDigitalProduct);

// Get all digital products
router.get("/", getAllDigitalProducts);

export default router;
