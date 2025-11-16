import multer from "multer";
import path from "path";

// Storage for Avatar
const avatarStorage = multer.diskStorage({
  destination: "uploads/avatars/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-avatar" + path.extname(file.originalname));
  },
});

// Storage for Background
const backgroundStorage = multer.diskStorage({
  destination: "uploads/backgrounds/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-bg" + path.extname(file.originalname));
  },
});

// Multer filters (only images)
const fileFilter = (req, file, cb) => {
  const allowed = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
  allowed.includes(file.mimetype) ? cb(null, true) : cb(null, false);
};

export const uploadAvatar = multer({ storage: avatarStorage, fileFilter });
export const uploadBackground = multer({ storage: backgroundStorage, fileFilter });
