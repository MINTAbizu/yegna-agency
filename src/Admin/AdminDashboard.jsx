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
          <Link to={}><li>Products</li></Link>
          
          <li>Users</li>
          <li>Orders</li>
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
