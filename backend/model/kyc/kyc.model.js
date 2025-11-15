import mongoose from "mongoose";

const KYCSchema = new mongoose.Schema({
  // Step 1
  fullName: { type: String, required: true },
  dob: { type: String, required: true },
  gender: { type: String, required: true },
  nationality: { type: String, required: true },
  maritalStatus: { type: String, required: true },

  // Step 2
  faceId: { type: String, required: true },
  idType: { type: String, required: true },
  idFront: { type: String, required: true },
  idBack: { type: String, required: true },
  idNumber: { type: String, required: true },
  issueDate: { type: String, required: true },
  expireDate: { type: String, required: true },

  // Step 3
  residentialAddress: { type: String, required: true },
  phone: String,
  email: String,
}, { timestamps: true });

export default mongoose.model("KYC", KYCSchema);
