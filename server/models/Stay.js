const mongoose = require("mongoose");

const staySchema = new mongoose.Schema({
  title: { type: String, required: true },
  villageName: { type: String, required: true },
  state: { type: String },
  description: { type: String },
  images: [String], // array of image URLs
  amenities: [String],
  pricePerNight: { type: Number, required: true },
  available: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model("Stay", staySchema);
