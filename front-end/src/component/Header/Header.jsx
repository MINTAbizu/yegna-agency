import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";
// import logo from "../../assets/image/core-img/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleShop = () => setShopOpen(!shopOpen);

  return (
    <header className="header d-flex justify-content-between align-items-center p-3">
      {/* Logo */}
      <div className="logo">
        {/* <img src={logo} alt="Logo" className="img-fluid" /> */}
      </div>

      {/* Menu Icon (always visible) */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {/* Slide-in Menu */}
      <nav className={`slide-menu ${menuOpen ? "active" : ""}`}>
        <div className="slide-header">
          {/* <img src={logo} alt="Logo" className="slide-logo" /> */}
          <FaTimes className="close-icon" onClick={toggleMenu} />
        </div>
        <ul className="list-unstyled">
          <li>Freelancer</li>
          <li>Club</li>

          {/* Shop with Submenu */}
          <li onClick={toggleShop} className="shop-parent">
            Shop
            <ul className={`shop-submenu ${shopOpen ? "active" : ""}`}>
              <li>💰 Earn</li>
              <li>📦 Physical Products</li>
              <li>💻 Digital Products</li>
              <li>🧑‍ Freelancer</li>
              <li>🤝 Affiliate</li>
            </ul>
          </li>

          <li>Your Account</li>
          <li>Sign in</li>
          <li>Sign up for free</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
