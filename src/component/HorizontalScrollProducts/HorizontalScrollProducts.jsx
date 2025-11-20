// HorizontalProductList.jsx
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HorizontalScrollProducts.css';

function HorizontalProductList() {
  const [products, setProducts] = useState([]);
  const listRef = useRef(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/digital-products/")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="horizontal-product-container">
      <h2 className='digitalproducttitle'>Digital Products</h2>

      <div className="horizontal-product-list" ref={listRef}>
        {products.map((p) => (
          <div key={p._id} className="product-card">
            <img src={`http://localhost:5000${p.image}`} alt="" />

            <h5>{p.productName}</h5>
            <p className="price">{p.price} ETB</p>

            <p className="seller">Seller: {p.seller?.name}</p>

            <Link to={`/ProductDetails/${p._id}?type=digital`}>
              <button>View</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HorizontalProductList;
