import mongoose from "mongoose";

const SocialAccountSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    platform: { type: String, required: true },
    accountName: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    link: { type: String },
    image: { type: String }, // stored filename

    // Admin approval system
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("SocialAccount", SocialAccountSchema);
