import React, { useState } from "react";
import "./BrowseAllProducts.css";
import test1 from '../../assets/image/test.jpg'
// Sample products
const products = {
  books: [
    { name: "Craft Book 1", image: test1 },
    { name: "Craft Book 1", image: test1 },
    { name: "Craft Book 1", image: test1 },
    { name: "Craft Book 1", image: test1 },
    { name: "Craft Book 1", image: test1 },
    { name: "Craft Book 2", image: "https://via.placeholder.com/150" },
    { name: "Craft Book 3", image: "https://via.placeholder.com/150" }
  ],
  physical: [
    { name: "Wooden Chair", image: "https://via.placeholder.com/150" },
    { name: "Handmade Vase", image: "https://via.placeholder.com/150" },
    { name: "Art Painting", image: "https://via.placeholder.com/150" }
  ],
  digital: [
    { name: "Printable Template", image: "https://via.placeholder.com/150" },
    { name: "SVG Artwork", image: "https://via.placeholder.com/150" },
    { name: "Digital Poster", image: "https://via.placeholder.com/150" }
  ]
};

const categories = [
  { id: "books", title: "Books" },
  { id: "physical", title: "Physical Products" },
  { id: "digital", title: "Handmade Digital Products" }
];

const BrowseAllProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("books");

  return (
    <div className="browse-container">
      <h2 className="browse-title">Browse All Products</h2>

      {/* Category Buttons */}
      <div className="category-buttons">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`category-btn ${
              selectedCategory === cat.id ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Product List */}
      <div className="product-list">
        {products[selectedCategory].map((p, i) => (
          <div key={i} className="product-card">
            <img src={p.image} alt={p.name} />
            <h4>{p.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseAllProducts;
