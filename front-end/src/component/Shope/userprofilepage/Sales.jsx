import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const OrdersDashboard = () => {
  const [selectedFilter, setSelectedFilter] = useState("Last 30 days");

  const filters = ["Today Orders", "Last 30 days", "All time"];

  return (
    <div className="container-fluid min-vh-100 bg-light p-4">
      <h1 className="mb-4">Orders</h1>

      {/* Small Cards */}
      <div className="d-flex flex-wrap gap-3 mb-4">
        {filters.map((filter) => (
          <div
            key={filter}
            className={`card text-center shadow-sm flex-fill`}
            style={{ minWidth: "150px", maxWidth: "180px", cursor: "pointer" }}
            onClick={() => setSelectedFilter(filter)}
          >
            <div className="card-body">
              <h6 className="card-title">{filter}</h6>
              <p className="card-text display-6">0</p>
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="card shadow-sm">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5 className="mb-0">{selectedFilter}</h5>
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
                <th>Info</th>
                <th>Price/Product</th>
                <th>Type</th>
                <th>Date</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="5" className="text-center py-5 text-muted">
                  You don't have any buyer yet.
                  <br />
                  Share your product with your audience to get started.
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

export default OrdersDashboard;
