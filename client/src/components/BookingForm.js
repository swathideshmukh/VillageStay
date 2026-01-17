import React, { useState } from 'react';
import axios from 'axios';

function BookingForm() {
  const [form, setForm] = useState({ name: '', email: '', checkIn: '', checkOut: '', guests: 1 });

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/bookings', form);
      alert('✅ Booking submitted successfully!');
      console.log(res.data);
      setForm({ name: '', email: '', checkIn: '', checkOut: '', guests: 1 }); // clear form
    } catch (err) {
      console.error('❌ Booking failed:', err);
      alert('Booking failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
      <input name="name" type="text" placeholder="Your Name" value={form.name} required onChange={handleChange} />
      <input name="email" type="email" placeholder="Email" value={form.email} required onChange={handleChange} />
      <input name="checkIn" type="date" value={form.checkIn} required min={today} onChange={handleChange} />
      <input name="checkOut" type="date" value={form.checkOut} required min={today} onChange={handleChange} />
      <input name="guests" type="number" min="1" value={form.guests} placeholder="Guests" required onChange={handleChange} />
      <button type="submit">Book Now</button>
    </form>
  );
}

export default BookingForm;
