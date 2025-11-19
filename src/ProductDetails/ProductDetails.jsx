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
      if (!type || !id) return; // prevent undefined type/id
      try {
        const res = await axios.get(`http://localhost:5000/api/digital-products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProduct();
  }, [id, type]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container py-4">
      <h2>{product.productName}</h2>
      <img src={`http://localhost:5000${product.image}`} alt={product.productName} style={{ maxWidth: '400px' }} />
      <p>{product.description}</p>
      <p>Price: {product.price} ETB</p>
      <button>Buy Now</button>
    </div>
  );
}

export default ProductDetails;
