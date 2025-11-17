import express from "express";
import upload from "../../middleware/digitalproduct/upload.js";
import { addphyshicalProduct, getAllphysicalProducts } from "../../controller/digitalProduct.controller/digitalProduct.controller.js";

const router = express.Router();

// Add a new digital product
router.post("/create", upload.single("image"), addphyshicalProduct);

// Get all digital products
router.get("/", getAllphysicalProducts);

export default router;
