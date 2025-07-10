const express = require("express");
const router = express.Router();
const Stay = require("../models/stay");

// GET all stays
router.get("/", async (req, res) => {
  try {
    const stays = await Stay.find();
    res.json(stays);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new stay
router.post("/", async (req, res) => {
  const stay = new Stay(req.body);
  try {
    const savedStay = await stay.save();
    res.status(201).json(savedStay);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
