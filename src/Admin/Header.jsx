import React from "react";

const Header = ({ onLogout }) => (
  <div className="bg-gray-100 p-4 flex justify-between items-center shadow">
    <h1 className="text-2xl font-bold">Dashboard</h1>
    <button
      className="bg-red-500 text-white px-4 py-2 rounded"
      onClick={onLogout}
    >
      Logout
    </button>
  </div>
);

export default Header;
