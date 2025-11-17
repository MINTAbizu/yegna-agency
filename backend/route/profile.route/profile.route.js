import express from "express";
import { createProfile, getAllProfiles, updateProfileStatus, getApprovedProfiles } from "../../controller/profilecontroller/profile.controller.js";
import { protect } from "../../middleware/authMiddleware.js"; // protect + admin role
import multer from "multer";

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// User submit profile
router.post("/create", protect, upload.fields([
  { name: "avatar", maxCount: 1 },
  { name: "backgroundImage", maxCount: 1 },
]), createProfile);

// Admin: get all profiles
router.get("/", protect,  getAllProfiles);

// Admin: approve/reject profile
// router.patch("/:id/status", protect,  updateProfileStatus);
router.patch("/:id/status", protect, updateProfileStatus);

// Public: get all approved profiles
router.get("/approved", getApprovedProfiles);

export default router;
