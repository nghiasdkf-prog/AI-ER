const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // Order code like AST12345
  createdAt: { type: Date, default: Date.now },
  status: { type: String, default: "Mới" },
  paymentStatus: { type: String, default: "Chờ xác nhận" },
  paymentMethod: { type: String, default: "cod" },
  shippingMethod: { type: String, default: "standard" },
  coupon: { type: String, default: "" },
  customer: {
    fullName: String,
    phone: String,
    email: String,
    city: String,
    address: String,
    note: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    accountEmail: String
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
  totals: {
    subtotal: Number,
    discount: Number,
    shipping: Number,
    total: Number,
    itemCount: Number
  }
});

module.exports = mongoose.model("Order", orderSchema);
