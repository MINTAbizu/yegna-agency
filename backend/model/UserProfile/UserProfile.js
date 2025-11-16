import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  about: { type: String, maxlength: 500 },
  region: { type: String },
  shopLocation: { type: String },
  telegram: { type: String },
  field: { type: String },
  avatar: { type: String },
  backgroundImage: { type: String },
}, { timestamps: true });

export default mongoose.model("Profile", profileSchema);
