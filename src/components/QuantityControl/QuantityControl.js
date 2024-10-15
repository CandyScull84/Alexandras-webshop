// QuantityControl.js
import React from 'react';
import './QuantityControl.css'; 

// Komponent för att kontrollera kvantitet (öka, minska och ändra direkt)
const QuantityControl = ({ quantity, onIncrease, onDecrease, onChange }) => {
  return (
    <div className="quantity-controls">
       {/* Knapp för att minska kvantiteten */}
      <button onClick={onDecrease} className="quantity-btn">-</button>
      {/* Inmatningsfält för att visa och ändra kvantiteten direkt */}
      <input
        type="number"
        className='quantity-input'
        value={quantity} 
        min="1"
        onChange={(e) => onChange(Number(e.target.value))}
      />
      {/* Knapp för att öka kvantiteten */}
      <button onClick={onIncrease} className="quantity-btn">+</button>
    </div>
  );
};

export default QuantityControl;
