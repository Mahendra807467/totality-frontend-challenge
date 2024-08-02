import React, { useState } from 'react';
import '../styles/Filters.css';

function Filters({ onFilter }) {
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [amenities, setAmenities] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ location, priceRange, bedrooms, amenities });
  };

  const handleAmenitiesChange = (e) => {
    const value = e.target.value;
    setAmenities(
      amenities.includes(value)
        ? amenities.filter(amenity => amenity !== value)
        : [...amenities, value]
    );
  };

  return (
    <form className="filters" onSubmit={handleSubmit}>
      <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
      <input type="number" placeholder="Max Price" value={priceRange} onChange={(e) => setPriceRange(e.target.value)} />
      <input type="number" placeholder="Bedrooms" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} />
      <div>
        <label>
          <input type="checkbox" value="WiFi" checked={amenities.includes('WiFi')} onChange={handleAmenitiesChange} />
          WiFi
        </label>
        <label>
          <input type="checkbox" value="Air Conditioning" checked={amenities.includes('Air Conditioning')} onChange={handleAmenitiesChange} />
          Air Conditioning
        </label>
        <label>
          <input type="checkbox" value="Pool" checked={amenities.includes('Pool')} onChange={handleAmenitiesChange} />
          Pool
        </label>
        <label>
          <input type="checkbox" value="Gym" checked={amenities.includes('Gym')} onChange={handleAmenitiesChange} />
          Gym
        </label>
      </div>
      <button type="submit">Apply Filters</button>
    </form>
  );
}

export default Filters;