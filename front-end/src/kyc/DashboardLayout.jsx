import React, { useState } from "react";
import "./DashboardLayout.css";
import { useAuth } from "../Context/Authcontext";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaTachometerAlt, FaUserPlus, FaEye, FaCog, FaUniversity, FaMoneyCheckAlt, FaQuestionCircle, FaBars, FaTimes } from "react-icons/fa";

const DashboardLayout = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Dashboard", path: "/dashboard", icon: <FaTachometerAlt /> },
    { name: "Create Pro Account", path: "/create-pro", icon: <FaUserPlus /> },
    { name: "View Page", path: "/view-page", icon: <FaEye /> },
    { name: "Setting", path: "/setting", icon: <FaCog /> },
    { name: "Bank", path: "/bank", icon: <FaUniversity /> },
    { name: "Payments", path: "/payments", icon: <FaMoneyCheckAlt /> },
    { name: "Help", path: "/help", icon: <FaQuestionCircle /> },
  ];

  return (
    <div className="dashboard-wrapper d-flex">
      {/* Overlay for mobile */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>}

      {/* Sidebar */}
      <nav className={`sidebar bg-light ${sidebarOpen ? "open" : ""}`}>
        <div className="d-flex justify-content-between align-items-center mb-4 d-md-none">
          <span className="fw-bold">Menu</span>
          <button className="btn btn-outline-danger" onClick={() => setSidebarOpen(false)}>
            <FaTimes />
          </button>
        </div>
        <div className="sidebar-header text-center py-2 fw-bold d-none d-md-block">
          Dear, {user?.name}
        </div>
        <ul className="list-unstyled">
          {sidebarItems.map((item, index) => (
            <li key={index} className="mb-1">
              <Link
                to={item.path}
                className={`d-flex align-items-center gap-2 p-2 rounded text-decoration-none ${
                  location.pathname === item.path ? "bg-primary text-white" : "text-dark"
                }`}
                onClick={() => setSidebarOpen(false)} // close sidebar on mobile
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <div className="main-content flex-grow-1">
        {/* Mobile Header */}
        <div className="mobile-header d-flex d-md-none justify-content-between align-items-center p-2 shadow-sm bg-white">
          <button className="btn btn-outline-primary" onClick={() => setSidebarOpen(true)}>
            <FaBars />
          </button>
          <span className="fw-bold">Dashboard</span>
          <div className="avatar bg-secondary text-white d-flex justify-content-center align-items-center rounded-circle" style={{ width: "35px", height: "35px" }}>
            {user?.name?.charAt(0)?.toUpperCase()}
          </div>
        </div>

        {/* Desktop Header */}
        <header className="header bg-white shadow-sm d-none d-md-flex justify-content-between align-items-center px-4 py-2">
          <h1 className="h5 m-0">Dashboard</h1>
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
            <div className="avatar bg-secondary text-white d-flex justify-content-center align-items-center rounded-circle" style={{ width: "35px", height: "35px" }}>
              {user?.name?.charAt(0)?.toUpperCase()}
            </div>
          </div>
        </header>

        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
