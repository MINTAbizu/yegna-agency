import KYC from "../../model/kyc/kyc.model.js";

// Submit KYC
export const submitKYC = async (req, res) => {
  try {
    const {
      fullName, dob, gender, nationality, maritalStatus,
      idType, idNumber, issueDate, expireDate,
      residentialAddress, phone, email
    } = req.body;

    const faceId = req.files.faceId?.[0]?.filename;
const idFront = req.files.idFront?.[0]?.filename;
const idBack = req.files.idBack?.[0]?.filename;


    const newKYC = new KYC({
      fullName, dob, gender, nationality, maritalStatus,
      faceId, idType, idFront, idBack, idNumber, issueDate, expireDate,
      residentialAddress, phone, email,
    });

    await newKYC.save();
    res.status(201).json({ message: "KYC submitted successfully", data: newKYC });
  } catch (error) {
    console.error("submitKYC error:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get all KYC
export const getAllKYC = async (req, res) => {
  try {
    const allKYC = await KYC.find(); // fetch all submissions
    res.status(200).json(allKYC);
  } catch (error) {
    console.error("getAllKYC error:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Delete KYC
export const deleteKYC = async (req, res) => {
  try {
    const kyc = await KYC.findByIdAndDelete(req.params.id);
    if (!kyc) return res.status(404).json({ message: "KYC not found" });
    res.status(200).json({ message: "KYC deleted successfully" });
  } catch (error) {
    console.error("deleteKYC error:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
