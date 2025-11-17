import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const OrdersDashboard = () => {
  return (
    <div className="container-fluid py-4">
      {/* Header / Tabs */}
   <div className="d-flex flex-wrap mb-4 mt-5">
  {["Shop", "Orders", "Listings", "Affiliate", "Claims"].map((tab) => (
    <Link
      key={tab}
      to={`/${tab.toLowerCase()}`} // e.g., /shop, /orders
      className="btn btn-outline-primary me-2 mb-2"
    >
      {tab}
    </Link>
  ))}
</div>

      {/* Metrics Cards */}
      <div className="d-flex flex-wrap gap-3 mb-4">
        <div className="card text-center flex-fill" style={{ minWidth: "120px" }}>
          <div className="card-body">
            <h5 className="card-title">0</h5>
            <p className="card-text">Orders</p>
          </div>
        </div>
        <div className="card text-center flex-fill" style={{ minWidth: "120px" }}>
          <div className="card-body">
            <h5 className="card-title">Last 30 Days</h5>
            <p className="card-text">Orders</p>
          </div>
        </div>
        <div className="card text-center flex-fill" style={{ minWidth: "120px" }}>
          <div className="card-body">
            <h5 className="card-title">All Time</h5>
            <p className="card-text">Orders</p>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="card">
        <div className="card-body">
          <h5 className="card-title mb-3">Today Orders</h5>
          <p>You don't have any buyers yet. Share your product with your audience to get started.</p>
          <div className="mb-3">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Search orders..."
            />
          </div>
          <div className="table-responsive">
            <table className="table table-sm table-bordered">
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
                  <td colSpan="5" className="text-center text-muted">
                    No data available in table
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-between">
            <span>Showing 0 to 0 of 0 entries</span>
            <div>
              <button className="btn btn-sm btn-outline-secondary me-1">Prev</button>
              <button className="btn btn-sm btn-outline-secondary">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersDashboard;
