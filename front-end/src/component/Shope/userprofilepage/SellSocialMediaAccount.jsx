import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SellSocialMediaAccount = () => {
  const [formData, setFormData] = useState({
    platform: "",
    accountName: "",
    price: "",
    description: "",
    image: null,
    link: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Social Media Account submitted successfully!");
  };

  return (
    <div className="d-flex justify-content-center py-5 bg-light min-vh-100">
      <div className="card shadow-sm p-4" style={{ maxWidth: "500px", width: "100%" }}>
        <h4 className="card-title mb-4 text-center">Sell Social Media Account</h4>
        <form onSubmit={handleSubmit}>
          {/* Platform */}
          <div className="mb-3">
            <label className="form-label">Platform</label>
            <select
              name="platform"
              className="form-select form-select-sm"
              value={formData.platform}
              onChange={handleChange}
              required
            >
              <option value="">Select Platform</option>
              <option value="Instagram">Instagram</option>
              <option value="Facebook">Facebook</option>
              <option value="TikTok">TikTok</option>
              <option value="Twitter">Twitter</option>
              <option value="YouTube">YouTube</option>
              <option value="Telegeram">Telegeram</option>
            </select>
          </div>

          {/* Account Name */}
          <div className="mb-3">
            <label className="form-label">Account Name</label><br />
            <small>Acount created year !</small>
            <input
              type="text"
              name="accountName"
              className="form-control form-control-sm"
              value={formData.accountName}
              onChange={handleChange}
              placeholder="Enter account username"
              required
            />
          </div>

          {/* Price */}
          <div className="mb-3">
            <label className="form-label">Price (ETB)</label>
            <input
              type="number"
              name="price"
              className="form-control form-control-sm"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-3">
            <label className="form-label">Description</label> <br />
            <small>Account subscriber/member/likes/followers/View</small>
            <textarea
              name="description"
              className="form-control form-control-sm"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the account"
              rows={3}
            />
          </div>

          {/* Image */}
          <div className="mb-3">
            <label className="form-label">Account Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="form-control form-control-sm"
              onChange={handleChange}
            />
          </div>

          {/* Account Link */}
          <div className="mb-3">
            <label className="form-label">Account Link</label>
            <input
              type="text"
              name="link"
              className="form-control form-control-sm"
              value={formData.link}
              onChange={handleChange}
              placeholder="https://..."
            />
          </div>

          <button type="submit" className="btn btn-success w-100 btn-sm">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellSocialMediaAccount;
