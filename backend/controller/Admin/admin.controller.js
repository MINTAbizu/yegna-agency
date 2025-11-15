import KYC from "../models/KYC.js";

export const getAllKYC = async (req, res) => {
  const kycs = await KYC.find().populate("userId", "name email");
  res.json(kycs);
};

export const getKYCById = async (req, res) => {
  const kyc = await KYC.findById(req.params.id).populate("userId", "name email");
  if (!kyc) return res.status(404).json({ message: "KYC not found" });
  res.json(kyc);
};

export const updateKYCStatus = async (req, res) => {
  const { status, adminComment } = req.body;
  const kyc = await KYC.findById(req.params.id);
  if (!kyc) return res.status(404).json({ message: "KYC not found" });

  kyc.status = status;
  kyc.adminComment = adminComment || "";
  await kyc.save();

  res.json(kyc);
};
