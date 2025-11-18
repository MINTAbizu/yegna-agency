import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function ProductDetails() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type"); // should be "digital" or "physical"
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!type) return; // prevent undefined type
      try {
        const res = await axios.get(`http://localhost:5000/api/${type}-products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProduct();
  }, [id, type]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h2>{product.productName}</h2>
      <img src={`http://localhost:5000${product.image}`} alt={product.productName} />
      <p>{product.description}</p>
      <p>Price: {product.price} ETB</p>
      <button>Buy Now</button>
    </div>
  );
}

export default ProductDetails;



// 

// import React, { useEffect, useState } from 'react';
// import { useParams, useSearchParams } from 'react-router-dom';
// import axios from 'axios';

// const ProductDetails = ({ currentUser }) => {
//   const { id } = useParams();
//   const [searchParams] = useSearchParams();
//   const type = searchParams.get('type'); // digital or physical
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const res = await axios.get(`http://localhost:5000/api/${type}-products/`);
//       const found = res.data.find(p => p._id === id);
//       setProduct(found);
//     };
//     fetchProduct();
//   }, [id, type]);

//   const handleBuy = async () => {
//     const res = await axios.post('http://localhost:5000/api/orders/checkout', {
//       buyerId: currentUser.id,
//       buyerEmail: currentUser.email,
//       productId: product._id,
//       productType: type === 'digital' ? 'DigitalProduct' : 'PhysicalProduct'
//     });
//     window.location.href = res.data.paymentUrl;
//   };

//   if (!product) return <p>Loading...</p>;

//   return (
//     <div className="container py-4">
//       <h2>{product.productName}</h2>
//       <img src={`http://localhost:5000${product.image}`} alt={product.productName} style={{ maxWidth: '400px' }} />
//       <p>{product.description}</p>
//       <p>Price: {product.price} ETB</p>
//       <button className="btn btn-success" onClick={handleBuy}>Buy Now</button>
//     </div>
//   );
// };

// export default ProductDetails;
