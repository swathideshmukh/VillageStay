import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchText, setCategory, setRegion } from '../redux/filtersSlice';
import { FaSearch } from 'react-icons/fa';

function Filters() {
  const dispatch = useDispatch();

  const categories = [
    "All", "Rural", "Agro-Tourism", "Crafts-Tourism", "Tribal-Tourism",
    "Eco-Tourism", "Wildlife-Tourism", "Live Like a Local"
  ];

  const regions = [
    "All",
    "East - Andaman and Nicobar Islands, Bihar, Jharkhand, Odisha, West Bengal",
    "West - Dadra and Nagar Haveli and Daman and Diu, Goa, Gujarat, Maharashtra",
    "Central - Chhattisgarh, Madhya Pradesh",
    "North East - Arunachal Pradesh, Assam, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, Tripura",
    "North - Chandigarh, Delhi, Haryana, Himachal Pradesh, Jammu and Kashmir, Ladakh, Punjab, Rajasthan, Uttar Pradesh, Uttarakhand",
    "South - Andhra Pradesh, Karnataka, Kerala, Lakshadweep, Puducherry, Tamil Nadu, Telangana"
  ];

  return (
    <div className="filters-wrapper">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search all villages"
          onChange={(e) => dispatch(setSearchText(e.target.value))}
        />
        <FaSearch className="search-icon" />
      </div>

      <select onChange={(e) => dispatch(setCategory(e.target.value))} className="filter-dropdown">
        <option disabled selected>Categories</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>{cat}</option>
        ))}
      </select>

      <select onChange={(e) => dispatch(setRegion(e.target.value))} className="filter-dropdown">
        <option disabled selected>Regions</option>
        {regions.map((reg, index) => (
          <option key={index} value={reg}>{reg}</option>
        ))}
      </select>
    </div>
  );
}

export default Filters;
