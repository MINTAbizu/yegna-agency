// backend/routes/profileRoutes.js
import express from "express";
import { createProfile } from "../../controller/profilecontroller/profile.controller.js";
import { protect } from "../../middleware/authMiddleware.js"; // JWT auth middleware
import multer from "multer";
const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });


router.post(
  "/create",
  protect,
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "backgroundImage", maxCount: 1 },
  ]),
  createProfile
);

export default router;