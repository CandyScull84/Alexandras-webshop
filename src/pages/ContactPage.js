// ContactPage.js
import React from 'react';
import './ContactPage.css'; // Importera din CSS-fil

const ContactPage = () => {
  return (
    <div className="contact-container">
       {/* Ett kort som innehåller kontaktinformationen */}
      <div className="contact-card">
        <h2>Contact Us</h2>
        <p>Email: support@BakingDreams.com</p>
        <p>Phone: +123 456 789</p>
      </div>
    </div>
  );
};

export default ContactPage;
