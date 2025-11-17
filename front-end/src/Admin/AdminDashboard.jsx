import React, { useState } from "react";
import { FaBars, FaTimes, FaHome, FaList, FaUserShield, FaCheck, FaTimesCircle } from "react-icons/fa";
import "./Admin.css";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
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
        </ul>
      </aside>

      {/* Main Content */}
      <main className="content-area">
        <h3>Pending Social Media Accounts</h3>

        <div className="responsive-table mb-4">
          <table className="table table-striped table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>Platform</th>
                <th>Account Name</th>
                <th>Followers</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingAccounts.map((acc) => (
                <tr key={acc.id}>
                  <td>{acc.platform}</td>
                  <td>{acc.accountName}</td>
                  <td>{acc.followers}</td>
                  <td>{acc.price} ETB</td>
                  <td className="action-buttons">
                    <button className="approve-btn">Approve</button>
                    <button className="reject-btn">Reject</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* User Table */}
        <h3 className="mt-4">Registered Users</h3>
        <div className="responsive-table">
          <table className="table table-striped table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Joined</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {[{_id:1,name:"John Doe",email:"john@mail.com",status:"active",createdAt:"2025-01-01"},
                {_id:2,name:"Sara Smith",email:"sara@mail.com",status:"inactive",createdAt:"2025-02-01"}]
                .map((u, i) => (
                <tr key={u._id}>
                  <td>{i + 1}</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.createdAt}</td>
                  <td>
                    <span className={`badge ${u.status === "active" ? "bg-success" : "bg-secondary"}`}>{u.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;

