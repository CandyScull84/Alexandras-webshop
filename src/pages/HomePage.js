// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* Sektion för Herobild och välkomsttext */}
      <div className="hero-section">
        {/* Logotyp */}
      <img src="/logo_BDZero.png" alt="Baking Dreams Logo" className="logo-img" />
        {/* <h1>Welcome to Baking Dreams webshop</h1> */}
        <p>Explore our wide range of products in the kitchen accessories category!</p>
        <p>New products will be found in the list as soon as they arriwe to the storage!</p>
        {/* Länk till produktsidan */}
        <Link to="/product">
          {/* Knapp för att utforska produkter */}
          <button className="explore-btn">Explore Products</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
