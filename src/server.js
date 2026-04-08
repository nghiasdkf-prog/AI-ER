require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Product = require("./models/Product");
const User = require("./models/User");
const Order = require("./models/Order");
const { verifyToken, isAdmin } = require("./middleware/auth");

const app = express();
app.use(express.json());
app.use(cors());

// Phục vụ các file tĩnh (HTML, CSS, JS) trong thư mục hiện tại
app.use(express.static(__dirname, { setHeaders: res => res.set('Cache-Control', 'no-store') }));

// Đường dẫn mặc định chuyển hướng đến trang chủ
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index-astera-auth.html");
});

/* ================= DATABASE CONNECTION ================= */
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/astera")
  .then(() => console.log("✅ Kết nối MongoDB thành công!"))
  .catch((err) => console.error("❌ Lỗi kết nối MongoDB:", err));


/* ================= SEED DATA LẦN ĐẦU (Nếu DB trống) ================= */
const seedData = async () => {
  const countP = await Product.countDocuments();
  if (countP === 0) {
    await Product.insertMany([
      {
        name: "iPhone 16 Pro Max", brand: "Apple", category: "Flagship", price: 32990000,
        battery: "4685mAh", camera: "48MP + 5x Tele", screen: "6.9 LTPO OLED 120Hz", chip: "A18 Pro", desc: "Flagship cao cấp, camera mạnh",
      },
      {
        name: "Samsung Galaxy S26 Ultra", brand: "Samsung", category: "Camera", price: 30990000,
        battery: "5000mAh", camera: "200MP AI Zoom", screen: "6.8 AMOLED", chip: "Snapdragon 8 Elite", desc: "Camera cực mạnh, zoom xa",
      },
      {
        name: "ASUS ROG Phone 10", brand: "ASUS", category: "Gaming", price: 26990000,
        battery: "6000mAh", camera: "50MP", screen: "165Hz AMOLED", chip: "Snapdragon 8 Elite", desc: "Chuyên game, pin trâu",
      },
      {
        name: "Honor Magic 8 Pro", brand: "Honor", category: "Pin khủng", price: 20990000,
        battery: "5800mAh", camera: "50MP", screen: "OLED", chip: "Snapdragon 8 Elite", desc: "Pin cực trâu",
      }
    ]);
    console.log("✅ Đã seed dữ liệu mẫu Products!");
  }

  const countU = await User.countDocuments();
  if (countU === 0) {
    const admin = new User({ username: "Quản trị viên Astera", email: "admin@astera.vn", password: "admin123", role: "admin" });
    const user = new User({ username: "Khách hàng Astera", email: "user@astera.vn", password: "user123", role: "user" });
    await admin.save();
    await user.save();
    console.log("✅ Đã seed dữ liệu mẫu Users!");
  }
};
seedData();

/* ================= AUTHENTICATION API ================= */
app.post("/api/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "Email đã tồn tại!" });

    // Cấp quyền admin cho email test
    const role = email === "admin@astera.vn" ? "admin" : "user";

    user = new User({ username, email, password, role });
    await user.save();
    res.status(201).json({ message: "Đăng ký thành công!" });
  } catch (error) {
    res.status(500).json({ message: "Lỗi Server" });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Email hoặc mật khẩu không đúng!" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: "Email hoặc mật khẩu không đúng!" });

    const token = jwt.sign(
      { id: user._id, role: user.role, email: user.email, username: user.username },
      process.env.JWT_SECRET || "super_secret_astera_key_2026",
      { expiresIn: "1d" }
    );
    res.json({ token, user: { id: user._id, username: user.username, email: user.email, role: user.role } });
  } catch (error) {
    res.status(500).json({ message: "Lỗi Server" });
  }
});

/* ================= PRODUCTS CRUD API ================= */
// Public: Lấy list sản phẩm
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Lỗi Server" });
  }
});

// Admin: Thêm mới
app.post("/api/products", verifyToken, isAdmin, async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({ message: "Đã thêm sản phẩm", product });
  } catch (error) {
    res.status(500).json({ message: "Lỗi thêm sản phẩm", error });
  }
});

// Admin: Cập nhật
app.put("/api/products/:id", verifyToken, isAdmin, async (req, res) => {
  try {
    if (req.body.price && req.body.price < 0) return res.status(400).json({ message: "Giá không hợp lệ" });
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) return res.status(404).json({ message: "Không tìm thấy" });
    res.json({ message: "Đã cập nhật", product });
  } catch (error) {
    res.status(500).json({ message: "Lỗi Server" });
  }
});

// Admin: Xóa
app.delete("/api/products/:id", verifyToken, isAdmin, async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Không tìm thấy" });
    res.json({ message: "Đã xóa sản phẩm" });
  } catch (error) {
    res.status(500).json({ message: "Lỗi Server" });
  }
});

/* ================= ORDERS API ================= */
// Public/User: Tạo đơn hàng
app.post("/api/orders", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json({ message: "Đặt hàng thành công", order });
  } catch (error) {
    res.status(500).json({ message: "Lỗi tạo đơn hàng", error });
  }
});

// Admin: Lấy danh sách đơn hàng
app.get("/api/orders", verifyToken, isAdmin, async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Lỗi Server" });
  }
});

// Admin: Cập nhật trạng thái đơn (Tìm theo id AST)
app.put("/api/orders/:id", verifyToken, isAdmin, async (req, res) => {
  try {
    const paramId = req.params.id;
    const order = await Order.findOneAndUpdate(
      // Support matching by AST String ID or MongoDB ObjectId just in case
      mongoose.Types.ObjectId.isValid(paramId) ? { _id: paramId } : { id: paramId },
      req.body, 
      { new: true }
    );
    if (!order) return res.status(404).json({ message: "Không tìm thấy đơn hàng" });
    res.json({ message: "Đã cập nhật", order });
  } catch (error) {
    res.status(500).json({ message: "Lỗi Server" });
  }
});

// Admin: Xóa đơn hàng
app.delete("/api/orders/:id", verifyToken, isAdmin, async (req, res) => {
  try {
    const paramId = req.params.id;
    const order = await Order.findOneAndDelete(
      mongoose.Types.ObjectId.isValid(paramId) ? { _id: paramId } : { id: paramId }
    );
    if (!order) return res.status(404).json({ message: "Không tìm thấy" });
    res.json({ message: "Đã xóa đơn hàng" });
  } catch (error) {
    res.status(500).json({ message: "Lỗi Server" });
  }
});

/* ================= CHATBOT API ================= */
app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message.toLowerCase();
    
    // Tối ưu hóa: Chỉ tải 'name' và 'brand' cho khâu nhận diện tên thiết bị cực nhẹ thay vì toàn bộ DB
    const idMap = await Product.find({}, "name brand"); 

    // 🔥 1. Xem chi tiết sản phẩm
    const matchedRef = idMap.find(p =>
      userMessage.includes(p.name.toLowerCase()) ||
      (userMessage.includes(p.brand.toLowerCase()) && userMessage.includes("chi tiết"))
    );

    if (matchedRef) {
      const product = await Product.findById(matchedRef._id);
      return res.json({
        reply: `
          <strong style="font-size: 1.1em; color: var(--primary);">📱 ${product.name}</strong><br><br>
          <b style="color: #ea580c;">💰 Giá: ${product.price.toLocaleString()}đ</b><br>
          ⚙️ <b>Chip:</b> ${product.chip}<br>
          🔋 <b>Pin:</b> ${product.battery}<br>
          📸 <b>Camera:</b> ${product.camera || 'Đang cập nhật'}<br>
          🖥️ <b>Màn hình:</b> ${product.screen || 'Đang cập nhật'}<br><br>
          <i>💡 Nhận xét AI: ${product.desc}</i>
        `
      });
    }

    // 🔥 2. Gợi ý theo nhu cầu bằng Direct Regex Query Tối Ưu
    let query = null;
    if (userMessage.includes("pin") || userMessage.includes("trâu")) {
      query = { $or: [{ category: { $regex: /pin/i } }, { battery: { $regex: /trâu/i } }] };
    } else if (userMessage.includes("game")) {
      query = { category: { $regex: /gaming/i } };
    } else if (userMessage.includes("camera") || userMessage.includes("chụp")) {
      query = { category: { $regex: /camera/i } };
    } else if (userMessage.includes("iphone") || userMessage.includes("apple")) {
      query = { brand: { $regex: /apple/i } };
    } else if (userMessage.includes("samsung")) {
      query = { brand: { $regex: /samsung/i } };
    }

    if (query) {
      const result = await Product.find(query).limit(3);
      const formatProducts = result.slice(0, 3).map(p => `
        <div style="margin-bottom: 12px; padding: 10px; background: rgba(12,148,136,0.08); border-radius: 12px; border: 1px solid rgba(12,148,136,0.2);">
          <strong style="display:block; color: var(--primary); margin-bottom: 4px;">📱 ${p.name}</strong>
          <b style="color: #ea580c;">💰 ${p.price.toLocaleString()}đ</b><br>
          <span style="font-size: 0.9em; color: var(--muted);">⚙️ ${p.chip || 'AI Chip'} • 🔋 ${p.battery || 'Chuẩn'}</span>
        </div>
      `).join("");

      return res.json({
        reply: "Mình đã tìm thấy một số mẫu rất phù hợp với nhu cầu của bạn:<br><br>" + formatProducts + "Bạn muốn xem chi tiết mẫu nào không?"
      });
    }

    // 🔥 3. Flow hỏi lại hoặc hỗ trợ admin (như cũ)
    if (userMessage.includes("mua") || userMessage.includes("điện thoại") || userMessage.includes("tư vấn")) {
      return res.json({ reply: "Bạn đang tìm kiếm điện thoại theo tiêu chí nào? (Vd: <b>pin trâu</b>, <b>chuyên chơi game</b>, <b>chụp ảnh đẹp</b>, hoặc <b>hãng cụ thể</b>...)" });
    }

    if (userMessage.includes("admin") || userMessage.includes("trợ") || userMessage.includes("nhân viên")) {
      return res.json({ reply: "Nếu bạn cần sự hỗ trợ ngay lập tức, bạn có thể gọi trực tiếp hotline: <br><br>📞 <strong style='color: var(--primary); font-size: 1.1em;'>0123 456 789</strong>" });
    }

    return res.json({
      reply: "Xin lỗi, mình chưa hiểu rõ ý bạn. Bạn có thể hỏi theo các từ khóa như: <b>'máy pin trâu'</b>, <b>'gợi ý điện thoại chơi game'</b>, hay <b>'iPhone'</b> nhé!"
    });

  } catch (error) {
    return res.status(500).json({ reply: "Lỗi kết nối CSDL khi gọi AI Chat." });
  }
});

/* ================= RUN ================= */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server Backend API chạy tại http://localhost:${PORT}`);
});