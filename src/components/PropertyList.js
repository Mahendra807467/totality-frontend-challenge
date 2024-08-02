import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import Filters from './Filters';
import '../styles/PropertyList.css';

const properties = [
  // Sample properties data
  { id: 1, image: 'property1.jpg', title: 'Cozy Apartment', description: 'A cozy apartment in the city center.', price: 100, location: 'City Center', bedrooms: 2, amenities: ['WiFi', 'Air Conditioning'] },
  { id: 2, image: 'property2.jpg', title: 'Luxury Villa', description: 'A luxurious villa with a private pool.', price: 300, location: 'Suburbs', bedrooms: 4, amenities: ['WiFi', 'Pool', 'Gym'] },
  // Add more properties as needed
];

function PropertyList() {
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const handleFilter = (filters) => {
    // Filter logic based on provided filters
    const filtered = properties.filter(property => {
      return (
        (!filters.location || property.location === filters.location) &&
        (!filters.priceRange || property.price <= filters.priceRange) &&
        (!filters.bedrooms || property.bedrooms === filters.bedrooms) &&
        (!filters.amenities.length || filters.amenities.every(amenity => property.amenities.includes(amenity)))
      );
    });
    setFilteredProperties(filtered);
  };

  return (
    <div className="property-list">
      <Filters onFilter={handleFilter} />
      <div className="property-cards">
        {filteredProperties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

export default PropertyList;