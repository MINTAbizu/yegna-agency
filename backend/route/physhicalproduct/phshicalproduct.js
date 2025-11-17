import express from "express";
import upload from "../../middleware/physhicalproduct/physicalproduct.middleare.js";
import { addphyshicalProduct, getAllphysicalProducts } from "../../controller/physicalproduct/physicalproduct.js";

const router = express.Router();

// Add a new digital product
router.post("/create", upload.single("image"), addphyshicalProduct);

// Get all digital products
router.get("/", getAllphysicalProducts);

export default router;
