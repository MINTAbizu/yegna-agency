import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [digitalProducts, setDigitalProducts] = useState([]);
  const [physicalProducts, setPhysicalProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const digitalRes = await axios.get('http://localhost:5000/api/digital-products/');
      setDigitalProducts(digitalRes.data.filter(p => p.status === 'approved'));

      const physicalRes = await axios.get('http://localhost:5000/api/physical-products/');
      setPhysicalProducts(physicalRes.data.filter(p => p.status === 'approved'));
    };
    fetchProducts();
  }, []);

  return (
    <div className="container py-4">
      <h2>Digital Products</h2>
      <div className="row">
        {digitalProducts.map(product => (
          <div key={product._id} className="col-md-3 mb-3">
            <div className="card">
              <img src={`http://localhost:5000${product.image}`} alt={product.productName} className="card-img-top"/>
              <div className="card-body">
                <h5>{product.productName}</h5>
                <p>{product.price} ETB</p>
                <Link to={`/product/${product._id}?type=digital`} className="btn btn-primary">Buy</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-4">Physical Products</h2>
      <div className="row">
        {physicalProducts.map(product => (
          <div key={product._id} className="col-md-3 mb-3">
            <div className="card">
              <img src={`http://localhost:5000${product.image}`} alt={product.productName} className="card-img-top"/>
              <div className="card-body">
                <h5>{product.productName}</h5>
                <p>{product.price} ETB</p>
                <Link to={`/product/${product._id}?type=physical`} className="btn btn-primary">Buy</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
