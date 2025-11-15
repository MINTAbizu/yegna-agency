import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ListingsDashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState("Physical Product");

  const categories = [
    { name: "Physical Product", buttonText: "Add Product" },
    { name: "Digital Product", buttonText: "Add Product" },
    { name: "Book", buttonText: "Add Book" },
  ];

  return (
    <div className="container-fluid min-vh-100 bg-light p-4">
      <h1 className="mb-4">Listings</h1>

      {/* Category Cards */}
      <div className="d-flex flex-wrap gap-3 mb-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className="card shadow-sm flex-fill text-center"
            style={{ minWidth: "180px", maxWidth: "200px", cursor: "pointer" }}
            onClick={() => setSelectedCategory(category.name)}
          >
            <div className="card-body d-flex flex-column justify-content-between">
              <h6 className="card-title">{category.name}</h6>
              <button className="btn btn-primary btn-sm mt-3">
                {category.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Products Table */}
      <div className="card shadow-sm">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5 className="mb-0">{selectedCategory} - My Products</h5>
          <input
            type="text"
            className="form-control w-auto"
            placeholder="Search..."
          />
        </div>
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Sales</th>
                <th>Created</th>
                <th>Edit</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="6" className="text-center py-5 text-muted">
                  You don't have any listing yet.
                  <br />
                  Add your listing here to get started.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="card-footer d-flex justify-content-between align-items-center">
          <small className="text-muted">Showing 0 to 0 of 0 entries</small>
          <div className="btn-group">
            <button className="btn btn-outline-secondary btn-sm">Prev</button>
            <button className="btn btn-outline-secondary btn-sm">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingsDashboard;
