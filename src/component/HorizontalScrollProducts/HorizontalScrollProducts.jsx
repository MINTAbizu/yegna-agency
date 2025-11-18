import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './HorizontalScrollProducts.css';

function HorizontalProductList() {
  const [products, setProducts] = useState([]);
  const listRef = useRef(null);
  let lastScroll = 0;

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/digital-products/');
        setProducts(res.data);
      } catch (error) {
        console.error('Error fetching digital products:', error);
      }
    };
    fetchProducts();
  }, []);

  // Horizontal scroll based on vertical scrolling
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (!listRef.current) return;

      if (currentScroll > lastScroll) {
        // Scrolling down → scroll right
        listRef.current.scrollLeft += 15;
      } else {
        // Scrolling up → scroll left
        listRef.current.scrollLeft -= 15;
      }

      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!products.length) {
    return <div className="text-center py-5">No digital products available.</div>;
  }

  return (
    <div className="horizontal-product-container">
      <h2 className='digitalproducttitle'>
        Digital Products<br />
        Get your product now!
      </h2>
      <p className='digitaldescrption'>
        Buy or sell any product you can think of. Pick from a catalog of products from Ye-Buna suppliers.
      </p>

      <div className="horizontal-product-list" ref={listRef}>
        {products.map((p) => (
          <div key={p._id} className="product-card">
            {/* Check if image exists */}
            {p.image ? (
              <img src={`http://localhost:5000${p.image}`} alt={p.productName} />
            ) : (
              <div className="no-image">No Image</div>
            )}
            <h5>{p.productName}</h5>
            <p className="price">{p.price} ETB</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HorizontalProductList;
