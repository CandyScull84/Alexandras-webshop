// CartPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './CartPage.css';
import QuantityControl from '../components/QuantityControl/QuantityControl'; // Importerad kvantitetskomponenten


const CartPage = ({ cart, updateCartItemQuantity, removeFromCart }) => {
  // Beräkna totalpriset för alla produkter i varukorgen
  const totalPrice = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

  return (
    <div className="cart-content">
      <h3>Your Cart</h3>
      {/* Om varukorgen är tom */}
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-list">
           {/* Rubriker för produktlistan */}
          <div className="cart-header">
            <span>Product</span>
            <span>Priceinformation</span>
          </div>

          {/* Loopar igenom produkterna i varukorgen */}
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
                <div className="cart-item-info">
                  <h3>{item.product.title}</h3> {/* Visar produktens titel */}
                  <img src={item.product.thumbnail} alt={item.product.title} className="cart-item-image" /> {/* Produktbild */}
                </div> 
                <div className="cart-item-details">
                  <div className="cart-item-price"> 
                    <h5>Price: ${item.product.price.toFixed(2)}</h5> {/* Visar produktens pris */}
                  </div> 
                  <div className="cart-item-quantity">
                    {/* Hantera kvantiteten för varje produkt */}
                    <QuantityControl
                      quantity={item.quantity}
                      // Öka kvantiteten
                      onIncrease={() => updateCartItemQuantity(index, item.quantity + 1)} 
                      // Minska kvantiteten men inte lägre än 1 
                      onDecrease={() => updateCartItemQuantity(index, item.quantity > 1 ? item.quantity - 1 : 1)}  
                      onChange={(value) => {
                        const newValue = Math.max(1, value);  // Säkerställ att kvantiteten inte blir mindre än 1
                        updateCartItemQuantity(index, newValue); // Uppdatera kvantiteten
                      }}
                    />
                  </div>
                  <div className="cart-item-total">
                    <h5>Total Price: ${(item.product.price * item.quantity).toFixed(2)}</h5>{/* Totalpris för denna produkt */}
                  </div>
                </div>
                <div className="remove-item">
                  {/* Om användaren vill ta bort produkten helt */}
                 <button onClick={() => removeFromCart(index)} className='remove-btn'>&times; 
                  {/* Stängningsikon */}</button> 
                </div>
              </div>
          ))}
          {/* Totalpris för hela varukorgen */}
           <h4>Total cart price: ${totalPrice.toFixed(2)}</h4> 
           <Link to="/order-summary">
            {/* Knapp för att gå vidare till checkout */}
            <button className="checkout-btn">Proceed to Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
