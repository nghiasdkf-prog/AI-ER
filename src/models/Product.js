const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  price: { 
    type: Number, 
    required: true,
    min: [0, 'Giá không được âm']
  },
  battery: { type: String },
  camera: { type: String },
  screen: { type: String },
  chip: { type: String },
  desc: { type: String },
  image: { type: String, default: "https://via.placeholder.com/150" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", productSchema);
