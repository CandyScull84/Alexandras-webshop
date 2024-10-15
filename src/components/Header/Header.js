// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import CSS-fil

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        {/* Logotyp till vänster, som även länkar till hemsidan */}
        <Link to="/" className="header-logo-link">
          <img src="/Header_logoBD.png" alt="Baking Dreams Logo" className="header-logo" />
        </Link>
        {/* Text bredvid logotypen */}
        <div className="header-text">
          <h2>"Creating sweet moments, one bake at a time"</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
