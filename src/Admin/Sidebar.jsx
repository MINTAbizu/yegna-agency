import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
    <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
    <ul>
      <li className="mb-3">
        <Link to="/admin/kyc">KYC Submissions</Link>
      </li>
      <li className="mb-3">
        <Link to="/admin/analytics">Analytics</Link>
      </li>
    </ul>
  </div>
);

export default Sidebar;
