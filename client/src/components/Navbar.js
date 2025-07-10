import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#fff',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 999
    }}>
      <div style={{ fontWeight: '700', fontSize: '1.5rem', color: '#4CAF50' }}>VillageStay</div>
      <FaUserCircle
        size={28}
        style={{ cursor: 'pointer' }}
        onClick={() => navigate('/admin-login')}
        title="Admin Login"
      />
    </nav>
  );
}

export default Navbar;
