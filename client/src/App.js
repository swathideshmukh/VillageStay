import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Filters from './components/Filters';
import AOS from 'aos';
import 'aos/dist/aos.css';

import StaysGrid from './components/StaysGrid';
import StayDetails from './components/StayDetails';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';

import { useSelector } from 'react-redux';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const stays = [
    {
      title: "Nature's Nest",
      villageName: "Rampur",
      state: "Maharashtra",
      description: "A peaceful stay surrounded by farms and hills.",
      images: ["https://tse4.mm.bing.net/th/id/OIP.wIdsaxsVHRPw4DFjkcwznQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3"],
      amenities: ["WiFi", "Organic Food"],
      pricePerNight: 1200,
      available: true,
      category: "Eco-Tourism",
      region: "West",
      hostName: "Savitabai Patil",
      contact: "+91-9876543210"
    },
    {
      title: "Tribal Trails",
      villageName: "Amarkantak",
      state: "Madhya Pradesh",
      description: "Live like a local in tribal cottages.",
      images: ["https://www.taleof2backpackers.com/wp-content/uploads/2022/10/Bamboo-Cottage-at-Baasbari-Farms-in-Bijanbari-Darjeeling.jpg"],
      amenities: ["Cultural Nights", "Campfire"],
      pricePerNight: 1000,
      available: true,
      category: "Tribal-Tourism",
      region: "Central",
      hostName: "Bheem Singh Gond",
      contact: "+91-9123456780"
    },
    {
      title: "Riverside Bliss",
      villageName: "Gokarna",
      state: "Karnataka",
      description: "River views and fresh air near the Western Ghats.",
      images: ["https://tse4.mm.bing.net/th/id/OIP.Uk3PpqdjWxAuZrlU8_e7XgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"],
      amenities: ["Kayaking", "Fishing"],
      pricePerNight: 1800,
      available: true,
      category: "Eco-Tourism",
      region: "South",
      hostName: "Devamma Naik",
      contact: "+91-7012345678"
    },
    {
      title: "Hilltop Haven",
      villageName: "Kamshet",
      state: "Maharashtra",
      description: "Stay in the clouds with valley views.",
      images: ["https://bookretreats.com/cdn-cgi/image/width=1200,quality=65,f=auto,sharpen=1,fit=cover,gravity=auto/assets/photo/retreat/0m/44k/44002/p_1565061/1000_1718092000.jpg"],
      amenities: ["Trekking", "Hill View"],
      pricePerNight: 1700,
      available: true,
      category: "Rural",
      region: "West",
      hostName: "Raghunath Pawar",
      contact: "+91-9966778899"
    }
  ];

  const { searchText, category, region } = useSelector((state) => state.filters);

  const filteredStays = stays.filter((stay) => {
    const matchesSearch =
      stay.title.toLowerCase().includes(searchText.toLowerCase()) ||
      stay.villageName.toLowerCase().includes(searchText.toLowerCase());

    const matchesCategory = category === "All" || stay.category === category;
    const matchesRegion = region === "All" || stay.region === region;

    return matchesSearch && matchesCategory && matchesRegion;
  });

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Filters />
              <div className="container" id="stays">
                <h2>Featured Village Stays</h2>
                <StaysGrid stays={filteredStays} />
              </div>
            </>
          }
        />
        <Route path="/stay/:id" element={<StayDetails stays={stays} />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
