// src/components/AccountCard.jsx
import React from "react";

const AccountCard = ({ account, onBuy }) => {
  const { platform, username, followers, price, status } = account;

  // Gradient backgrounds based on platform
  const platformColors = {
    Instagram: "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500",
    TikTok: "bg-gradient-to-r from-black via-gray-700 to-gray-900",
    YouTube: "bg-gradient-to-r from-red-500 via-red-600 to-red-700",
    default: "bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600"
  };

  const bgClass = platformColors[platform] || platformColors.default;

  return (
    <div className={`rounded-lg shadow-lg text-white p-4 ${bgClass}`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold text-lg">{platform}</h3>
        <span className="text-sm">{status.toUpperCase()}</span>
      </div>
      <h4 className="text-xl font-semibold mb-1">{username}</h4>
      <p className="text-sm mb-2">Followers: {followers}</p>
      <p className="text-lg font-bold mb-3">Price: ${price}</p>

      {status === "available" ? (
        <button
          onClick={() => onBuy(account._id)}
          className="w-full bg-white text-black py-2 rounded hover:bg-gray-200 transition"
        >
          Buy Now
        </button>
      ) : (
        <button className="w-full bg-gray-500 cursor-not-allowed py-2 rounded">
          Not Available
        </button>
      )}
    </div>
  );
};

export default AccountCard;
