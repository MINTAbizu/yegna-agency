import mongoose from "mongoose";

const digitalProductSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    telegram: String,
    drive: String,
    dropbox: String,
    productLink: String,
  },
  { timestamps: true }
);

export default mongoose.model("DigitalProduct", digitalProductSchema);
