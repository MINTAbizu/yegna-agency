import React, { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import ContactInformationForm from "./ContactInformationForm";
import MultiStepKYC from "./MultiStepKYC"; // existing steps for KYC + ID

const FullKYCFlow = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("All KYC Data:", formData);
    alert("All KYC information submitted successfully!");
  };

  return (
    <DashboardLayout>
      {step === 1 && (
        <MultiStepKYC
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
          onSubmit={handleSubmit}
        />
      )}
      {step === 2 && (
        <ContactInformationForm
          formData={formData}
          setFormData={setFormData}
          nextStep={null}
          prevStep={prevStep}
          onSubmit={handleSubmit}
        />
      )}
    </DashboardLayout>
  );
};

export default FullKYCFlow;
