import React, { useState } from "react";
import axios from "axios";
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const token = localStorage.getItem("token"); // JWT from login
      if (!token) {
        alert("You must be logged in to add a product");
        return;
      }

      const res = await axios.post(
        "http://localhost:5000/api/digital-products/create",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Digital Product Added Successfully!");
      setFormData({
        productName: "",
        price: "",
        description: "",
        image: null,
        telegram: "",
        drive: "",
        dropbox: "",
        productLink: "",
      });
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Error adding product!");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-start py-5 bg-light min-vh-100">
      <div className="card shadow-sm p-4" style={{ width: "400px" }}>
        <h4 className="card-title mb-4 text-center">Add Digital Product</h4>
        <form onSubmit={handleSubmit}>
          <input type="text" name="productName" placeholder="Product Name" onChange={handleChange} required className="form-control mb-2" />
          <input type="number" name="price" placeholder="Price" onChange={handleChange} required className="form-control mb-2" />
          <textarea name="description" placeholder="Description" onChange={handleChange} required className="form-control mb-2" />
          <input type="file" name="image" onChange={handleChange} accept="image/*" required className="form-control mb-2" />
          <input type="text" name="telegram" placeholder="Telegram Link" onChange={handleChange} className="form-control mb-2" />
          <input type="text" name="drive" placeholder="Drive Link" onChange={handleChange} className="form-control mb-2" />
          <input type="text" name="dropbox" placeholder="Dropbox Link" onChange={handleChange} className="form-control mb-2" />
          <input type="url" name="productLink" placeholder="Product Link" onChange={handleChange} className="form-control mb-2" />
          <button type="submit" className="btn btn-success w-100">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddDigitalProduct;
