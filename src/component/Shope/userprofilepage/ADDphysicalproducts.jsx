import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const ADDphysicalproducts = () => {
  const [formData, setFormData] = useState({
    productName: "",
    price: "",
    description: "",
    image: null,
    telegram: "",
   
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const res = await axios.post("http://localhost:5000/api/physical-products/create", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("physical Product Added Successfully!");
      setFormData({
        productName: "",
        price: "",
        description: "",
        image: null,
        telegram: "",
        
        productLink: "",
      });
    } catch (error) {
      console.error(error);
      alert("Error adding product!");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-start py-5 bg-light min-vh-100">
      <div className="card shadow-sm p-4" style={{ width: "400px" }}>
        <h4 className="card-title mb-4 text-center">Add physical Product</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Product Name</label>
            <input
              type="text"
              name="productName"
              className="form-control"
              value={formData.productName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="number"
              name="price"
              className="form-control"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              name="description"
              className="form-control"
              rows="3"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Image</label>
            <input
              type="file"
              name="image"
              className="form-control"
              onChange={handleChange}
              accept="image/png, image/jpeg"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Telegram Link</label>
            <input type="text" name="telegram" className="form-control" value={formData.telegram} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Google Drive Link</label>
            <input type="text" name="drive" className="form-control" value={formData.drive} onChange={handleChange} />
          </div>
          {/* <div className="mb-3">
            <label className="form-label">Dropbox Link</label>
            <input type="text" name="dropbox" className="form-control" value={formData.dropbox} onChange={handleChange} />
          </div> */}
          <div className="mb-3">
            <label className="form-label">Product Link</label>
            <input type="url" name="productLink" className="form-control" value={formData.productLink} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default ADDphysicalproducts;
