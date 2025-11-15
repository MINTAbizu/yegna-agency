import KYC from "../models/kyc.model.js";

export const submitKYC = async (req, res) => {
  try {
    const {
      fullName,
      dob,
      gender,
      nationality,
      maritalStatus,
      idType,
      idNumber,
      issueDate,
      expireDate,
      residentialAddress,
      phone,
      email
    } = req.body;

    const faceId = req.files.faceId?.[0]?.path;
    const idFront = req.files.idFront?.[0]?.path;
    const idBack = req.files.idBack?.[0]?.path;

    const newKYC = new KYC({
      fullName,
      dob,
      gender,
      nationality,
      maritalStatus,
      faceId,
      idType,
      idFront,
      idBack,
      idNumber,
      issueDate,
      expireDate,
      residentialAddress,
      phone,
      email,
    });

    await newKYC.save();

    res.status(201).json({
      message: "KYC submitted successfully",
      data: newKYC,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
