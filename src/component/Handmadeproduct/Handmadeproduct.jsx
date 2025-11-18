
import React, { useEffect, useRef, useState } from 'react';
import '../HorizontalScrollProducts/HorizontalScrollProducts.css';
import product1 from '../../assets/image/test.jpg';
import product2 from '../../assets/image/test2.jpg';
// import product3 from '../../assets/image/product3.jpg';
// import product4 from '../../assets/image/product4.jpg';
import  './Handmadeproduct.css'
import axios from 'axios';



function Handmadeproduct() {
 const listRef = useRef(null);
  const [products, setProducts] = useState([])
  let lastScroll = 0;
 // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/physical-products/');
        // Only show approved products
        const approvedProducts = Array.isArray(res.data)
          ? res.data.filter(p => p.status === 'approved')
          : [];
        setProducts(approvedProducts);
      } catch (error) {
        console.error('Error fetching digital products:', error);
      }
    };
    fetchProducts();
  }, []);
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
 if (!products.length) {
    return <div className="text-center py-5">No approved digital products available from Server.</div>;
  }
  return (
    <div className="horizontal-products">
                  <h2 className='digitalproducttitle'>Physical  product
            Get your product now!  <br />
            </h2> 
       <p className='digitaldescrption'>Buy or Sell any product you can think of. Pick from a catalog of millions of products from ye-egna agency suppliers.
</p>
     <div className="horizontal-product-list" ref={listRef}>
        {products.map((p) => (
          <div key={p._id} className="product-card">
            {p.image ? (
              <img src={`http://localhost:5000${p.image}`} alt={p.productName} />
            ) : (
              <div className="no-image">No Image</div>
            )}
            <h5>{p.productName}</h5>
            <p className="price">{p.price} ETB</p>
            <button className='btn btn-primary mt-2'>Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Handmadeproduct
