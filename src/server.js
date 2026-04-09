require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Product = require("./models/Product");
const User = require("./models/User");
const Order = require("./models/Order");
const Feedback = require("./models/Feedback");
const emailService = require("./services/emailService");
const { verifyToken, isAdmin } = require("./middleware/auth");
const { GoogleGenerativeAI } = require("@google/generative-ai");

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
        name: "iPhone 16 Pro Max",
        brand: "Apple",
        category: "Flagship",
        price: 32990000,
        oldPrice: 34990000,
        sale: 6,
        stock: 15,
        rating: 4.9,
        reviews: 284,
        memory: "256GB",
        battery: "4685mAh",
        camera: "48MP + 5x Tele",
        screen: "6.9 LTPO OLED 120Hz",
        chip: "A18 Pro",
        colors: ["Titan Đen", "Titan Tự Nhiên", "Titan Trắng"],
        desc: "Flagship cao cấp, camera mạnh",
        theme: ["#121b33", "#7f8cff", "#e9eeff"]
      },
      {
        name: "Samsung Galaxy S26 Ultra",
        brand: "Samsung",
        category: "Camera",
        price: 30990000,
        oldPrice: 33990000,
        sale: 9,
        stock: 12,
        rating: 4.8,
        reviews: 216,
        memory: "512GB",
        battery: "5000mAh",
        camera: "200MP AI Zoom",
        screen: "6.8 AMOLED",
        chip: "Snapdragon 8 Elite",
        colors: ["Xám Titan", "Xanh Ice", "Đen"],
        desc: "Camera cực mạnh, zoom xa",
        theme: ["#14203a", "#4cc9f0", "#dff6ff"]
      },
      {
        name: "ASUS ROG Phone 10",
        brand: "ASUS",
        category: "Gaming",
        price: 26990000,
        oldPrice: 28990000,
        sale: 7,
        stock: 8,
        rating: 4.8,
        reviews: 145,
        memory: "512GB",
        battery: "6000mAh",
        camera: "50MP",
        screen: "165Hz AMOLED",
        chip: "Snapdragon 8 Elite",
        colors: ["Đen Phantom", "Trắng Storm"],
        desc: "Chuyên game, pin trâu",
        theme: ["#111827", "#ef4444", "#fee2e2"]
      }
    ]);
    console.log("✅ Đã seed dữ liệu mẫu Products đầy đủ thông tin!");
  }

  const countU = await User.countDocuments();
  if (countU === 0) {
    const admin = new User({ username: "Quản trị viên Astera", email: "admin@astera.vn", password: "admin123", role: "admin", isVerified: true });
    const user = new User({ username: "Khách hàng Astera", email: "user@astera.vn", password: "user123", role: "user", isVerified: true });
    await admin.save();
    await user.save();
    console.log("✅ Đã seed dữ liệu mẫu Users!");
  }

  // Tự động gán isVerified: true cho các User cũ chưa có thuộc tính này trong DB
  const updateResult = await User.updateMany(
    { isVerified: { $exists: false } }, 
    { $set: { isVerified: true } }
  );
  if (updateResult.modifiedCount > 0) {
    console.log(`✅ Đã mở khóa (verify) thành công ${updateResult.modifiedCount} tài khoản cũ.`);
  }
};
seedData();

/* ================= AUTHENTICATION API ================= */
app.post("/api/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      if (!user.isVerified) {
        // Gửi lại mã nếu email tồn tại nhưng chưa kích hoạt
        const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
        user.otpCode = otpCode;
        user.otpExpires = new Date(Date.now() + 15 * 60 * 1000); // 15 mins
        user.password = password; // Cập nhật lại pass nếu muốn
        await user.save();
        emailService.sendRegistrationOTP(user.email, user.username, otpCode).catch(e => console.error(e));
        return res.status(201).json({ message: "Tài khoản chưa xác thực. OTP mới đã được gửi!", requireOTP: true });
      }
      return res.status(400).json({ message: "Email đã tồn tại!" });
    }

    // Cấp quyền admin cho email test
    const role = email === "admin@astera.vn" ? "admin" : "user";
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

    user = new User({
      username,
      email,
      password,
      role,
      isVerified: false,
      otpCode,
      otpExpires: new Date(Date.now() + 15 * 60 * 1000)
    });

    await user.save();

    // Gửi email
    emailService.sendRegistrationOTP(user.email, user.username, otpCode).catch(e => console.error("OTP send err", e));

    res.status(201).json({ message: "Vui lòng nhập mã xác thực OTP gửi đến email của bạn.", requireOTP: true });
  } catch (error) {
    res.status(500).json({ message: "Lỗi Server" });
  }
});

app.post("/api/verify-otp", async (req, res) => {
  try {
    const { email, otpCode } = req.body;
    const user = await User.findOne({ email, otpCode });

    if (!user) return res.status(400).json({ message: "Mã OTP không đúng hoặc email không hợp lệ." });
    if (user.otpExpires < new Date()) return res.status(400).json({ message: "Mã OTP đã hết hạn." });

    user.isVerified = true;
    user.otpCode = null;
    user.otpExpires = null;
    await user.save();

    res.json({ message: "Xác thực tài khoản thành công!" });
  } catch (error) {
    res.status(500).json({ message: "Lỗi Server" });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Email hoặc mật khẩu không đúng!" });

    if (user.isVerified === false) {
      return res.status(403).json({ message: "Tài khoản chưa được xác thực email.", requireOTP: true, email: user.email });
    }

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
    const productId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      // Nếu không phải ObjectID (có thể là ID số từ bộ nhớ cũ), thử tìm theo trường "id" nếu có, 
      // hoặc báo lỗi ID không hợp lệ cho MongoDB
      return res.status(400).json({ message: `ID "${productId}" không phải định dạng MongoDB hợp lệ.` });
    }
    const product = await Product.findByIdAndUpdate(productId, req.body, { returnDocument: 'after' });
    if (!product) return res.status(404).json({ message: "Không tìm thấy sản phẩm trên DB" });
    res.json({ message: "Đã cập nhật sản phẩm", product });
  } catch (error) {
    res.status(500).json({ message: "Lỗi Server khi cập nhật sản phẩm", error: error.message });
  }
});

// Admin: Xóa
app.delete("/api/products/:id", verifyToken, isAdmin, async (req, res) => {
  try {
    const productId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: `ID "${productId}" không hợp lệ để xóa từ DB.` });
    }
    const product = await Product.findByIdAndDelete(productId);
    if (!product) return res.status(404).json({ message: "Sản phẩm không tồn tại hoặc đã bị xóa trước đó." });
    res.json({ message: "Đã xóa sản phẩm thành công khỏi cơ sở dữ liệu." });
  } catch (error) {
    res.status(500).json({ message: "Lỗi Server khi xóa sản phẩm", error: error.message });
  }
});

/* ================= ORDERS CRUD API ================= */
// Admin: Lấy danh sách đơn hàng
app.get("/api/orders", verifyToken, isAdmin, async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Lỗi lấy danh sách hóa đơn" });
  }
});

// User: Lấy danh sách đơn hàng của tôi
app.get("/api/my-orders", verifyToken, async (req, res) => {
  try {
    const userEmail = req.user.email;
    const userId = req.user.id;
    const orders = await Order.find({
      $or: [
        { "customer.userId": userId },
        { "customer.accountEmail": userEmail }
      ]
    }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Lỗi lấy danh sách đơn mua" });
  }
});

// Public/User: Tạo đơn hàng mới
app.post("/api/orders", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();

    // Auto-send email confirmation
    emailService.sendOrderConfirmation(order).catch(err => console.error("Lỗi gửi mail hóa đơn:", err));

    res.status(201).json({ message: "Đặt hàng thành công", order });
  } catch (error) {
    res.status(500).json({ message: "Lỗi tạo đơn hàng", error });
  }
});

// Admin: Cập nhật đơn hàng
app.put("/api/orders/:id", verifyToken, isAdmin, async (req, res) => {
  try {
    const order = await Order.findOneAndUpdate({ id: req.params.id }, req.body, { returnDocument: 'after' });
    if (!order) {
      // Thử tìm theo _id nếu id (mã đơn) không khớp
      const orderById = await Order.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' });
      if (!orderById) return res.status(404).json({ message: "Không tìm thấy hóa đơn" });
      return res.json({ message: "Đã cập nhật", order: orderById });
    }
    res.json({ message: "Đã cập nhật", order });
  } catch (error) {
    res.status(500).json({ message: "Lỗi cập nhật hóa đơn" });
  }
});

// Admin: Xóa đơn hàng
app.delete("/api/orders/:id", verifyToken, isAdmin, async (req, res) => {
  try {
    const order = await Order.findOneAndDelete({ id: req.params.id });
    if (!order) {
      // Thử tìm theo _id
      const orderById = await Order.findByIdAndDelete(req.params.id);
      if (!orderById) return res.status(404).json({ message: "Không tìm thấy hóa đơn" });
    }
    res.json({ message: "Đã xóa hóa đơn" });
  } catch (error) {
    res.status(500).json({ message: "Lỗi xóa hóa đơn" });
  }
});

/* ================= FEEDBACK API (Góp ý / Khiếu nại) ================= */

// Public: Tạo góp ý từ Form liên hệ
app.post("/api/feedback", async (req, res) => {
  try {
    const feedback = new Feedback({
      customerName: req.body.name || "Khách ẩn danh",
      customerEmail: req.body.email || "",
      content: req.body.content,
      source: "Form Liên hệ"
    });
    const saved = await feedback.save();

    // Auto-send feedback emails
    emailService.sendFeedbackAckToCustomer(saved).catch(err => console.error("Lỗi gửi mail cám ơn góp ý:", err));
    emailService.sendFeedbackAlertToAdmin(saved).catch(err => console.error("Lỗi gửi mail cảnh báo Admin:", err));

    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: "Lỗi lưu phản hồi" });
  }
});

// Admin: Lấy danh sách góp ý
app.get("/api/feedback", verifyToken, isAdmin, async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: "Lỗi lấy danh sách phản hồi" });
  }
});

// Admin: Xóa/Giải quyết góp ý
app.delete("/api/feedback/:id", verifyToken, isAdmin, async (req, res) => {
  try {
    const deleted = await Feedback.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Không tìm thấy" });
    res.json({ message: "Đã xóa 1", feedback: deleted });
  } catch (error) {
    res.status(500).json({ message: "Lỗi xóa phản hồi" });
  }
});

app.put("/api/feedback/:id", verifyToken, isAdmin, async (req, res) => {
  try {
    const updated = await Feedback.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' });
    if (!updated) return res.status(404).json({ message: "Không tìm thấy" });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Lỗi cập nhật phản hồi" });
  }
});

/* ================= CHATBOT AI (GEMINI INTEGRATION) ================= */
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

async function getGeminiResponse(systemPrompt, userMessage) {
  try {
    const result = await model.generateContent({
      contents: [
        { role: "user", parts: [{ text: systemPrompt + "\n\nUser Message: " + userMessage }] }
      ],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 2048,
      },
    });

    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("❌ Gemini API Error:", error.message);
    return null;
  }
}

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;
    const userEmail = req.body.email;
    const products = await Product.find();

    // Lấy thông tin đơn hàng nếu có email hoặc nếu có mã đơn trong tin nhắn
    let orderContext = "";

    // 1. Nếu khách đã đăng nhập, lấy đơn gần nhất
    if (userEmail) {
      const latestOrder = await Order.findOne({ "customer.accountEmail": userEmail }).sort({ createdAt: -1 });
      if (latestOrder) {
        orderContext += `Đơn hàng gần nhất của khách (theo email ${userEmail}): Mã ${latestOrder.id}, Trạng thái: "${latestOrder.status}", Tổng tiền: ${latestOrder.totals.total.toLocaleString()}đ.\n`;
      }
    }

    // 2. Tìm mã đơn hàng cụ thể trong tin nhắn khách (Regex AST + 8 chữ số)
    const orderIdMatch = userMessage.match(/AST\d{8}/i);
    if (orderIdMatch) {
      const specificOrderId = orderIdMatch[0].toUpperCase();
      const specificOrder = await Order.findOne({ id: specificOrderId });
      if (specificOrder) {
        orderContext += `Thông tin đơn hàng khách đang hỏi (${specificOrderId}): Trạng thái: "${specificOrder.status}", Thanh toán: "${specificOrder.paymentStatus}", Hình thức: "${specificOrder.paymentMethod}", Ngày đặt: ${specificOrder.createdAt.toLocaleString('vi-VN')}, Tổng tiền: ${specificOrder.totals.total.toLocaleString()}đ. Danh sách món: ${specificOrder.items.map(i => `${i.name} (x${i.qty})`).join(", ")}.\n`;
      } else {
        orderContext += `Khách có hỏi về mã đơn ${specificOrderId} nhưng không tìm thấy trong hệ thống.\n`;
      }
    }

    // Chuyển danh sách sản phẩm thành text context
    const productsContext = products.map(p =>
      `- ${p.name}: Giá ${p.price.toLocaleString()}đ, Chip: ${p.chip}, Pin: ${p.battery}, Camera: ${p.camera}, Mô tả: ${p.desc}`
    ).join("\n");

    const systemPrompt = `
      Bạn là "Astera Assistant" - một chuyên gia tư vấn bán hàng thông minh và tận tâm của cửa hàng điện thoại Astera Mobile.
      
      TRI THỨC CỦA BẠN (Dữ liệu thực tế từ MongoDB):
      DANH SÁCH SẢN PHẨM:
      ${productsContext}
      
      THÔNG TIN ĐƠN HÀNG CỐ NGỮ CẢNH:
      ${orderContext || "Không có thông tin đơn hàng cụ thể nào được tìm thấy hoặc khách chưa đăng nhập."}

      NHIỆM VỤ:
      1. Tư vấn sản phẩm dựa TRỰC TIẾP trên danh sách trên. Không tự bịa giá hay cấu hình khác.
      2. So sánh các máy nếu khách yêu cầu. Hãy trình bày dưới dạng bảng HTML nếu cần thiết (sử dụng <table>, <tr>, <td> nhưng style inline gọn gàng).
      3. KIỂM TRA ĐƠN HÀNG: Nếu khách hỏi về trạng thái đơn hàng hoặc cung cấp mã đơn (như AST...), hãy sử dụng "THÔNG TIN ĐƠN HÀNG CỐ NGỮ CẢNH" ở trên để trả lời chính xác. Nếu không thấy đơn, hãy báo khách kiểm tra lại mã hoặc đăng nhập.
      4. Nếu khách hỏi thông tin không có trong danh sách, hãy tìm thông tin trên mạng (kiến thức của bạn) nhưng vẫn ưu tiên sản phẩm tại shop.
      5. Trả lời bằng tiếng Việt, phong cách chuyên nghiệp nhưng thân thiện, sử dụng icon phù hợp.
      6. LUÔN TRẢ VỀ DẠNG VĂN BẢN (có thể chứa HTML nhẹ như <b>, <i>, <br>, <table>).
      7. TỰ ĐỘNG CHUYỂN KHIẾU NẠI: Nếu nội dung của khách hàng mang tính chất than phiền, bực tức, hoặc khiếu nại về dịch vụ/sản phẩm, hãy CHÈN THÊM cụm từ chính xác "[FEEDBACK_DETECTED]" vào CUỐI câu trả lời của bạn, và nói với khách rằng khiếu nại của họ đã được ghi nhận và gửi đến ban quản lý.
    `;

    // Thử gọi Gemini
    let reply = await getGeminiResponse(systemPrompt, userMessage);

    // Xử lý logic Khiếu nại từ AI Chat
    if (reply && reply.includes("[FEEDBACK_DETECTED]")) {
      // Lưu khiếu nại vào DB chạy ngầm (không await)
      try {
        Feedback.create({
          customerName: userEmail ? userEmail.split('@')[0] : "Khách ẩn danh",
          customerEmail: userEmail,
          content: userMessage, // Save user's original message as the feedback content
          source: 'AI Chatbot',
          status: 'Mới' // default
        }).then(saved => {
          emailService.sendFeedbackAckToCustomer(saved).catch(err => console.error(err));
          emailService.sendFeedbackAlertToAdmin(saved).catch(err => console.error(err));
        }).catch(err => console.error("Lỗi tự động lưu feedback ngầm:", err));
      } catch (err) {
        console.error("Lỗi cấu trúc lưu feedback:", err);
      }

      // Xóa tag "[FEEDBACK_DETECTED]" để ẩn với khách hàng
      reply = reply.replace(/\[FEEDBACK_DETECTED\]/gi, "").trim();
    }

    // FALLBACK: Nếu Gemini lỗi, dùng logic cứng như cũ
    if (!reply) {
      console.log("⚠️ Gemini API failed, switched to Fallback Logic.");
      const msg = userMessage.toLowerCase();
      // Logic tìm máy cơ bản
      const match = products.find(p => msg.includes(p.name.toLowerCase()));
      if (match) {
        reply = `<b>📱 ${match.name}</b><br>Giá: ${match.price.toLocaleString()}đ<br>Chip: ${match.chip}<br>Pin: ${match.battery}<br><i>(Lưu ý: Đây là phản hồi tự động vì AI Local của shop đang bảo trì)</i>`;
      } else {
        reply = "Chào bạn! Hiện tại hệ thống AI cao cấp của mình đang bận, mình có thể giúp gì cho bạn về các dòng máy iPhone, Samsung hay đơn hàng không? <i>(Phản hồi tự động)</i>";
      }
    }

    res.json({ reply });

  } catch (error) {
    console.error("Chat error:", error);
    res.status(500).json({ reply: "Lỗi hệ thống khi xử lý Chat." });
  }
});

/* ================= RUN ================= */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server Backend API chạy tại http://localhost:${PORT}`);
});