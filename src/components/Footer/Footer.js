// Footer.js
import React from 'react';
import { Link } from 'react-router-dom'; // Importerar Link från react-router-dom
import './Footer.css'; // Importerar CSS-fil för stilar

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        {/* Länk till About-sidan */}
        <Link to="/about" className="footer-link"> <i className="fas fa-info-circle"></i>About Us</Link> 
        {/* Länk till Contact-sidan */}
        <Link to="/contact" className="footer-link"><i className="fas fa-envelope"></i>Contact Us</Link> 
      </div>
       {/* Text för upphovsrättsinformation */}
      <p className="footer-text">© 2024 Baking Dreams. All rights reserved.</p>
    </footer>
  );
};

export default Footer;