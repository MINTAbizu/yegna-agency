
import React, { useEffect, useRef } from 'react';
import '../HorizontalScrollProducts/HorizontalScrollProducts.css';
import product1 from '../../assets/image/test.jpg';
import product2 from '../../assets/image/test2.jpg';
// import product3 from '../../assets/image/product3.jpg';
// import product4 from '../../assets/image/product4.jpg';
import  './Handmadeproduct.css'
import { useState } from 'react';
import axios from 'axios';

// const products = [
//   { id: 1, name: 'Product 1', image: product1 },
//   { id: 2, name: 'Product 2', image: product2 },
//   { id: 3, name: 'Product 3', image: 'product3' },
//   { id: 4, name: 'Product 4', image: 'product4' },
//   { id: 5, name: 'Product 5', image: 'product1' },
//   { id: 1, name: 'Product 1', image: 'product1' },
//   { id: 2, name: 'Product 2', image: 'product2' },
//   { id: 3, name: 'Product 3', image: 'product3' },
//   { id: 4, name: 'Product 4', image: 'product4' },
//   { id: 5, name: 'Product 5', image: 'product1' },
//   { id: 1, name: 'Product 1', image: 'product1' },
//   { id: 2, name: 'Product 2', image: 'product2' },
//   { id: 3, name: 'Product 3', image: 'product3' },
//   { id: 4, name: 'Product 4', image: 'product4' },
//   { id: 5, name: 'Product 5', image: 'product1' },
// ];

function Handmadeproduct() {
 const listRef = useRef(null);
   const [products, setProducts] = useState([]);
  let lastScroll = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (!listRef.current) return;

      if (currentScroll > lastScroll) {
        // USER SCROLLING DOWN → MOVE RIGHT → LEFT
        listRef.current.scrollLeft -= 15;
      } else {
        // USER SCROLLING UP → MOVE LEFT → RIGHT
        listRef.current.scrollLeft += 15;
      }

      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 
   useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/physical-products/');
        setProducts(res.data);
      } catch (error) {
        console.error('Error fetching digital products:', error);
      }
    };
    fetchProducts();
  }, []);
 if (!products.length) {
    return <div className="text-center py-5">No digital products available.</div>;
  }
  return (
    <div className="horizontal-products">
                  <h2 className='digitalproducttitle'>Digital product
            Get your product now!  <br />
            </h2> 
       <p className='digitaldescrption'>Buy or Sell any product you can think of. Pick from a catalog of millions of products from ye-buna suppliers.
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

export default Handmadeproduct
