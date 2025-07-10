import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

function Hero() {
  const navigate = useNavigate();

  return (
    <section style={{
      backgroundImage: "url('https://cdn.pixabay.com/photo/2016/10/18/21/28/seljalandsfoss-1751463_1280.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: 'white',
      padding: '2rem',
      position: 'relative'
    }}>
      {/* Admin Icon Top Right */}
      <div
        style={{ position: 'absolute', top: 20, right: 20, cursor: 'pointer', zIndex: 10 }}
        onClick={() => navigate('/admin/login')}
        title="Admin Login"
      >
        <FaUserCircle size={32} color="white" />
      </div>

      {/* Hero Text Overlay */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.45)', zIndex: 0
      }}></div>
      <div style={{ zIndex: 1 }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '700' }}>Explore Rural India</h1>
        <p style={{ fontSize: '1.2rem' }}>
          Discover authentic village experiences through our curated stays.
        </p>
      </div>
    </section>
  );
}

export default Hero;
