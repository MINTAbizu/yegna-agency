// KycDashboardBootstrap.jsx
import React, { useState } from "react";
import "./KycDashboard.css"; // Custom CSS

const KycDashboardBootstrap = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    nationality: "",
    maritalStatus: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("KYC Data:", formData);
    setSubmitted(true);
  };

  const sidebarItems = [
    "Home",
    "Dashboard",
    "Create Pro Account",
    "View Page",
    "Setting",
    "Bank",
    "Payments",
    "Help",
  ];

  return (
    <div className="dashboard-wrapper">
      {/* Sidebar */}
      <nav className="sidebar bg-light">
        <div className="sidebar-header text-center py-4 fw-bold">
          MintsenotBizuayehw
        </div>
        <ul className="list-unstyled">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <a href="#" className="d-block py-2 px-3 sidebar-link">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="header bg-white shadow-sm d-flex justify-content-between align-items-center px-4">
          <h1 className="h5 m-0">KYC Dashboard</h1>
          <div className="d-flex align-items-center">
            <div className="position-relative me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-bell text-dark"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 1.985-1.75H6.015A2 2 0 0 0 8 16zm.5-14a1.5 1.5 0 1 0-1 0v.5c0 .828-.168 1.654-.5 2.39a5.978 5.978 0 0 1-1.67 2.125c-.245.196-.36.484-.36.777V11h7v-1.708c0-.293-.115-.581-.36-.777a5.978 5.978 0 0 1-1.67-2.125c-.332-.736-.5-1.562-.5-2.39V2z" />
              </svg>
              <span className="notification-dot"></span>
            </div>
            <div className="avatar bg-secondary text-white d-flex justify-content-center align-items-center">
              M
            </div>
          </div>
        </header>

        {/* Form */}
        <main className="container py-5">
          <div className="card mx-auto shadow" style={{ maxWidth: "600px" }}>
            <div className="card-body">
              <h2 className="card-title text-center mb-4">KYC Profile</h2>

              {submitted && (
                <div className="alert alert-success text-center">
                  KYC profile submitted successfully!
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Full Name*</label>
                  <input
                    type="text"
                    name="fullName"
                    className="form-control"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Date of Birth*</label>
                  <input
                    type="date"
                    name="dob"
                    className="form-control"
                    value={formData.dob}
                    onChange={handleChange}
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
                    className="form-control"
                    placeholder="Enter your nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Marital Status*</label>
                  <select
                    name="maritalStatus"
                    className="form-select"
                    value={formData.maritalStatus}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Marital Status</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Next
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default KycDashboardBootstrap;
