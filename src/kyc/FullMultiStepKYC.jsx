import React, { useState, useEffect } from "react";
// import DashboardLayout from "./DashboardLayout";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/Authcontext";
import DashboardLayout from "./DashboardLayout";

const FullMultiStepKYC = () => {
  const [step, setStep] = useState(1);
  const { user, loading } = useAuth();
  const navigate = useNavigate();

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

  // Redirect if KYC already submitted
  useEffect(() => {
    if (!loading && user?.kycSubmitted) {
      alert("You have already submitted your KYC.");
      navigate("/UserProfile");
    }
  }, [user, loading, navigate]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateStep = () => {
    if (step === 1) {
      const { fullName, dob, gender, nationality, maritalStatus } = formData;
      if (!fullName || !dob || !gender || !nationality || !maritalStatus) {
        alert("Please fill all required fields in this step.");
        return false;
      }
    } else if (step === 2) {
      const { faceId, idType, idFront, idBack, idNumber, issueDate, expireDate } = formData;
      if (!faceId || !idType || !idFront || !idBack || !idNumber || !issueDate || !expireDate) {
        alert("Please fill all required fields in this step.");
        return false;
      }
    } else if (step === 3) {
      const { residentialAddress } = formData;
      if (!residentialAddress) {
        alert("Please fill all required fields in this step.");
        return false;
      }
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep()) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));

    try {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:5000/api/kyc/submit-kyc", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: data,
      });

      const result = await res.json();
      console.log("RESULT:", result);

      if (res.ok) {
        alert("KYC Submitted Successfully!");
        navigate("/UserProfile");
      } else {
        alert("Submission failed!");
      }
    } catch (error) {
      alert("Server Error");
      console.error(error);
    }
  };

  return (
    <DashboardLayout>
      <div className="d-flex justify-content-center py-5">
        <div className="card shadow p-3" style={{ maxWidth: "500px", width: "100%" }}>
          <div className="card-body">
            <h5>{user?.name}</h5>
            <h2 className="card-title text-center mb-4">
              {step === 1 ? "KYC Profile" : step === 2 ? "Identity Verification" : "Contact Information"}
            </h2>

            <form onSubmit={handleSubmit}>
              {/* STEP 1 */}
              {step === 1 && (
                <>
                  <div className="mb-2">
                    <label className="form-label">Full Name*</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="form-control form-control-sm" />
                  </div>

                  <div className="mb-2">
                    <label className="form-label">Date of Birth*</label>
                    <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="form-control form-control-sm" />
                  </div>

                  <div className="mb-2">
                    <label className="form-label">Gender*</label>
                    <select name="gender" value={formData.gender} onChange={handleChange} className="form-select form-select-sm">
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="mb-2">
                    <label className="form-label">Nationality*</label>
                    <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} className="form-control form-control-sm" />
                  </div>

                  <div className="mb-2">
                    <label className="form-label">Marital Status*</label>
                    <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} className="form-select form-select-sm">
                      <option value="">Select</option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                      <option value="Divorced">Divorced</option>
                    </select>
                  </div>
                </>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <>
                  <div className="mb-2">
                    <label className="form-label">Face ID (Selfie)*</label>
                    <input type="file" name="faceId" accept="image/*" onChange={handleChange} className="form-control form-control-sm" />
                  </div>

                  <div className="d-flex gap-2 flex-wrap">
                    <div className="flex-fill">
                      <label className="form-label">ID Type*</label>
                      <select name="idType" value={formData.idType} onChange={handleChange} className="form-select form-select-sm">
                        <option value="">Select ID Type</option>
                        <option value="Drivers Licence">Drivers Licence</option>
                        <option value="Passport">Passport</option>
                        <option value="National ID">National ID</option>
                      </select>
                    </div>

                    <div className="flex-fill">
                      <label className="form-label">ID Number*</label>
                      <input type="text" name="idNumber" value={formData.idNumber} onChange={handleChange} className="form-control form-control-sm" />
                    </div>
                  </div>

                  <div className="d-flex gap-2 flex-wrap">
                    <div className="flex-fill">
                      <label className="form-label">ID Front*</label>
                      <input type="file" name="idFront" accept="image/*,application/pdf" onChange={handleChange} className="form-control form-control-sm" />
                    </div>

                    <div className="flex-fill">
                      <label className="form-label">ID Back*</label>
                      <input type="file" name="idBack" accept="image/*,application/pdf" onChange={handleChange} className="form-control form-control-sm" />
                    </div>
                  </div>

                  <div className="d-flex gap-2 flex-wrap">
                    <div className="flex-fill">
                      <label className="form-label">Issue Date*</label>
                      <input type="date" name="issueDate" value={formData.issueDate} onChange={handleChange} className="form-control form-control-sm" />
                    </div>

                    <div className="flex-fill">
                      <label className="form-label">Expire Date*</label>
                      <input type="date" name="expireDate" value={formData.expireDate} onChange={handleChange} className="form-control form-control-sm" />
                    </div>
                  </div>
                </>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <>
                  <div className="mb-2">
                    <label className="form-label">Residential Address*</label>
                    <input type="text" name="residentialAddress" value={formData.residentialAddress} onChange={handleChange} className="form-control form-control-sm" />
                  </div>

                  <div className="mb-2">
                    <label className="form-label">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-control form-control-sm" />
                  </div>

                  <div className="mb-2">
                    <label className="form-label">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control form-control-sm" />
                  </div>
                </>
              )}

              {/* BUTTONS */}
              <div className="d-flex justify-content-between mt-3">
                {step > 1 && <button type="button" className="btn btn-secondary btn-sm" onClick={prevStep}>Previous</button>}
                {step < 3 && <button type="button" className="btn btn-primary btn-sm ms-auto" onClick={nextStep}>Next</button>}
                {step === 3 && <button type="submit" className="btn btn-success btn-sm ms-auto">Submit</button>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FullMultiStepKYC;
