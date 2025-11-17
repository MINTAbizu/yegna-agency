import React from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../../../kyc/DashboardLayout";
import "./order.css";

const OrdersDashboard = () => {
  return (
    <DashboardLayout>
      <div className="orders-container">

        {/* Tabs Navigation */}
        <div className="orders-tabs">
          <Link to="/shop" className="orders-tab-btn">Shop</Link>
          <Link to="/orders" className="orders-tab-btn active">Orders</Link>
          <Link to="/listings" className="orders-tab-btn">Listings</Link>
          <Link to="/affiliate" className="orders-tab-btn">Affiliate</Link>
          <Link to="/claims" className="orders-tab-btn">Claims</Link>
        </div>

        {/* Stats Cards */}
        <div className="row g-3 mb-4">
          {[{ title: "0", subtitle: "Orders" },
            { title: "Last 30 Days", subtitle: "Orders" },
            { title: "All Time", subtitle: "Orders" }].map((card, i) => (
            <div key={i} className="col-12 col-sm-6 col-md-4">
              <div className="card text-center h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Orders Table */}
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title mb-3">Today Orders</h5>
            <p className="text-muted">
              You don't have any buyers yet. Share your product with your audience to get started.
            </p>

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

            <div className="d-flex justify-content-between mt-2">
              <span>Showing 0 to 0 of 0 entries</span>
              <div>
                <button className="btn btn-sm btn-outline-secondary me-1">Prev</button>
                <button className="btn btn-sm btn-outline-secondary">Next</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default OrdersDashboard;
