// MultiStepKYC.jsx
import React, { useState } from "react";
import "./RecognitionForm.css"; // optional custom CSS
import DashboardLayout from "./DashboardLayout";

const MultiStepKYC = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    // Step 1 - KYC Profile
    fullName: "",
    dob: "",
    gender: "",
    nationality: "",
    maritalStatus: "",

    // Step 2 - ID Recognition
    faceId: null,
    idType: "",
    idFront: null,
    idBack: null,
    idNumber: "",
    issueDate: "",
    expireDate: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Final Form Data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <DashboardLayout>
      <div className="card mx-auto shadow" style={{ maxWidth: "600px" }}>
        <div className="card-body">
          <h2 className="card-title text-center mb-4">
            {step === 1 ? "KYC Profile" : "Identity Verification"}
          </h2>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <>
                {/* Step 1: KYC */}
                <div className="mb-3">
                  <label className="form-label">Full Name*</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Date of Birth*</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Gender*</label>
                  <select
                    name="gender"
                    className="form-select"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Nationality*</label>
                  <input
                    type="text"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your nationality"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Marital Status*</label>
                  <select
                    name="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    <option value="">Select Marital Status</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                  </select>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                {/* Step 2: Recognition */}
                <div className="mb-3">
                  <label className="form-label">Face ID (Selfie)*</label>
                  <input
                    type="file"
                    name="faceId"
                    accept="image/*"
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">ID Type*</label>
                  <select
                    name="idType"
                    className="form-select"
                    value={formData.idType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select ID Type</option>
                    <option value="Drivers Licence">Drivers Licence</option>
                    <option value="Passport">Passport</option>
                    <option value="National ID">National ID</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">ID Front*</label>
                  <input
                    type="file"
                    name="idFront"
                    accept="image/*,application/pdf"
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">ID Back*</label>
                  <input
                    type="file"
                    name="idBack"
                    accept="image/*,application/pdf"
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">ID Number*</label>
                  <input
                    type="text"
                    name="idNumber"
                    value={formData.idNumber}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your ID number"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Issue Date*</label>
                  <input
                    type="date"
                    name="issueDate"
                    value={formData.issueDate}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Expire Date*</label>
                  <input
                    type="date"
                    name="expireDate"
                    value={formData.expireDate}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
              </>
            )}

            {/* Navigation Buttons */}
            <div className="d-flex justify-content-between mt-4">
              {step > 1 && (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={prevStep}
                >
                  Previous
                </button>
              )}

              {step < 2 && (
                <button
                  type="button"
                  className="btn btn-primary ms-auto"
                  onClick={nextStep}
                >
                  Next
                </button>
              )}

              {step === 2 && (
                <button type="submit" className="btn btn-success ms-auto">
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MultiStepKYC;
