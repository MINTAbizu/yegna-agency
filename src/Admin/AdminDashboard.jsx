import React, { useState } from "react";
import { FaBars, FaTimes, FaHome, FaList, FaUserShield } from "react-icons/fa";
import "./Admin.css";
import { Link } from "react-router-dom";

const AdminDashboard = ({ children }) => {  // <-- use lowercase 'children'
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="admin-container">
      {/* Header */}
      <header className="admin-header">
        <button className="menu-btn" onClick={toggleSidebar}>
          {isSidebarOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
        <h2>Admin Dashboard</h2>
      </header>

      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <ul>
          <li><FaHome /> Dashboard</li>
          {/* <li><FaList /> Pending Accounts</li> */}
          <Link to={'/AdminUsersTable'}>
            <li><FaUserShield /> Admin Users</li>
          </Link>
          <Link to={'/AdminKYCList'}><li><FaUserShield /> A KYC List</li></Link>
          <Link to={'/AdminProfileList'}><li><FaUserShield /> ProfileList</li></Link>
          <Link to={'/AdminDigitalProductsTable'}><li><FaUserShield /> AdminDigitalProduct</li></Link>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        {children}  {/* <-- render children here */}
      </main>
    </div>
  );
};

export default AdminDashboard;
