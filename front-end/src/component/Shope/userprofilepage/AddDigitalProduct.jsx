import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AddDigitalProduct = () => {
  const [formData, setFormData] = useState({
    productName: "",
    price: "",
    description: "",
    image: null,
    telegram: "",
    drive: "",
    dropbox: "",
    productLink: "",
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
    console.log("Digital Product Data:", formData);
    alert("Digital Product submitted successfully!");
  };

  return (
    <div className="d-flex justify-content-center align-items-start py-5 bg-light min-vh-100">
      <div className="card shadow-sm p-4" style={{ width: "400px" }}>
        <h4 className="card-title mb-4 text-center">Add Digital Product</h4>
        <form onSubmit={handleSubmit}>
          {/* Product Name */}
          <div className="mb-3">
            <label className="form-label">Product Name</label>
            <input
              type="text"
              name="productName"
              className="form-control"
              value={formData.productName}
              onChange={handleChange}
              placeholder="e.g. Taking Smart Notes (Ebook)"
              required
            />
          </div>

          {/* Price */}
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="number"
              name="price"
              className="form-control"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price in ETB"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-3">
            <label className="form-label">Describe the Product</label>
            <textarea
              name="description"
              className="form-control"
              rows="3"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write a description of the product"
              required
            />
          </div>

          {/* Image Upload */}
          <div className="mb-3">
            <label className="form-label">
              Image (Square, 600x600px min, JPG/PNG)
            </label>
            <input
              type="file"
              name="image"
              accept="image/png, image/jpeg"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>

          {/* Telegram */}
          <div className="mb-3">
            <label className="form-label">Telegram Channel/Group Link</label>
            <input
              type="text"
              name="telegram"
              className="form-control"
              value={formData.telegram}
              onChange={handleChange}
              placeholder="Telegram link"
            />
          </div>

          {/* Google Drive */}
          <div className="mb-3">
            <label className="form-label">Google Drive Link</label>
            <input
              type="text"
              name="drive"
              className="form-control"
              value={formData.drive}
              onChange={handleChange}
              placeholder="Google Drive link"
            />
          </div>

          {/* Dropbox */}
          <div className="mb-3">
            <label className="form-label">Dropbox Link</label>
            <input
              type="text"
              name="dropbox"
              className="form-control"
              value={formData.dropbox}
              onChange={handleChange}
              placeholder="Dropbox link"
            />
          </div>

          {/* Product Link */}
          <div className="mb-3">
            <label className="form-label">Product Link</label>
            <input
              type="url"
              name="productLink"
              className="form-control"
              value={formData.productLink}
              onChange={handleChange}
              placeholder="https://"
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Register Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDigitalProduct;
