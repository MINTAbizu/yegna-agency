import React, { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/Authcontext";
const FullMultiStepKYC = () => {
  const [step, setStep] = useState(1);
const { user, loading } = useAuth()

  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    nationality: "",
    maritalStatus: "",

    faceId: null,
    idType: "",
    idFront: null,
    idBack: null,
    idNumber: "",
    issueDate: "",
    expireDate: "",

    residentialAddress: "",
    phone: "",
    email: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // ---------------------------
  // 🔥 Submit to Backend (FormData)
  // ---------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const res = await fetch("http://localhost:5000/api/kyc/submit-kyc", {
        method: "POST",
        body: data,
      });

      const result = await res.json();
      console.log("RESULT:", result);

      if (res.ok) {
        alert("KYC Submitted Successfully!");
        setStep(1);
      } else {
        alert("Submission failed!");
      }
    } catch (error) {
      alert("Server Error");
    }
  };

  return (
    <DashboardLayout>
      <div className="card mt-5 mx-auto shadow" style={{ maxWidth: "600px" }}>
        <div className="card-body">
         {user?.name }

          <h2 className="card-title text-center mb-4">
            {step === 1
              ? "KYC Profile"
              : step === 2
              ? "Identity Verification"
              : "Contact Information"}
          </h2>

          <form onSubmit={handleSubmit}>
            {/* ---------------------
                STEP 1 - PROFILE
            --------------------- */}
            {step === 1 && (
              <>
                <div className="mb-3">
                  <label className="form-label">Full Name*</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="form-control"
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
                    value={formData.gender}
                    onChange={handleChange}
                    className="form-select"
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
                    <option value="">Select</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                  </select>
                </div>
              </>
            )}

            {/* ---------------------
                STEP 2 - ID UPLOAD
            --------------------- */}
            {step === 2 && (
              <>
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

                <div className="d-flex">
                  <div className="mb-3 p-2 w-50">
                    <label className="form-label">ID Type*</label>
                    <select
                      name="idType"
                      value={formData.idType}
                      onChange={handleChange}
                      className="form-select"
                      required
                    >
                      <option value="">Select ID Type</option>
                      <option value="Drivers Licence">Drivers Licence</option>
                      <option value="Passport">Passport</option>
                      <option value="National ID">National ID</option>
                    </select>
                  </div>

                  <div className="mb-3 p-2 w-50">
                    <label className="form-label">ID Number*</label>
                    <input
                      type="text"
                      name="idNumber"
                      value={formData.idNumber}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>
                </div>

                <div className="d-flex">
                  <div className="mb-3 p-2 w-50">
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

                  <div className="mb-3 p-2 w-50">
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
                </div>

                <div className="d-flex">
                  <div className="mb-3 p-2 w-50">
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

                  <div className="mb-3 p-2 w-50">
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
                </div>
              </>
            )}

            {/* ---------------------
                STEP 3 - CONTACT
            --------------------- */}
            {step === 3 && (
              <>
                <div className="mb-3">
                  <label className="form-label">Residential Address*</label>
                  <input
                    type="text"
                    name="residentialAddress"
                    value={formData.residentialAddress}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              </>
            )}

            {/* ---------------------
                BUTTONS
            --------------------- */}
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

              {step < 3 && (
                <button
                  type="button"
                  className="btn btn-primary ms-auto"
                  onClick={nextStep}
                >
                  Next
                </button>
              )}

              {step === 3 && (
             <Link to={'/UserProfile'}>    <button type="submit" className="btn btn-success ms-auto">
                  Submit
                </button>
                </Link> 
              )}
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FullMultiStepKYC;
