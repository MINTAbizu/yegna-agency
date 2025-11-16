// DashboardLayout.jsx
import React from "react";
import "./DashboardLayout.css"; // Your custom CSS for sidebar/header
import { useAuth } from "../Context/Authcontext";
const DashboardLayout = ({ children }) => {
  const { user } = useAuth()
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
         Dear, {user?.name}


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

      {/* Main Content Area */}
      <div className="main-content">
        {/* Header */}
        <header className="header bg-white shadow-sm d-flex justify-content-between align-items-center px-4">
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
            <div className="avatar bg-secondary text-white d-flex justify-content-center align-items-center">
             { user?.name?.charAt(0)?.toUpperCase()}

            </div>
          </div>
        </header>

        {/* Render any children passed */}
        <main className="p-5">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
