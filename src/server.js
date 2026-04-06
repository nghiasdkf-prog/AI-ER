const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

/* ================= DATA ================= */

const products = [
  {
    id: 1,
    name: "iPhone 16 Pro Max",
    brand: "Apple",
    category: "Flagship",
    price: 32990000,
    battery: "4685mAh",
    camera: "48MP + 5x Tele",
    screen: "6.9 LTPO OLED 120Hz",
    chip: "A18 Pro",
    desc: "Flagship cao cấp, camera mạnh, thiết kế titan"
  },
  {
    id: 2,
    name: "Samsung Galaxy S26 Ultra",
    brand: "Samsung",
    category: "Camera",
    price: 30990000,
    battery: "5000mAh",
    camera: "200MP AI Zoom",
    screen: "6.8 AMOLED",
    chip: "Snapdragon 8 Elite",
    desc: "Camera cực mạnh, zoom xa"
  },
  {
    id: 3,
    name: "ASUS ROG Phone 10",
    brand: "ASUS",
    category: "Gaming",
    price: 26990000,
    battery: "6000mAh",
    camera: "50MP",
    screen: "165Hz AMOLED",
    chip: "Snapdragon 8 Elite",
    desc: "Chuyên game, pin trâu"
  },
  {
    id: 4,
    name: "Honor Magic 8 Pro",
    brand: "Honor",
    category: "Pin khủng",
    price: 20990000,
    battery: "5800mAh",
    camera: "50MP",
    screen: "OLED",
    chip: "Snapdragon 8 Elite",
    desc: "Pin cực trâu, dùng cả ngày"
  }
];

/* ================= LOGIC ================= */

// 🔍 Gợi ý theo nhu cầu
function recommendProducts(message) {
  message = message.toLowerCase();

  if (message.includes("pin") || message.includes("trâu")) {
    return products.filter(p => p.category.toLowerCase().includes("pin"));
  }

  if (message.includes("game")) {
    return products.filter(p => p.category.toLowerCase().includes("gaming"));
  }

  if (message.includes("camera") || message.includes("chụp")) {
    return products.filter(p => p.category.toLowerCase().includes("camera"));
  }

  if (message.includes("iphone") || message.includes("apple")) {
    return products.filter(p => p.brand.toLowerCase().includes("apple"));
  }

  if (message.includes("samsung")) {
    return products.filter(p => p.brand.toLowerCase().includes("samsung"));
  }

  return [];
}

// 📦 Format sản phẩm
function formatProducts(list) {
  return list.slice(0, 3).map(p => `
    <div style="margin-bottom: 12px; padding: 10px; background: rgba(12,148,136,0.08); border-radius: 12px; border: 1px solid rgba(12,148,136,0.2);">
      <strong style="display:block; color: var(--primary); margin-bottom: 4px;">📱 ${p.name}</strong>
      <b style="color: #ea580c;">💰 ${p.price.toLocaleString()}đ</b><br>
      <span style="font-size: 0.9em; color: var(--muted);">⚙️ ${p.chip} • 🔋 ${p.battery}</span>
    </div>
  `).join("");
}

/* ================= API ================= */

app.post("/chat", (req, res) => {
  const userMessage = req.body.message.toLowerCase();

  // 🔥 1. Xem chi tiết sản phẩm
  const product = products.find(p =>
    userMessage.includes(p.name.toLowerCase()) || userMessage.includes(p.brand.toLowerCase()) && userMessage.includes("chi tiết")
  );

  if (product) {
    return res.json({
      reply: `
        <strong style="font-size: 1.1em; color: var(--primary);">📱 ${product.name}</strong><br><br>
        <b style="color: #ea580c;">💰 Giá: ${product.price.toLocaleString()}đ</b><br>
        ⚙️ <b>Chip:</b> ${product.chip}<br>
        🔋 <b>Pin:</b> ${product.battery}<br>
        📸 <b>Camera:</b> ${product.camera}<br>
        🖥️ <b>Màn hình:</b> ${product.screen}<br><br>
        <i>💡 Nhận xét AI: ${product.desc}</i>
      `
    });
  }

  // 🔥 2. Gợi ý theo nhu cầu
  const result = recommendProducts(userMessage);

  if (result.length > 0) {
    return res.json({
      reply: "Mình đã tìm thấy một số mẫu rất phù hợp với nhu cầu của bạn:<br><br>" + formatProducts(result) + "Bạn muốn xem chi tiết mẫu nào không?"
    });
  }

  // 🔥 3. Flow hỏi lại
  if (userMessage.includes("mua") || userMessage.includes("điện thoại") || userMessage.includes("tư vấn")) {
    return res.json({
      reply: "Bạn đang tìm kiếm điện thoại theo tiêu chí nào? (Vd: <b>pin trâu</b>, <b>chuyên chơi game</b>, <b>chụp ảnh đẹp</b>, hoặc <b>hãng cụ thể</b>...)"
    });
  }
  
  // 🔥 4. Yêu cầu hỗ trợ từ supervisor/admin
  if (userMessage.includes("admin") || userMessage.includes("hỗ trợ") || userMessage.includes("liên hệ") || userMessage.includes("nhân viên") || userMessage.includes("người") || userMessage.includes("supervisor") || userMessage.includes("gọi") || userMessage.includes("help")) {
    return res.json({
      reply: "Nếu bạn cần sự hỗ trợ ngay lập tức từ Supervisor/Admin của cửa hàng, bạn có thể gọi trực tiếp đến hotline: <br><br>📞 <strong style='color: var(--primary); font-size: 1.1em;'>0123 456 789</strong><br><br>Họ sẽ trả lời và hỗ trợ bạn một cách tốt nhất!"
    });
  }

  // 🔥 5. fallback
  return res.json({
    reply: "Xin lỗi, mình chưa hiểu rõ ý bạn. Bạn có thể hỏi theo các từ khóa như: <b>'máy pin trâu'</b>, <b>'gợi ý điện thoại chơi game'</b>, hay <b>'iPhone'</b> nhé!"
  });
});

/* ================= RUN ================= */

app.listen(3000, () => {
  console.log("✅ Server chạy tại http://localhost:3000");
});