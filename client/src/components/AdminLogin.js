import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // ✅ Panchayat Admins List
  const admins = [
    {
      name: "Savitabai Patil",
      state: "Maharashtra",
      district: "Pune",
      code: "MH-RAMPUR-1023",
      password: "rampurGram@2025"
    },
    {
      name: "Devamma Naik",
      state: "Karnataka",
      district: "Udupi",
      code: "KA-GOKARNA-2025",
      password: "gokarnaVillage@2025"
    },
    {
      name: "Bheem Singh Gond",
      state: "Madhya Pradesh",
      district: "Anuppur",
      code: "MP-AMARKANTAK-1122",
      password: "tribalRoots@123"
    }
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    const matchedAdmin = admins.find(
      (a) =>
        a.state === state &&
        a.district === district &&
        a.code === code &&
        a.password === password
    );

    if (matchedAdmin) {
      localStorage.setItem("adminLoggedIn", "true");
      localStorage.setItem("adminName", matchedAdmin.name);
      localStorage.setItem("panchayatCode", matchedAdmin.code);
      navigate("/admin/dashboard");
    } else {
      alert("❌ Invalid Panchayat credentials");
    }
  };

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-overlay">
        <div className="container admin-login">
          <h2>Panchayat Admin Login</h2>
          <form onSubmit={handleLogin}>
            <label>State</label>
            <select value={state} onChange={(e) => setState(e.target.value)} required>
              <option value="">Select State</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
            </select>

            <label>District</label>
            <select value={district} onChange={(e) => setDistrict(e.target.value)} required>
              <option value="">Select District</option>
              {state === "Maharashtra" && <option value="Pune">Pune</option>}
              {state === "Karnataka" && <option value="Udupi">Udupi</option>}
              {state === "Madhya Pradesh" && <option value="Anuppur">Anuppur</option>}
            </select>

            <label>Panchayat Code</label>
            <input
              type="text"
              placeholder="e.g., MH-RAMPUR-1023"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Panchayat password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
