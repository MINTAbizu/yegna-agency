import React, { useState } from "react";

const ContactInformationForm = ({ formData, setFormData, nextStep, prevStep, onSubmit }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="card mx-auto shadow" style={{ maxWidth: "600px" }}>
      <div className="card-body">
        <h2 className="card-title text-center mb-4">Contact Information</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">Residential Address*</label>
            <input
              type="text"
              name="residentialAddress"
              value={formData.residentialAddress || ""}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your residential address"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone || ""}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your email address"
            />
          </div>

          {/* Navigation Buttons */}
          <div className="d-flex justify-content-between mt-4">
            {prevStep && (
              <button type="button" className="btn btn-secondary" onClick={prevStep}>
                Previous
              </button>
            )}
            {nextStep ? (
              <button type="button" className="btn btn-primary ms-auto" onClick={nextStep}>
                Next
              </button>
            ) : (
              <button type="submit" className="btn btn-success ms-auto">
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactInformationForm;
