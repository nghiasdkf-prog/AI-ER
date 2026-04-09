# DỰ ÁN AI-ER

## Giới thiệu
**Chuyên đề phát triển phần mềm** - Đại học Công nghệ Đồng Nai

---

## Thành viên nhóm

| STT | Họ và tên | MSSV | Vai trò | Liên hệ |
|:---:|-----------|:----:|---------|---------|
| 1 | Phạm Trọng Nghĩa| 1721030862 | 
| 2 | Trần Anh Hào | 1721031129 | 
| 3 | Trần Đình Huy | 1721031458 | 
| 4 | Vũ Đình Diệp | 1721030773 | 
---

## 📊 Tiến độ và đóng góp cho dự án

| Tính năng/Công việc | Trạng thái | Deadline | Ghi chú |
|:---:|-----------|---------|---------|
| Tạo repository,src,docs | ✅ Hoàn thành | 20/03/2026 | Đã setup branch protection |
| Viết README.md | ✅ Hoàn thành | 20/03/2026 | Đã thêm thông tin thành viên |
| Viết Báo Cáo Word | ✅ Hoàn thành | 9/4/2026 | Đã xong |
| Thiết kế giao diện | ✅ Hoàn thành | 9/4/2026 | Đã xong |
| Xây dựng database | ✅ Hoàn thành | 9/4/2026 | Đã xong |
| Viết API | ✅ Hoàn thành | 9/4/2026 | Đã xong |
| Kiểm thử | ✅ Hoàn thành| 9/4/2026 | Đã xong |

---

---
# 🚀 Chatbox AI - Setup Guide

## 📌 Yêu cầu trước khi chạy

Cần chuẩn bị:

* Node.js (>= 18)
* MongoDB Atlas account
* Google Gemini API key
* Gmail account (đã bật xác minh 2 bước)
* Sandbox Paypal
---

# 🛠️ Cài đặt dự án

## 1. Clone project

```bash
git clone <your-repo-url>
cd <your-project-folder>
```

## 2. Cài dependencies

```bash
npm install
```

---

# ⚙️ Cấu hình Environment

## 1. Tạo file `.env`

Tạo file `.env` trong thư mục gốc của project.

## 2. MongoDB Atlas

* Truy cập: https://www.mongodb.com/atlas
* Tạo tài khoản
* Tạo cluster
* Vào **Database → Connect → Drivers**
* Copy connection string
* Dán vào `MONGODB_URI`

## 3. Gemini API Key

* Truy cập: https://aistudio.google.com/
* Tạo API key
* Dán vào `GEMINI_API_KEY`

## 4. Gmail App Password

* Vào Google Account
* Bật **Xác minh 2 bước**
* Tìm **App Passwords**
* Tạo mật khẩu ứng dụng
* Google sẽ cấp chuỗi 16 ký tự
* Dán vào `EMAIL_PASS`

## 5. Paypal

* Đăng ký tài khoản Sandbox Paypal
---

# 📄 Ví dụ file `.env` và `index-astera-auth`

```env
MONGODB_URI=mongodb://<db_username>:<db_password>@chatbox.ohhugvk.mongodb.net/?appName=chatbox
JWT_SECRET=supersecretkey
PORT=3000
GEMINI_API_KEY=<YourAPI>

EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=465
EMAIL_USER=<youremail>@gmail.com
EMAIL_PASS=yourapppass
ADMIN_EMAIL=admin@gmail.com
```
```index-astera-auth
Thêm 1 dòng trong Script
<script> src="YourAPIPayPal"></script>
```
---

# ▶️ Chạy project

```bash
npm start
```

Server sẽ chạy tại:

```
http://localhost:3000
```

---

# 🔐 Lưu ý bảo mật

* Không commit file `.env` lên GitHub
* Thêm `.env` vào `.gitignore`

`.gitignore`

```
.env
node_modules
```

---

# 📦 Công nghệ sử dụng

* Node.js
* Express.js
* MongoDB Atlas
* Google Gemini API
* Nodemailer (Gmail SMTP)
* JWT Authentication
* PayPal

---


