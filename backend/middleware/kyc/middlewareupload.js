import multer from "multer";
import path from "path";

const uploadPath = path.join(process.cwd(), "uploads"); // <-- backend/uploads

console.log("UPLOAD PATH:", uploadPath); // DEBUG

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

export default upload;
