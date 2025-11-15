import React, { useState } from "react";

const UserProfile = () => {
  const [about, setAbout] = useState("");
  const [region, setRegion] = useState("");
  const [shopLocation, setShopLocation] = useState("");
  const [telegram, setTelegram] = useState("");

  const copyLink = () => {
    navigator.clipboard.writeText("https://ye-buna.com/mintesenotbizuayehw");
    alert("Profile link copied!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      about,
      region,
      shopLocation,
      telegram,
    });
    alert("Profile updated successfully!");
  };

  return (
    <div className="card mx-auto shadow" style={{ maxWidth: "600px" }}>
      <div className="card-body">
        <h2 className="card-title text-center mb-4">User Profile</h2>

        {/* Avatar & Copy Link */}
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://via.placeholder.com/100"
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-4 border-blue-500 mb-2"
          />
          <button
            type="button"
            onClick={copyLink}
            className="btn btn-primary text-white px-4 py-2 rounded"
          >
            Copy Your Profile Link
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* About */}
          <div className="mb-3">
            <label className="form-label">About</label>
            <textarea
              className="form-control"
              value={about}
              maxLength={500}
              onChange={(e) => setAbout(e.target.value)}
              placeholder="Write something about yourself..."
            />
            <p className="text-sm text-gray-500">{about.length}/500</p>
          </div>

          {/* Region */}
          <div className="mb-3">
            <label className="form-label">Region</label>
            <select
              className="form-select"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            >
              <option value="">Select Region</option>
              <option value="Region1">Region1</option>
              <option value="Region2">Region2</option>
              <option value="Region3">Region3</option>
            </select>
          </div>

          {/* Shop/Home Location */}
          <div className="mb-3">
            <label className="form-label">Shop/Home Location</label>
            <input
              type="text"
              className="form-control"
              value={shopLocation}
              onChange={(e) => setShopLocation(e.target.value)}
              placeholder="Enter your shop/home location"
            />
          </div>

          {/* Telegram */}
          <div className="mb-3">
            <label className="form-label">Telegram Username</label>
            <input
              type="text"
              className="form-control"
              value={telegram}
              onChange={(e) => setTelegram(e.target.value)}
              placeholder="Without @"
            />
          </div>

          {/* Submit Button */}
          <div className="d-flex justify-content-end mt-4">
            <button type="submit" className="btn btn-success">
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
