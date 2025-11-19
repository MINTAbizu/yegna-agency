import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Admin.css";
import { Link } from "react-router-dom";

const AdminDashboard = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="admin-layout">
      {/* Header */}
      <header className="admin-header">
        <button className="menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
        <h2 className="admin-logo">Admin Panel</h2>
      </header>

      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarOpen ? "open" : ""}`}>
        <ul>
          <Link to={'/AdminKYCList'}><li>AdminKYCList</li></Link>
          <Link to={'/AdminProfileList'}><li>AdminProfileList</li></Link>
          <Link to={'/AdminUsersTable'}><li>AdminUsersTable</li></Link>
          <Link to={'/AdminDigitalProductsTable'}><li>AdminDigitalProductsTable</li></Link>
          <Link to={'/AdminPhysicalproducts'}><li>AdminPhysicalproducts</li></Link>
          
          
        </ul>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <div className="admin-content">{children}</div>
      </main>
    </div>
  );
};

export default AdminDashboard;
