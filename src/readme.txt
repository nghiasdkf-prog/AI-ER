# ĐỀ XUẤT NÂNG CẤP HỆ THỐNG ASTERA MOBILE

Dưới đây là danh sách các đề xuất nâng cấp hệ thống để biến ứng dụng thành một sản phẩm e-commerce hoàn chỉnh và chuyên nghiệp hơn:

## 1. Tích hợp Thanh toán Trực tuyến (Payment Gateway)
- **Tình trạng hiện tại:** Đang hiển thị "COD" hoặc "Chuyển khoản" dưới dạng văn bản tĩnh.
- **Đề xuất:** Tích hợp API thanh toán thực tế cổng VNPAY, MoMo, hoặc ZaloPay. Khi khách hàng bấm thanh toán, hệ thống sẽ tự động tạo link QR hoặc chuyển hướng sang cổng thanh toán, sau đó webhook tự động cập nhật trạng thái hóa đơn thành "Đã thanh toán".

## 2. Nâng cấp Chatbot AI (AI Assistant Mở rộng)
- **Tình trạng hiện tại:** Chatbot tư vấn, tra cứu tiến độ đơn hàng và ghi nhận khiếu nại rất tốt. Ngữ cảnh (context) hiện đang tính theo từng tin nhắn đơn lẻ.
- **Đề xuất:**
  - *Lưu lịch sử hội thoại vào phiên bản (Session/DB)*: Giúp AI nhớ câu hỏi trước đó để trả lời có sự liên kết chặt chẽ hơn.
  - *Hành động tương tác trực tiếp*: Lập trình để AI có thể hiển thị nút "Thêm vào giỏ" ngay trong cửa sổ chat, người dùng chỉ cần click là mua được hàng do AI tư vấn.

## 3. Hệ thống Email Tự động (Nodemailer)
- **Đề xuất:** Gửi email thông báo tự động (Auto-responder):
  - Gửi email xác nhận kèm hóa đơn chi tiết ngay khi khách đặt hàng thành công.
  - Email tự động thông báo "Đã nhận được khiếu nại" khi khách gửi Feedback.
  - Email báo cáo cho Admin khi có đơn hàng lớn.

## 4. Bảng phân tích Thống kê nâng cao (Charts & Analytics)
- **Tình trạng hiện tại:** Trang Admin hiển thị con số thống kê bằng text tĩnh qua các thẻ `<article>`.
- **Đề xuất:** Tích hợp thư viện Chart.js hoặc ApexCharts để vẽ:
  - Biểu đồ tăng trưởng doanh thu theo ngày/tháng.
  - Biểu đồ top 5 sản phẩm bán chạy nhất.
  - Biểu đồ tròn phân tích lượng người dùng mới / cũ.

## 5. Quản lý Ảnh chuyên nghiệp (Cloud Storage)
- **Tình trạng hiện tại:** Ảnh sản phẩm đang phải bọc dưới dạng SVG tĩnh hoặc nhập link URL ngoài vào.
- **Đề xuất:** Thêm tính năng upload file thực tế vào form `Thêm sản phẩm`. Backend (Nodejs) sẽ tải ảnh đó lên lưu trữ đám mây như Cloudinary hoặc AWS S3 và trả về link ảnh lưu vào database.

## 6. Đánh giá và Bình luận (Review & Rating System)
- **Đề xuất:** 
  - Thêm một bảng `Review` trong MongoDB.
  - Khách hàng (đã đăng nhập và mua hàng thành công) có quyền vào đánh giá số sao và bình luận ảnh thực tế.
  - Chatbot AI tự động tóm tắt đánh giá của những khách trước đó để báo cáo lại cho khách hàng mới nghe.

## 7. Mã giảm giá Động (Coupon & Voucher System)
- **Tình trạng hiện tại:** Coupon tính trên frontend.
- **Đề xuất:** Tạo backend API `/api/coupons`. Admin có thể thiết lập thẻ giảm giá (ví dụ: GIAM50K, freeship), có giới hạn số lần sử dụng và ngày hết hạn. Checkout sẽ tự gọi API để tính giá cuối cùng an toàn trên server.

## 8. Quản lý Profile Khách hàng Chuyên sâu
- **Đề xuất:** Thêm một trang Dashboard dành riêng cho User (không phải Admin) để xem lại: danh sách địa chỉ giao hàng, lịch sử mua hàng theo mốc thời gian, đổi mật khẩu và xem trực tiếp các phản hồi khiếu nại đã được Admin giải quyết.
