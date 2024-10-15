// AboutPage.js
import React from 'react';
import './AboutPage.css'; // Importera din nya CSS-fil

const AboutPage = () => {
  return (
    <div className="about-container">
      {/* Sektion för "brevet" */}
      <div className="about-letter-paper">
      {/* Företagslogotyp */}
      <img src="/logo_BDZero.png" alt="Baking Dreams Logo" className="logo-img" /> 
        {/* Textinnehåll brev */}
        <div className="textfield"> 
          <p>Dear Customer,</p>
          <p>
            Welcome to our online shop! We pride ourselves on providing high-quality products that cater to all your needs.
          </p>
          <p>
            Our mission is to offer an exceptional shopping experience, ensuring you find what you're looking for quick and easy.
          </p>
          <p>
            Thank you for choosing us as your go-to store. We are committed to deliver the best products and top notch service.
          </p>
          <p>
           Don't hesitate to ask if there's any product you're missing. We will do anything to try to fullfill your bakedreams.
          </p>
          <p>
            Sincerely, <br />
          </p>
          {/* Signatur */}
          <h2>  
            The Team of Baking Dreams
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

