// ProductDetailPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import QuantityControl from '../components/QuantityControl/QuantityControl'; // Importera QuantityControl
import './ProductDetailPage.css';

const ProductDetailPage = ({ addToCart }) => {
  const { id } = useParams(); // Hämta produktens ID från URL:en
  const [product, setProduct] = useState(null); // State för att lagra produktinformation
  const [quantity, setQuantity] = useState(1); // Standard kvantitet

  useEffect(() => {
    // Funktion för att hämta produktdata från API:et
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data); // Sätt produktdata i state
      } catch (error) {
        console.error('Error fetching product details:', error); // Logga eventuella fel
      }
    };
    fetchProduct(); // Anropa funktionen för att hämta data
  }, [id]); // Effekt körs om ID:t ändras
 
  // Funktion för att lägga till produkt i varukorgen
  const handleAddToCart = () => {
    // Anropa addToCart-funktionen med produkt och kvantitet
    addToCart(product, quantity);
  };
  // Visa en laddningsindikator om produktdata inte är tillgänglig
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
<div className="product-detail-page">
  {/* Vänster kolumn för titel, bild och beskrivning */}
  <div className="left-column">
    <h2>{product.title}</h2>
    <img src={product.thumbnail} alt={product.title} />
   
  </div>
  {/* Höger kolumn för pris, kvantitetskontroll och lägg till i varukorg-knapp */}
  <div className="right-column">
    <p>{product.description}</p>
    <p className="price">Price: ${product.price}</p>
    <div className="quantity-control-container">
      <QuantityControl
        quantity={quantity}
        onIncrease={() => setQuantity(quantity + 1)} // Öka kvantiteten
        onDecrease={() => setQuantity(Math.max(1, quantity - 1))} // Minska kvantiteten, minimera till 1
        onChange={(value) => setQuantity(Math.max(1, Number(value)))} // Ändra kvantitet med minimi 1
      /> 
    </div>
    {/* Lägg till i varukorg-knapp */}
    <button className="add-to-cart-btn" onClick={handleAddToCart}>
      Add to Cart
    </button>
    </div>
</div>
  );
};

export default ProductDetailPage;
