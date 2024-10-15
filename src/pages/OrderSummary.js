// OrderSummary.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importera Link
import { ToastContainer, toast } from 'react-toastify'; // Importera Toast
import 'react-toastify/dist/ReactToastify.css'; // Importera CSS för Toastify
import './OrderSummary.css';

const OrderSummary = ({ cartItems, handleSubmitOrder }) => {
  // State för att lagra användarens personliga detaljer
  const [personalDetails, setPersonalDetails] = useState({
    name: '',
    address: '',
    email: ''
  });

   // Funktion för att hantera förändringar i inmatningsfälten
  const handleChange = (e) => {
    setPersonalDetails({
      ...personalDetails,
      [e.target.name]: e.target.value,
    });
  };

  // Funktion för att hantera inlämning av form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order details submitted: ", personalDetails); // Logga inmatade detaljer
    handleSubmitOrder(personalDetails); // Skicka personuppgifter till överordnad komponent
    toast.success("Order Submitted! Thank you for your purchase."); // Toast visar bekräftelse
  };

   // Beräkna totalpriset för varorna i varukorgen
  const totalPrice = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

  return (
    <div className="ordersummary-content">
      <h3>Order Summary</h3>
      {cartItems.length === 0 ? (
        <div className='empty-cart'>
          <p>Your cart is empty</p>
          <Link to="/">Go to Homepage</Link> {/* Länk tillbaka till hemsidan */}
        </div>
      ) : (
        <div className="order-summary-container">
          <div className="product-list">
            <h4>Products</h4>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} className="product-item">
                  {/* Produktens titel */}
                  <span>{item.product.title}</span> {/* Produktens titel */}
                  {/* Antal av produkten */}
                  <span className="product-quantity"> {item.quantity} pcs</span> 
                  {/* Totalt pris för produkten */}
                  <span className="product-price">${(item.product.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <span className="product-totalprice">
              {/* Totalpriset för alla varor */}
              <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
            </span>
          </div> 
         
          <div className="personal-info">
           
            <h3>Personal Information</h3>
            <form onSubmit={handleSubmit}>
            {/*Personlig information */}
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={personalDetails.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Address:
                <input
                  type="text"
                  name="address"
                  value={personalDetails.address}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={personalDetails.email}
                  onChange={handleChange}
                  required
                />
              </label>
              {/* Knapp för att skicka ordern */}
              <button type="submit">Submit Order</button>
            </form>
          </div>
        </div>
      )}

      {/* Toast-container for notifications */}
      <ToastContainer
        position="top-center" // Position på skärmen
        autoClose={5000} // Tid i millisekunder innan rutan stängs automatiskt
        hideProgressBar={true} // Dölj statuslinjen
        closeOnClick
        pauseOnHover
        draggable
        theme="light" // Tema för toast-meddelande
      />
    </div>
  );
};

export default OrderSummary;
