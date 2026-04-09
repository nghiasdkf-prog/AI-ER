const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: false,
    default: "Khách hàng ẩn danh"
  },
  customerEmail: {
    type: String,
    required: false
  },
  content: {
    type: String,
    required: true
  },
  source: {
    type: String,
    enum: ['Form Liên hệ', 'AI Chatbot'],
    default: 'Form Liên hệ'
  },
  status: {
    type: String,
    enum: ['Mới', 'Đã xử lý'],
    default: 'Mới'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Feedback', feedbackSchema);
