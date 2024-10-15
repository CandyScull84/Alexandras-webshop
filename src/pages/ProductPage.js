//ProductPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductPage.css'; // Importera din CSS-fil
import { Link } from 'react-router-dom';

const ProductPage = ({ addToCart }) => {
  const [products, setProducts] = useState([]); // State för att lagra produkter


  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products/category/kitchen-accessories');
      setProducts(response.data.products || []); //uppdaterar komponentens tillstånd (state) med produkterna från API:et
    } catch (error) {
      console.error('Error fetching products:', error); // Hantera fel
    }
  };
  // Funktionen körs när komponenten laddas
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    
    <div className="product-page"> {/* Div för hela produktsidan */}
      {/* Container för att organisera produkterna i ett rutnät */}
      <div className="product-grid">
        {/* Kollar om det finns produkter i products-arrayen */}
        {products.length > 0 ? (
        /* Om det finns produkter, loopa igenom dem och rendera ett produktkort för varje produkt */
         products.map((product) => (
            <div key={product.id} className="product-card">

              {/* Klickbar länk som leder till en produktsida baserat på produktens id */}
              <Link to={`/product/${product.id}`} className="product-link">
                <h3>{product.title}</h3> {/* Visar produktens titel */}

                 {/* Produktens bild */}
                <img src={product.thumbnail} alt={product.title} className="product-image" />
                
                {/* Visar produktens pris */}
                <p className="price-text">Price: ${product.price}</p>
              </Link>
            </div>
          ))
        ) : (
          <p>No products available in this category.</p> // Meddelande om inga produkter finns
        )}
      </div>
    </div>
  );
};

export default ProductPage;