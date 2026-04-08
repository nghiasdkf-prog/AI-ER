Bạn là Senior Fullstack Developer + UI/UX Designer. Tôi đang xây dựng website bán điện thoại. Hãy nâng cấp hệ thống với đầy đủ chức năng sau:

1. Authentication:

* Người dùng phải đăng nhập trước khi mua hàng
* Nếu chưa đăng nhập → redirect sang trang login
* Có đăng ký, đăng nhập, đăng xuất
* Phân quyền role: user và admin
* Lưu session hoặc JWT
* Hash password (bcrypt)

2. Database:
   Sử dụng MongoDB. Tạo các bảng/collection:

* users (id, username, password, role)
* products (id, name, price, description, image, created_at)
* orders (id, user_id, total, created_at)
* order_items (id, order_id, product_id, quantity)

3. Admin Dashboard:

* Chỉ admin truy cập được /admin
* User thường bị redirect về trang chủ
* Admin có thể:

  * Thêm sản phẩm
  * Sửa sản phẩm
  * Xóa sản phẩm
  * Upload hình ảnh
  * Quản lý giá và mô tả
* Hiển thị bảng sản phẩm dạng table
* Có nút edit/delete
* Modal xác nhận khi xóa

4. Product System:

* Load sản phẩm từ database
* Không dùng dữ liệu hardcode
* Render động
* Hiển thị ảnh, tên, giá, mô tả
* Chỉ admin thấy nút chỉnh sửa

5. Chatbox nâng cấp:

* Giao diện hiện đại, dễ nhìn
* Typing indicator
* Auto scroll
* Lưu lịch sử chat localStorage
* Nút thu nhỏ chatbox
* Gợi ý câu hỏi nhanh
* Avatar user và bot
* Dark/light mode
* Hiển thị loading

6. Security:

* Bảo vệ route admin
* Kiểm tra role trước khi CRUD
* Validate input
* Không cho user thường truy cập admin
* Không cho chỉnh giá âm

7. UI/UX:

* Layout rõ ràng
* Màu sắc dịu mắt
* Responsive mobile
* Button rõ ràng
* Skeleton loading
* Toast notification

8. API:

* GET /products
* POST /products
* PUT /products/:id
* DELETE /products/:id
* POST /login
* POST /register

9. Yêu cầu output:

* Cấu trúc folder
* Schema database
* SQL tạo bảng
* Backend API
* Frontend fetch API
* HTML + CSS + JavaScript
* Chatbox nâng cấp
* Admin dashboard UI

Phong cách:
Đơn giản, hiện đại, dễ dùng cho người mới.
