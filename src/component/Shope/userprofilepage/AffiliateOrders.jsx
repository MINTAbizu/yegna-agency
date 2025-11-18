import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AffiliateOrders = () => {
  // Sample data
  const orders = [
    { product: "Ebook - Smart Notes", amount: 500, commission: 50, status: "Pending" },
    { product: "Physical Product - Mug", amount: 1000, commission: 100, status: "Completed" },
    { product: "Course - React Basics", amount: 2000, commission: 200, status: "Pending" },
  ];

  return (
    <div className="d-flex justify-content-center py-5 bg-light min-vh-100">
      <div className="card shadow-sm p-4 w-75">
        <h4 className="card-title mb-4 text-center">Affiliate Orders</h4>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Product</th>
                <th>Amount (ETB)</th>
                <th>Commission (ETB)</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order, index) => (
                  <tr key={index}>
                    <td>{order.product}</td>
                    <td>{order.amount}</td>
                    <td>{order.commission}</td>
                    <td>
                      <span
                        className={`badge ${
                          order.status === "Completed"
                            ? "bg-success"
                            : "bg-warning text-dark"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">
                    No affiliate orders yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AffiliateOrders;
