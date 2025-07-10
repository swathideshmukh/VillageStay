const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

router.post('/', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: 'Booking saved successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save booking' });
  }
});

// GET all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    console.error("❌ Failed to fetch bookings:", err);
    res.status(500).json({ error: "Server error" });
  }
});


module.exports = router;
