import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const DigitalProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/digital-products/");
        setProducts(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">All Digital Products</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product._id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={`http://localhost:5000${product.image}`} className="card-img-top" alt={product.productName} />
              <div className="card-body">
                <h5 className="card-title">{product.productName}</h5>
                <p className="card-text">{product.description}</p>
                <p className="text-success fw-bold">{product.price} ETB</p>
                {product.telegram && <a href={product.telegram} target="_blank" rel="noreferrer" className="d-block mb-1">Telegram</a>}
                {product.drive && <a href={product.drive} target="_blank" rel="noreferrer" className="d-block mb-1">Google Drive</a>}
                {product.dropbox && <a href={product.dropbox} target="_blank" rel="noreferrer" className="d-block mb-1">Dropbox</a>}
                {product.productLink && <a href={product.productLink} target="_blank" rel="noreferrer" className="d-block">Product Link</a>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalProductsList;
