const nodemailer = require('nodemailer');

// Lưu trữ cấu hình Ethereal dùng chung nếu cần
let testAccount = null;

async function getTransporter() {
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    // Nếu có khai báo email thật (VD: Gmail SMTP)
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: process.env.EMAIL_PORT || 465,
      secure: process.env.EMAIL_PORT == 465, 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  // Fallback sang Ethereal (dịch vụ test mail)
  if (!testAccount) {
    testAccount = await nodemailer.createTestAccount();
  }
  
  return nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });
}

/**
 * Hàm gửi mail chung, log ra console link preview nếu dùng Ethereal
 */
async function sendMail(mailOptions) {
  try {
    const transporter = await getTransporter();
    const info = await transporter.sendMail({
      from: '"Astera Mobile" <noreply@asteramobile.vn>', // Địa chỉ gửi mặc định
      ...mailOptions
    });

    console.log(`✉️ Sended Mail: ${info.messageId}`);
    
    // In ra link Ethereal để Admin có thể click vào xem thử HTML
    const previewUrl = nodemailer.getTestMessageUrl(info);
    if (previewUrl) {
      console.log('🔗 Preview URL: %s', previewUrl);
    }
    
    return info;
  } catch (error) {
    console.error('Lỗi khi gửi email:', error);
    return null;
  }
}

// 1. Template gửi Khách khi đặt hàng thành công
async function sendOrderConfirmation(orderData) {
  const customerEmail = orderData.customer?.accountEmail || orderData.customer?.name + "@temp.com"; // Xử lý nếu khách k nhập email thì ko gửi
  if (!orderData.customer?.accountEmail && !customerEmail.includes('@')) {
    console.log('Không có email khách hàng để gửi hóa đơn.');
    return;
  }

  const itemsHtml = orderData.items.map(item => `
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #ccc;">${item.name}</td>
      <td style="padding: 10px; border-bottom: 1px solid #ccc; text-align: center;">${item.qty}</td>
      <td style="padding: 10px; border-bottom: 1px solid #ccc; text-align: right;">${item.price.toLocaleString()}đ</td>
    </tr>
  `).join('');

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
      <div style="background-color: #000; color: #fff; padding: 20px; text-align: center;">
        <h1 style="margin: 0; font-size: 24px;">XÁC NHẬN ĐƠN HÀNG</h1>
        <p style="margin: 5px 0 0 0;">Cám ơn bạn đã mua sắm tại Astera Mobile!</p>
      </div>
      <div style="padding: 20px;">
        <p>Xin chào <strong>${orderData.customer?.name || 'Quý khách'}</strong>,</p>
        <p>Đơn hàng <strong>#${orderData.id}</strong> của bạn đã được hệ thống ghi nhận thành công và đang chờ xử lý.</p>
        
        <h3 style="border-bottom: 2px solid #000; padding-bottom: 5px; margin-top: 30px;">CHI TIẾT ĐƠN HÀNG</h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <thead>
            <tr style="background-color: #f5f5f5;">
              <th style="padding: 10px; text-align: left;">Sản phẩm</th>
              <th style="padding: 10px; text-align: center;">SL</th>
              <th style="padding: 10px; text-align: right;">Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHtml}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2" style="padding: 10px; text-align: right; font-weight: bold;">Tạm tính:</td>
              <td style="padding: 10px; text-align: right;">${(orderData.totals?.subtotal || 0).toLocaleString()}đ</td>
            </tr>
            <tr>
              <td colspan="2" style="padding: 10px; text-align: right; font-weight: bold;">Giảm giá:</td>
              <td style="padding: 10px; text-align: right; color: red;">-${(orderData.totals?.discountAmount || 0).toLocaleString()}đ</td>
            </tr>
            <tr>
              <td colspan="2" style="padding: 10px; text-align: right; font-weight: bold; font-size: 18px;">TỔNG CỘNG:</td>
              <td style="padding: 10px; text-align: right; font-weight: bold; font-size: 18px; color: #d9534f;">${(orderData.totals?.total || 0).toLocaleString()}đ</td>
            </tr>
          </tfoot>
        </table>

        <p style="margin-top: 30px; padding: 15px; background: #f0f8ff; border-radius: 8px; text-align: center; border: 1px dashed #007bff;">
          Trạng thái thanh toán: <strong>${orderData.paymentStatus}</strong> (${orderData.paymentMethod})
        </p>
      </div>
      <div style="background-color: #f9f9f9; padding: 15px; text-align: center; font-size: 13px; color: #777;">
        Đây là email tự động, vui lòng không phản hồi lại.<br>
        © 2026 Astera Mobile.
      </div>
    </div>
  `;

  return sendMail({
    to: customerEmail,
    subject: `[Astera M] Xác nhận đơn hàng #${orderData.id}`,
    html: html
  });
}

// 2. Tự động cám ơn và phản hồi Khách khi có Góp ý
async function sendFeedbackAckToCustomer(feedbackData) {
  if (!feedbackData.customerEmail) return; // Nếu khách ẩn danh k để lại email

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
      <div style="background-color: #4CAF50; color: #fff; padding: 20px; text-align: center;">
        <h1 style="margin: 0; font-size: 22px;">CHÚNG TÔI ĐÃ LẮNG NGHE BẠN</h1>
      </div>
      <div style="padding: 20px;">
        <p>Chào <strong>${feedbackData.customerName || 'bạn'}</strong>,</p>
        <p>Astera Mobile rất cám ơn bạn vì đã dành thời gian phản hồi cho chúng tôi. Đội ngũ quản lý đã tiếp nhận được ý kiến của bạn:</p>
        
        <div style="background: #fdf5f5; border-left: 4px solid #f44336; padding: 15px; margin: 20px 0; font-style: italic; color: #555;">
          "${feedbackData.content}"
        </div>

        <p>Bất kỳ sự bất tiện nào bạn gặp phải cũng là bài học quý giá để chúng tôi cải thiện dịch vụ. Quản lý cửa hàng sẽ trực tiếp xử lý vấn đề này và sớm có biện pháp khắc phục.</p>
        <p>Trân trọng,</p>
        <p><strong>Ban Quản trị Astera Mobile</strong></p>
      </div>
    </div>
  `;

  return sendMail({
    to: feedbackData.customerEmail,
    subject: `Cám ơn bạn đã góp ý cho Astera Mobile!`,
    html: html
  });
}

// 3. Email cảnh báo gửi cho quản trị viên (Admin)
async function sendFeedbackAlertToAdmin(feedbackData) {
  const adminEmail = process.env.ADMIN_EMAIL || "admin@asteramobile.vn";
  
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px;">
      <h2 style="color: #d9534f;">⚠️ CÓ KHIẾU NẠI MỚI!</h2>
      <p>Hệ thống vừa ghi nhận một góp ý/khiếu nại mới từ khách.</p>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding:8px; border:1px solid #ccc; width: 30%; background:#f9f9f9;"><strong>Khách hàng:</strong></td><td style="padding:8px; border:1px solid #ccc;">${feedbackData.customerName || 'Ẩn danh'}</td></tr>
        <tr><td style="padding:8px; border:1px solid #ccc; background:#f9f9f9;"><strong>Email:</strong></td><td style="padding:8px; border:1px solid #ccc;">${feedbackData.customerEmail || '--'}</td></tr>
        <tr><td style="padding:8px; border:1px solid #ccc; background:#f9f9f9;"><strong>Nguồn:</strong></td><td style="padding:8px; border:1px solid #ccc;">${feedbackData.source}</td></tr>
        <tr><td style="padding:8px; border:1px solid #ccc; background:#f9f9f9;"><strong>Nội dung:</strong></td><td style="padding:8px; border:1px solid #ccc; color:#c0392b; font-weight:bold;">${feedbackData.content}</td></tr>
      </table>
      <p style="margin-top: 20px;">
        <a href="http://localhost:3000/admin" style="display:inline-block; padding:10px 20px; background:#000; color:#fff; text-decoration:none; border-radius:5px;">Mở Admin Panel xử lý</a>
      </p>
    </div>
  `;

  return sendMail({
    to: adminEmail,
    subject: `[CẢNH BÁO] Có khiếu nại mới từ ${feedbackData.customerName || 'khách hàng'}`,
    html: html
  });
}

// 4. Mẫu email gửi mã OTP kích hoạt
async function sendRegistrationOTP(email, name, otpCode) {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
      <div style="background-color: #000; color: #fff; padding: 20px; text-align: center;">
        <h1 style="margin: 0; font-size: 24px;">XÁC THỰC EMAIL</h1>
        <p style="margin: 5px 0 0 0;">Chào mừng bạn đến với Astera Mobile!</p>
      </div>
      <div style="padding: 20px; text-align: center;">
        <p>Xin chào <strong>${name || 'bạn'}</strong>,</p>
        <p>Cám ơn bạn đã đăng ký tài khoản. Để hoàn tất, vui lòng sử dụng mã xác thực dưới đây:</p>
        
        <div style="margin: 30px auto; padding: 20px; font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #007bff; background: #f0f8ff; border: 2px dashed #007bff; border-radius: 10px; display: inline-block;">
          ${otpCode}
        </div>

        <p style="color: #d9534f; font-size: 14px;">Mã xác thực này sẽ hết hạn trong 15 phút.</p>
        <p style="color: #777; font-size: 14px; margin-top: 20px;">Nếu bạn không yêu cầu mã này, vui lòng bỏ qua email.</p>
      </div>
      <div style="background-color: #f9f9f9; padding: 15px; text-align: center; font-size: 13px; color: #777;">
        Đây là email tự động, vui lòng không phản hồi lại.<br>
        © 2026 Astera Mobile.
      </div>
    </div>
  `;

  return sendMail({
    to: email,
    subject: `[Astera M] Mã xác thực tài khoản của bạn: ${otpCode}`,
    html: html
  });
}

module.exports = {
  sendOrderConfirmation,
  sendFeedbackAckToCustomer,
  sendFeedbackAlertToAdmin,
  sendRegistrationOTP
};
