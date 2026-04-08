const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  customer: {
    fullName: String,
    phone: String,
    email: String,
    city: String,
    address: String,
    note: String
  },
  paymentMethod: String,
  paymentStatus: String,
  shippingMethod: String,
  coupon: String,
  totals: {
    subtotal: Number,
    discount: Number,
    shipping: Number,
    total: Number
  },
  items: [
    {
      id: String,
      name: String,
      brand: String,
      memory: String,
      price: Number,
      qty: Number
    }
  ],
  status: { type: String, default: "Mới" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", orderSchema);
