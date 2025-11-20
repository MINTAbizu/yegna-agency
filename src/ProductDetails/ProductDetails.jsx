import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const DigitalProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [sellerStats, setSellerStats] = useState({ totalProducts: 0, totalSold: 0 });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/digital-products/${id}`);
        setProduct(res.data);

        // Fetch seller stats if seller exists
        if (res.data.seller?._id) {
          const statsRes = await axios.get(`http://localhost:5000/api/users/${res.data.seller._id}/stats`);
          setSellerStats(statsRes.data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchProduct();
  }, [id]);

  const handleBuy = async (productId, amount, recipientWallet) => {
  try {
    const res = await axios.post("http://localhost:5000/api/payment/initiate", {
      productId,
      amount,
      recipientWallet,
    });

    // Redirect user to Chapa payment URL
    window.location.href = res.data.checkout_url;
  } catch (err) {
    console.error(err);
    alert("Payment initiation failed");
  }
};


  if (!product) return <p>Loading...</p>;

  return (
    <div className="container py-5">
      <div
        className="d-flex flex-wrap gap-4"
        style={{ justifyContent: "space-between", alignItems: "flex-start" }}
      >
        {/* Product Detail Card - 50% width */}
        <div style={{ flex: "1 1 48%", minWidth: "300px" }}>
          <div className="card shadow-sm h-100">
            {/* Image container */}
            <div style={{ width: "100%", height: "300px", overflow: "hidden" }}>
              <img
                src={`http://localhost:5000${product.image}`}
                alt={product.productName}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <div className="card-body">
              <h3 className="card-title">{product.productName}</h3>
              <p>{product.description}</p>
              <p className="fw-bold text-success">{product.price} ETB</p>

              {/* Buy Now Button */}
            <button
  className="btn btn-primary mt-3"
  onClick={() => handleBuy(product._id, product.price, product.seller.chapaWallet)}
>
  Buy Now
</button>

              {/* Seller Info */}
              {product.seller && (
                <div className="card mt-3 shadow-sm p-2">
                  <h5>Uploaded by:</h5>
                  <p>Name: {product.seller.name}</p>
                  <p>Email: {product.seller.email}</p>
                </div>
              )}

              {/* Links */}
              {product.telegram && <a href={product.telegram} target="_blank" rel="noreferrer" className="d-block mb-1">Telegram</a>}
              {product.drive && <a href={product.drive} target="_blank" rel="noreferrer" className="d-block mb-1">Google Drive</a>}
              {product.dropbox && <a href={product.dropbox} target="_blank" rel="noreferrer" className="d-block mb-1">Dropbox</a>}
              {product.productLink && <a href={product.productLink} target="_blank" rel="noreferrer" className="d-block">Product Link</a>}
            </div>
          </div>
        </div>

        {/* Seller Stats Cards - 50% width */}
        <div style={{ flex: "1 1 48%", minWidth: "250px", display: "flex", flexDirection: "column", gap: "20px" }}>
          <div className="card shadow-sm p-3 text-center">
            <h5>Total Products</h5>
            <p className="fw-bold">{sellerStats.totalProducts}</p>
          </div>
          <div className="card shadow-sm p-3 text-center">
            <h5>Total Sold</h5>
            <p className="fw-bold">{sellerStats.totalSold}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalProductDetail;
