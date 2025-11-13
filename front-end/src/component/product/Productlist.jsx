import React, { useEffect, useState } from 'react';
import './productlist.css';
// import product1 from '../../assets/image/product1.jpg';
// import product2 from '../../assets/image/product2.jpg';
// import product3 from '../../assets/image/product3.jpg';

const products = [
  { id: 1, name: 'Digital Product 1', image: '' },
  { id: 2, name: 'Digital Product 2', image: '' },
  { id: 3, name: 'Digital Product 3', image: '' },
  // { id: 4, name: 'Digital Product 4', image: "" },
  // { id: 5, name: 'Digital Product 5', image:"" },
];

function Productlist() {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll) setScrollDirection('down');
      else setScrollDirection('up');
      setLastScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  return (
    <div className="product-list container my-5">
      <h2 className="text-center mb-4">Digital Products</h2>
      <div className="row g-4">
        {products.map((p) => (
          <div
            key={p.id}
            className={`col-12 col-sm-6 col-lg-4 product-card ${
              scrollDirection === 'up' ? 'slide-in' : 'slide-out'
            }`}
          >
            <div className="card shadow-sm rounded">
              <img src={p.image} className="card-img-top" alt={p.name} />
              <div className="card-body text-center">
                <h5 className="card-title">{p.name}</h5>
                <button className="btn btn-primary mt-2">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productlist;
