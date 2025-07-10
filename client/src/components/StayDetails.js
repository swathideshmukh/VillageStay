import React from 'react';
import { useParams, Link } from 'react-router-dom';
import BookingForm from './BookingForm';
import { FaWifi, FaLeaf, FaFire, FaUmbrellaBeach, FaWalking } from "react-icons/fa";

function StayDetails({ stays = [] }) {
  const { id } = useParams();
  const index = parseInt(id);

  if (isNaN(index) || index < 0 || index >= stays.length) {
    return <p style={{ textAlign: 'center' }}>⚠️ Stay not found</p>;
  }

  const stay = stays[index];

  // Optional icons for more amenities
  const getAmenityIcon = (amenity) => {
    switch (amenity) {
      case "WiFi": return <FaWifi style={{ marginRight: '5px' }} />;
      case "Organic Food": return <FaLeaf style={{ marginRight: '5px' }} />;
      case "Campfire": return <FaFire style={{ marginRight: '5px' }} />;
      case "Village Tours": return <FaWalking style={{ marginRight: '5px' }} />;
      case "Beach Access": return <FaUmbrellaBeach style={{ marginRight: '5px' }} />;
      default: return null;
    }
  };

  return (
    <div className="container" style={{ marginTop: '2rem' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>← Back to Home</Link>

      <h2 style={{ marginTop: '1rem' }}>{stay.title}</h2>

      <img
        src={stay.images[0]}
        alt={stay.title}
        style={{
          width: '100%',
          maxHeight: '400px',
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '1rem'
        }}
      />

      <p><strong>Village:</strong> {stay.villageName}, {stay.state}</p>
      <p><strong>Description:</strong> {stay.description}</p>
      <p><strong>Price per night:</strong> ₹{stay.pricePerNight}</p>

      <p><strong>Amenities:</strong></p>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {stay.amenities.map((a, i) => (
          <li key={i} style={{ marginBottom: '0.5rem' }}>
            {getAmenityIcon(a)} {a}
          </li>
        ))}
      </ul>

      <p><strong>Activities:</strong> Agriculture, Pottery, Local Walks</p>
      <p><strong>Host:</strong> {stay.hostName} | <strong>Contact:</strong> {stay.contact}</p>

      <div style={{ marginTop: '2rem' }}>
        <h3>Book This Stay</h3>
        <BookingForm />
      </div>
    </div>
  );
}

export default StayDetails;
