import React, { Children, useState } from "react";
import { FaBars, FaTimes, FaHome, FaList, FaUserShield, FaCheck, FaTimesCircle } from "react-icons/fa";
import "./Admin.css";
import { Link } from "react-router-dom";

const AdminDashboard = ({children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const pendingAccounts = [
    {
      id: 1,
      platform: "Instagram",
      accountName: "insta_pro_11",
      followers: "12,400",
      price: 2000,
    },
    {
      id: 2,
      platform: "TikTok",
      accountName: "tiktok_star77",
      followers: "45,000",
      price: 3500,
    },
  ];

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
          <li><FaList /> Pending Accounts</li>
        <Link to={'/AdminUsersTable'}>  <li><FaUserShield /> Admin Users</li> </Link> 
        <Link to={'/AdminKYCList'}>  <li><FaUserShield /> AdminKYCList</li> </Link> 
        <Link to={'/AdminProfileList'}>  <li><FaUserShield /> AdminProfileList</li> </Link> 
        <Link to={'/OurCustomers'}>  <li><FaUserShield /> OurCustomers</li> </Link>
        
       <Link to='/admindigitalproducts'> <FaUserShield /> DigitalProducts</Link>
       <Link to='/AdminPhysicalproducts'><li><FaUserShield/> Physicalproducts</li></Link>
     

 
        
        </ul>
      </aside>

      {/* Main Content */}
      <div className="main-content mt-5">
    {children} {/* ✅ Correct */}
  </div>
    </div>
  );
};

export default AdminDashboard;

