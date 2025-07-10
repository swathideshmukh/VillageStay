import React from 'react';
import { useNavigate } from 'react-router-dom';

function StaysGrid({ stays }) {
  const navigate = useNavigate();

  return (
    <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
      {stays.map((stay, index) => (
        <div
          key={index}
          onClick={() => navigate(`/stay/${index}`)}
          style={{
            cursor: 'pointer',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s',
            backgroundColor: '#fff'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <img src={stay.images[0]} alt={stay.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
          <div style={{ padding: '1rem', textAlign: 'center' }}>
            <h3>{stay.title}</h3>
            <p><strong>{stay.state}</strong></p>
            <p>{stay.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StaysGrid;
