// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS-fil

const Navbar = ({ toggleSidebar, cartItemCount }) => {
  return (
    <nav className="navbar">
      {/* Knapp för att öppna sidomenyn, visas bara på mindre skärmar */}
      <button onClick={toggleSidebar} className="sidebar-toggle">
        ☰ {/* Hamburger-ikon för att representera menyn */}
      </button>

       {/* Container för navigationslänkar */}
      <div className="navbar-links">
        {/* Länk till produktsidan */}
        <Link to="/product" className="navbar-link">Products</Link>        
        {/* Länk till varukorgen */}
        <Link to="/cart" className="navbar-cart">
          {/* Varukorgsikon */}
          <i className="fa-solid fa-basket-shopping"></i>
            {/* Visar antal objekt i varukorgen om det finns några */}
            {cartItemCount > 0 && (
              <span className="cart-item-count">{cartItemCount}</span>
          )}
        </Link>
    
      </div>
    </nav>
  );
};

export default Navbar;



