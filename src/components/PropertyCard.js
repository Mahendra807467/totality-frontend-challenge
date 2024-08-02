import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import '../styles/PropertyCard.css';

function PropertyCard({ property }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="property-card">
      <img src={property.title} alt={property.title} />
      <h3>{property.title}</h3>
      <p>{property.description}</p>
      <p>${property.price}/night</p>
      <button onClick={() => addToCart(property)}>Book Now</button>
    </div>
  );
}

export default PropertyCard;