const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  oldPrice: { type: Number, min: 0 },
  sale: { type: Number, default: 0 },
  stock: { type: Number, default: 0 },
  rating: { type: Number, default: 4.5 },
  reviews: { type: Number, default: 0 },
  memory: { type: String },
  battery: { type: String },
  camera: { type: String },
  screen: { type: String },
  chip: { type: String },
  colors: [String],
  desc: { type: String },
  image: { type: String, default: "" },
  theme: [String], // Array of 3 color hex strings
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", productSchema);
