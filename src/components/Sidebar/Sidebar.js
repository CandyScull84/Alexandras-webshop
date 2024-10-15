// Sidebar.js
import React from 'react';
import './Sidebar.css';  // Skapa en separat CSS-fil för sidebar
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}> {/* Tillämpa 'open'-klass om isOpen är true */}
      <div className="sidebar-close" onClick={toggleSidebar}>
        &times; {/* Stängningsikon */}
      </div>
      <ul>
         {/* Varje länk stänger sidomenyn när den klickas på */}
        <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
        <li><Link to="/product" onClick={toggleSidebar}>Products</Link></li>
        <li><Link to="/about" onClick={toggleSidebar}>About</Link></li>
        <li><Link to="/contact" onClick={toggleSidebar}>Contact</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
