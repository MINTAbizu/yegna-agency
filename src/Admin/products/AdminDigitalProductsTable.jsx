import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminDigitalProductsTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all digital products from backend


const fetchProducts = async () => {
  try {
    const token = localStorage.getItem("adminToken");
    const res = await axios.get(
      "http://localhost:5000/api/digital-products/admin/all",
      {
        headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      }
    );

    const productsArray = Array.isArray(res.data) ? res.data : [];

    // Sort newest first
    productsArray.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    setProducts(productsArray);
  } catch (err) {
    console.error("Fetch Products Error:", err);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchProducts();
  }, []);

  // Toggle product status
  const handleToggleStatus = async (id) => {
    try {
      const token = localStorage.getItem("adminToken"); // or userToken
      await axios.patch(
        `http://localhost:5000/api/digital-products/admin/toggle/${id}`,
        {},
        {
          headers: token
            ? { Authorization: `Bearer ${token}` }
            : undefined,
        }
      );
      // Refetch products to reflect the updated status
      fetchProducts();
    } catch (err) {
      console.error("Toggle Status Error:", err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!products.length) return <p>No digital products found.</p>;

  return (
    <div className="container py-4">
      <h3 className="mb-3">Digital Products</h3>
      <div className="table-responsive">
        <table className="table table-sm table-striped table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Links</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => (
              <tr key={p._id}>
                <td>{i + 1}</td>
                <td>
                  {p.image && (
                    <img
                      src={`http://localhost:5000${p.image}`}
                      alt={p.productName}
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                        borderRadius: "6px",
                      }}
                    />
                  )}
                </td>
                <td>{p.productName}</td>
                <td>{p.price} ETB</td>
                <td style={{ fontSize: "12px" }}>
                  {p.telegram && (
                    <div>
                      <a href={p.telegram} target="_blank" rel="noreferrer">
                        Telegram
                      </a>
                    </div>
                  )}
                  {p.drive && (
                    <div>
                      <a href={p.drive} target="_blank" rel="noreferrer">
                        Drive
                      </a>
                    </div>
                  )}
                  {p.dropbox && (
                    <div>
                      <a href={p.dropbox} target="_blank" rel="noreferrer">
                        Dropbox
                      </a>
                    </div>
                  )}
                  {p.productLink && (
                    <div>
                      <a href={p.productLink} target="_blank" rel="noreferrer">
                        Other
                      </a>
                    </div>
                  )}
                </td>
                <td>
                  <span
                    className={`badge ${
                      p.status === "approved"
                        ? "bg-success"
                        : p.status === "rejected"
                        ? "bg-danger"
                        : "bg-secondary"
                    }`}
                  >
                    {p.status}
                  </span>
                </td>
                <td>
                  {p.status === "pending" ? (
                    <>
                      <button
                        className="btn btn-sm btn-success me-1"
                        onClick={() => handleToggleStatus(p._id)}
                      >
                        Approve
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleToggleStatus(p._id)}
                      >
                        Reject
                      </button>
                    </>
                  ) : (
                    <button
                      className={`btn btn-sm ${
                        p.status === "approved" ? "btn-danger" : "btn-success"
                      }`}
                      onClick={() => handleToggleStatus(p._id)}
                    >
                      {p.status === "approved" ? "Reject" : "Approve"}
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDigitalProductsTable;
