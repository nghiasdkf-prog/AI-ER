
const defaultProducts = [
  {
    id: 1,
    name: "iPhone 16 Pro Max",
    brand: "Apple",
    category: "Flagship",
    price: 32990000,
    oldPrice: 34990000,
    rating: 4.9,
    reviews: 284,
    stock: 8,
    sale: 6,
    colors: ["Titan Đen", "Titan Tự Nhiên", "Titan Trắng"],
    memory: "256GB",
    battery: "4685mAh",
    camera: "48MP + 5x Tele",
    screen: "6.9\" LTPO OLED 120Hz",
    chip: "A18 Pro",
    desc: "Mẫu flagship cao cấp với hiệu năng mạnh, camera tele 5x, màn hình LTPO OLED mượt và khung titan sang trọng.",
    theme: ["#121b33", "#7f8cff", "#e9eeff"]
  },
  {
    id: 2,
    name: "Samsung Galaxy S26 Ultra",
    brand: "Samsung",
    category: "Camera",
    price: 30990000,
    oldPrice: 33990000,
    rating: 4.8,
    reviews: 216,
    stock: 12,
    sale: 9,
    colors: ["Xám Titan", "Xanh Ice", "Đen"],
    memory: "512GB",
    battery: "5000mAh",
    camera: "200MP AI Zoom",
    screen: "6.8\" Dynamic AMOLED 2X",
    chip: "Snapdragon 8 Elite",
    desc: "Camera cực mạnh, zoom xa sắc nét, bút S Pen tiện lợi và màn hình lớn phục vụ công việc lẫn giải trí.",
    theme: ["#14203a", "#4cc9f0", "#dff6ff"]
  },
  {
    id: 3,
    name: "Xiaomi 16 Pro",
    brand: "Xiaomi",
    category: "Flagship",
    price: 23990000,
    oldPrice: 25990000,
    rating: 4.7,
    reviews: 191,
    stock: 9,
    sale: 8,
    colors: ["Bạc", "Đen", "Tím"],
    memory: "256GB",
    battery: "5200mAh",
    camera: "Leica 50MP Triple",
    screen: "6.73\" AMOLED 120Hz",
    chip: "Snapdragon 8 Elite",
    desc: "Flagship cân bằng giữa hiệu năng, camera hợp tác Leica, sạc nhanh mạnh và ngoại hình cao cấp.",
    theme: ["#1e1b4b", "#8b5cf6", "#efe9ff"]
  },
  {
    id: 4,
    name: "ASUS ROG Phone 10",
    brand: "ASUS",
    category: "Gaming",
    price: 26990000,
    oldPrice: 28990000,
    rating: 4.8,
    reviews: 145,
    stock: 5,
    sale: 7,
    colors: ["Đen Phantom", "Trắng Storm"],
    memory: "512GB",
    battery: "6000mAh",
    camera: "50MP Sony IMX",
    screen: "6.78\" AMOLED 165Hz",
    chip: "Snapdragon 8 Elite",
    desc: "Dành cho game thủ với màn hình 165Hz, pin lớn, tản nhiệt tốt và hiệu năng cực kỳ ổn định.",
    theme: ["#111827", "#ef4444", "#fee2e2"]
  },
  {
    id: 5,
    name: "vivo X200 Pro",
    brand: "vivo",
    category: "Camera",
    price: 24990000,
    oldPrice: 26990000,
    rating: 4.7,
    reviews: 166,
    stock: 11,
    sale: 7,
    colors: ["Xanh Ocean", "Titan"],
    memory: "256GB",
    battery: "5400mAh",
    camera: "ZEISS 200MP Tele",
    screen: "6.78\" AMOLED 120Hz",
    chip: "Dimensity 9500",
    desc: "Dòng máy thiên về nhiếp ảnh với camera tele mạnh, ảnh chân dung đẹp và trải nghiệm tổng thể mượt mà.",
    theme: ["#083344", "#06b6d4", "#cffafe"]
  },
  {
    id: 6,
    name: "OPPO Reno 15",
    brand: "OPPO",
    category: "Tầm trung",
    price: 12990000,
    oldPrice: 14990000,
    rating: 4.5,
    reviews: 132,
    stock: 14,
    sale: 13,
    colors: ["Hồng Ánh Sao", "Xanh Sương"],
    memory: "256GB",
    battery: "5000mAh",
    camera: "50MP OIS",
    screen: "6.7\" AMOLED 120Hz",
    chip: "Snapdragon 7 Gen",
    desc: "Thiết kế mỏng đẹp, camera chân dung tốt, phù hợp nhu cầu hằng ngày và người dùng trẻ.",
    theme: ["#4c1d95", "#f472b6", "#fce7f3"]
  },
  {
    id: 7,
    name: "realme GT Neo 7",
    brand: "realme",
    category: "Gaming",
    price: 10990000,
    oldPrice: 11990000,
    rating: 4.6,
    reviews: 118,
    stock: 18,
    sale: 8,
    colors: ["Vàng Racing", "Đen"],
    memory: "256GB",
    battery: "5500mAh",
    camera: "50MP Sony",
    screen: "6.74\" AMOLED 144Hz",
    chip: "Dimensity 9400",
    desc: "Hiệu năng mạnh trong tầm giá, màn hình tần số quét cao và pin lớn cho trải nghiệm chơi game lâu dài.",
    theme: ["#1f2937", "#f59e0b", "#fff7d6"]
  },
  {
    id: 8,
    name: "Google Pixel 10",
    brand: "Google",
    category: "Camera",
    price: 21990000,
    oldPrice: 22990000,
    rating: 4.7,
    reviews: 98,
    stock: 4,
    sale: 4,
    colors: ["Obsidian", "Porcelain"],
    memory: "128GB",
    battery: "4700mAh",
    camera: "50MP AI Camera",
    screen: "6.3\" OLED 120Hz",
    chip: "Tensor G5",
    desc: "Thế mạnh xử lý ảnh AI, Android thuần mượt mà, thiết kế tối giản và trải nghiệm camera rất ổn định.",
    theme: ["#111827", "#22c55e", "#dcfce7"]
  },
  {
    id: 9,
    name: "Nothing Phone (4)",
    brand: "Nothing",
    category: "Tầm trung",
    price: 14990000,
    oldPrice: 15990000,
    rating: 4.4,
    reviews: 77,
    stock: 7,
    sale: 6,
    colors: ["Trắng", "Đen"],
    memory: "256GB",
    battery: "4900mAh",
    camera: "50MP Dual",
    screen: "6.7\" OLED 120Hz",
    chip: "Snapdragon 8s",
    desc: "Thiết kế lạ mắt với hệ thống đèn đặc trưng, giao diện tối giản và trải nghiệm khác biệt.",
    theme: ["#1f2937", "#a3a3a3", "#f5f5f5"]
  },
  {
    id: 10,
    name: "Honor Magic 8 Pro",
    brand: "Honor",
    category: "Pin khủng",
    price: 20990000,
    oldPrice: 22990000,
    rating: 4.6,
    reviews: 86,
    stock: 10,
    sale: 9,
    colors: ["Xanh Rêu", "Đen"],
    memory: "256GB",
    battery: "5800mAh",
    camera: "50MP Falcon",
    screen: "6.8\" OLED 120Hz",
    chip: "Snapdragon 8 Elite",
    desc: "Pin dung lượng lớn, tối ưu năng lượng tốt, màn hình đẹp và hiệu năng phù hợp cho cả ngày dài.",
    theme: ["#052e16", "#22c55e", "#dcfce7"]
  },
  {
    id: 11,
    name: "Sony Xperia 1 VII",
    brand: "Sony",
    category: "Camera",
    price: 27990000,
    oldPrice: 29990000,
    rating: 4.5,
    reviews: 54,
    stock: 0,
    sale: 7,
    colors: ["Đen", "Tím"],
    memory: "256GB",
    battery: "5000mAh",
    camera: "Alpha Inspired 48MP",
    screen: "6.5\" 4K OLED 120Hz",
    chip: "Snapdragon 8 Elite",
    desc: "Dành cho người thích quay phim, chụp ảnh và trải nghiệm màn hình chuẩn điện ảnh 4K hiếm có.",
    theme: ["#0f172a", "#9333ea", "#ede9fe"]
  },
  {
    id: 12,
    name: "Samsung Galaxy A76",
    brand: "Samsung",
    category: "Pin khủng",
    price: 9990000,
    oldPrice: 10990000,
    rating: 4.3,
    reviews: 164,
    stock: 25,
    sale: 9,
    colors: ["Xanh Mint", "Bạc", "Đen"],
    memory: "128GB",
    battery: "6000mAh",
    camera: "50MP OIS",
    screen: "6.7\" Super AMOLED 120Hz",
    chip: "Exynos Series",
    desc: "Mẫu tầm trung dễ bán với pin lớn, màn đẹp, chụp ảnh ổn và giá tiếp cận tốt cho số đông.",
    theme: ["#164e63", "#14b8a6", "#d1fae5"]
  }
];

const STORAGE_KEYS = {
  products: "astera-products",
  orders: "astera-orders",
  theme: "astera-theme",
  authUsers: "astera-auth-users",
  authSession: "astera-auth-session"
};

function parseStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    console.warn("Storage parse error:", key, error);
    return fallback;
  }
}

function loadProducts() {
  const stored = parseStorage(STORAGE_KEYS.products, null);
  if (Array.isArray(stored) && stored.length) return stored;
  localStorage.setItem(STORAGE_KEYS.products, JSON.stringify(defaultProducts));
  return JSON.parse(JSON.stringify(defaultProducts));
}

function loadOrders() {
  return parseStorage(STORAGE_KEYS.orders, []);
}

function saveProducts() {
  localStorage.setItem(STORAGE_KEYS.products, JSON.stringify(state.products));
}

function saveOrders() {
  localStorage.setItem(STORAGE_KEYS.orders, JSON.stringify(state.orders));
}


function seedAuthUsers() {
  const existing = parseStorage(STORAGE_KEYS.authUsers, null);
  if (Array.isArray(existing) && existing.length) return existing;

  const defaults = [
    {
      id: "admin-default",
      name: "Quản trị viên Astera",
      email: "admin@astera.vn",
      password: "admin123",
      role: "admin",
      createdAt: new Date().toISOString()
    },
    {
      id: "user-default",
      name: "Khách hàng Astera",
      email: "user@astera.vn",
      password: "user123",
      role: "user",
      createdAt: new Date().toISOString()
    }
  ];

  localStorage.setItem(STORAGE_KEYS.authUsers, JSON.stringify(defaults));
  return defaults;
}

function loadAuthUsers() {
  return parseStorage(STORAGE_KEYS.authUsers, seedAuthUsers());
}

function loadSession() {
  return parseStorage(STORAGE_KEYS.authSession, null);
}

function saveSession(session) {
  localStorage.setItem(STORAGE_KEYS.authSession, JSON.stringify(session));
}

function clearSession() {
  localStorage.removeItem(STORAGE_KEYS.authSession);
}

const state = {
  products: loadProducts(),
  orders: loadOrders(),
  editingProductId: null,
  activeOrderId: null,
  productSearch: "",
  orderSearch: "",
  orderStatus: "all",
  feedbacks: [],
  feedbackStatus: "all",
  theme: localStorage.getItem(STORAGE_KEYS.theme) || "light",
  session: loadSession()
};

const productForm = document.getElementById("productForm");
const productFormTitle = document.getElementById("productFormTitle");
const productTableBody = document.getElementById("productTableBody");
const orderTableBody = document.getElementById("orderTableBody");
const orderDetailPanel = document.getElementById("orderDetailPanel");
const feedbackTableBody = document.getElementById("feedbackTableBody");
const toastContainer = document.getElementById("toastContainer");
const adminProductSearch = document.getElementById("adminProductSearch");
const adminOrderSearch = document.getElementById("adminOrderSearch");
const adminOrderStatusFilter = document.getElementById("adminOrderStatusFilter");
const adminFeedbackStatusFilter = document.getElementById("adminFeedbackStatusFilter");
const themeToggle = document.getElementById("themeToggle");
const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
const siteHeader = document.getElementById("siteHeader");
const adminApp = document.getElementById("adminApp");
const adminAuthGate = document.getElementById("adminAuthGate");
const adminLoginForm = document.getElementById("adminLoginForm");
const adminAuthMessage = document.getElementById("adminAuthMessage");
const adminCurrentSession = document.getElementById("adminCurrentSession");
const adminSessionBtn = document.getElementById("adminSessionBtn");
const adminLogoutBtn = document.getElementById("adminLogoutBtn");
const adminLogoutGateBtn = document.getElementById("adminLogoutGateBtn");

const fields = {
  productId: document.getElementById("productId"),
  name: document.getElementById("productName"),
  brand: document.getElementById("productBrand"),
  category: document.getElementById("productCategory"),
  price: document.getElementById("productPrice"),
  oldPrice: document.getElementById("productOldPrice"),
  sale: document.getElementById("productSale"),
  stock: document.getElementById("productStock"),
  rating: document.getElementById("productRating"),
  reviews: document.getElementById("productReviews"),
  memory: document.getElementById("productMemory"),
  battery: document.getElementById("productBattery"),
  camera: document.getElementById("productCamera"),
  screen: document.getElementById("productScreen"),
  chip: document.getElementById("productChip"),
  colors: document.getElementById("productColors"),
  desc: document.getElementById("productDesc"),
  image: document.getElementById("productImage"),
  theme1: document.getElementById("themeColor1"),
  theme2: document.getElementById("themeColor2"),
  theme3: document.getElementById("themeColor3")
};

function formatPrice(value) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0
  }).format(value || 0);
}

function formatDate(value) {
  if (!value) return "--";
  return new Date(value).toLocaleString("vi-VN");
}

function initTheme() {
  document.body.classList.toggle("dark", state.theme === "dark");
}


function getRoleLabel(role) {
  return role === "admin" ? "Admin" : "User";
}

function renderAdminSessionInfo() {
  if (adminSessionBtn) {
    adminSessionBtn.textContent = state.session
      ? `${state.session.name} • ${getRoleLabel(state.session.role)}`
      : "Chưa đăng nhập";
  }

  if (!adminCurrentSession) return;

  if (!state.session) {
    adminCurrentSession.innerHTML = `
      <div class="empty-state">
        <h3>Chưa có phiên đăng nhập</h3>
        <p class="drawer-empty">Bạn cần đăng nhập bằng tài khoản admin để mở khóa trang quản trị.</p>
      </div>
    `;
    return;
  }

  adminCurrentSession.innerHTML = `
    <div class="account-card-summary">
      <span class="eyebrow">Phiên hiện tại</span>
      <h3>${state.session.name}</h3>
      <div class="account-meta-list">
        <div><span>Email</span><strong>${state.session.email}</strong></div>
        <div><span>Quyền</span><strong>${getRoleLabel(state.session.role)}</strong></div>
      </div>
      <p class="drawer-empty">
        ${state.session.role === "admin"
      ? "Tài khoản này có toàn quyền truy cập khu vực quản trị."
      : "Bạn đang đăng nhập bằng tài khoản user nên hệ thống sẽ từ chối vào admin."}
      </p>
    </div>
  `;
}

async function loadProductsData() {
  try {
    const res = await fetch("http://localhost:3000/api/products");
    if (!res.ok) throw new Error("Fetch failed");
    const fetched = await res.json();
    if (!Array.isArray(fetched) || fetched.length === 0) {
      console.warn("API trả về danh sách rỗng, giữ nguyên dữ liệu hiện tại.");
      return;
    }
    state.products = fetched.map(p => {
      const sanitize = (val) => {
        if (val === undefined || val === null || String(val).toLowerCase() === "undefined" || String(val).toLowerCase() === "null") return "";
        return String(val);
      };
      return {
        ...p,
        id: p._id || p.id,
        memory: sanitize(p.memory),
        chip: sanitize(p.chip),
        brand: sanitize(p.brand) || "Generics",
        stock: p.stock !== undefined ? p.stock : 10,
        sale: p.sale !== undefined ? p.sale : 0,
        oldPrice: p.oldPrice || (p.price + 2000000),
        rating: p.rating !== undefined ? p.rating : 4.5,
        reviews: p.reviews !== undefined ? p.reviews : 0,
        colors: Array.isArray(p.colors) ? p.colors : [],
        theme: p.theme && p.theme.length === 3 ? p.theme : ["#0f766e", "#d4af37", "#ecfeff"]
      };
    });
  } catch (error) {
    console.error("Error loading products:", error);
    if (!state.products || state.products.length === 0) {
      state.products = JSON.parse(JSON.stringify(defaultProducts));
    }
  }
}

async function loadOrdersData() {
  try {
    const res = await fetch("http://localhost:3000/api/orders", {
      headers: { "Authorization": `Bearer ${state.session?.token || ""}` }
    });
    if (!res.ok) throw new Error("Fetch orders failed");
    const fetched = await res.json();
    state.orders = fetched;
  } catch (error) {
    console.error("Error loading orders:", error);
    state.orders = loadOrders();
  }
}

async function loadFeedbacksData() {
  try {
    const res = await fetch("http://localhost:3000/api/feedback", {
      headers: { "Authorization": `Bearer ${state.session?.token || ""}` }
    });
    if (res.ok) {
      state.feedbacks = await res.json();
    }
  } catch (error) {
    console.error("Error loading feedbacks:", error);
  }
}

async function applyAdminAccess(showToastMessage = false) {
  renderAdminSessionInfo();

  const isAdmin = state.session?.role === "admin";
  if (adminLogoutBtn) adminLogoutBtn.style.display = state.session ? "inline-flex" : "none";

  if (isAdmin) {
    if (adminApp) adminApp.style.display = "block";
    if (adminAuthGate) adminAuthGate.style.display = "none";

    await loadProductsData();
    await loadOrdersData();
    await loadFeedbacksData();
    resetProductForm();
    renderAll();
    // Kích hoạt reveal animation cho tất cả elements trong adminApp
    setTimeout(() => {
      document.querySelectorAll("#adminApp .reveal").forEach(el => el.classList.add("visible"));
    }, 50);
    if (showToastMessage) showToast("Đăng nhập admin thành công.", "success");
    return;
  }

  if (adminApp) adminApp.style.display = "none";
  if (adminAuthGate) adminAuthGate.style.display = "block";

  if (adminAuthMessage) {
    adminAuthMessage.textContent = state.session?.role === "user"
      ? "Bạn đã đăng nhập bằng tài khoản user. Tài khoản này không có quyền vào trang admin."
      : "Đăng nhập bằng tài khoản admin để quản lý sản phẩm và hóa đơn.";
  }

  if (showToastMessage && state.session?.role === "user") {
    showToast("Tài khoản user không có quyền vào trang admin.", "error");
  }
}

async function handleAdminLogin(event) {
  event.preventDefault();

  const email = String(document.getElementById("adminLoginEmail")?.value || "").trim().toLowerCase();
  const password = String(document.getElementById("adminLoginPassword")?.value || "");

  if (!email || !password) {
    showToast("Vui lòng nhập email và mật khẩu.", "error");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();

    if (!response.ok) {
      showToast(data.message || "Sai email hoặc mật khẩu.", "error");
      return;
    }

    state.session = {
      id: data.user.id,
      name: data.user.username,
      email: data.user.email,
      role: data.user.role,
      token: data.token
    };
    saveSession(state.session);
    applyAdminAccess(true);
  } catch (error) {
    showToast("Lỗi kết nối máy chủ.", "error");
  }
}

function handleAdminLogout() {
  clearSession();
  state.session = null;
  if (adminLoginForm) adminLoginForm.reset();
  applyAdminAccess();
  showToast("Đã đăng xuất khỏi khu vực quản trị.", "success");
}

function buildPhoneSvg(product) {
  if (product.image && product.image.trim() !== '') return product.image;
  const theme = Array.isArray(product.theme) && product.theme.length === 3
    ? product.theme
    : ["#0f766e", "#d4af37", "#ecfeff"];
  const [c1, c2, c3] = theme;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 420">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${c1}"/>
          <stop offset="50%" stop-color="${c2}"/>
          <stop offset="100%" stop-color="${c3}"/>
        </linearGradient>
      </defs>
      <rect width="320" height="420" rx="44" fill="url(#g)"/>
      <rect x="22" y="18" width="276" height="384" rx="42" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.28)"/>
      <rect x="44" y="20" width="232" height="24" rx="12" fill="rgba(0,0,0,0.24)"/>
      <circle cx="250" cy="112" r="18" fill="rgba(255,255,255,0.14)"/>
      <circle cx="216" cy="84" r="13" fill="rgba(255,255,255,0.12)"/>
      <circle cx="84" cy="334" r="136" fill="rgba(255,255,255,0.16)"/>
      <text x="36" y="360" fill="white" font-size="19" font-family="Arial" font-weight="700">${product.brand}</text>
      <text x="36" y="388" fill="rgba(255,255,255,0.92)" font-size="14" font-family="Arial">${product.memory || ""}</text>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  toastContainer.appendChild(toast);
  setTimeout(() => toast.remove(), 2600);
}

function getProductList() {
  const keyword = state.productSearch.trim().toLowerCase();
  if (!keyword) return [...state.products];
  return state.products.filter(product =>
    [product.name, product.brand, product.category, product.chip]
      .join(" ")
      .toLowerCase()
      .includes(keyword)
  );
}

function getOrderList() {
  const keyword = state.orderSearch.trim().toLowerCase();
  return [...state.orders]
    .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0))
    .filter(order => {
      const matchKeyword = !keyword || [
        order.id,
        order.customer?.fullName,
        order.customer?.phone,
        order.customer?.email
      ].join(" ").toLowerCase().includes(keyword);
      const matchStatus = state.orderStatus === "all" || order.status === state.orderStatus;
      return matchKeyword && matchStatus;
    });
}

function renderStats() {
  const productCount = state.products.length;
  const inStock = state.products.filter(item => Number(item.stock) > 0).length;
  const orderCount = state.orders.length;
  const revenue = state.orders
    .filter(order => order.status !== "Đã hủy")
    .reduce((sum, order) => sum + Number(order.totals?.total || 0), 0);

  document.getElementById("statProducts").textContent = productCount;
  document.getElementById("statInStock").textContent = inStock;
  document.getElementById("statOrders").textContent = orderCount;
  document.getElementById("statRevenue").textContent = formatPrice(revenue);
}

function renderProductsTable() {
  const list = getProductList();

  if (!list.length) {
    productTableBody.innerHTML = `<tr class="empty-row"><td colspan="6">Không tìm thấy sản phẩm phù hợp.</td></tr>`;
    return;
  }

  productTableBody.innerHTML = list.map(product => {
    const stockClass = product.stock > 10 ? "good" : product.stock > 0 ? "low" : "out";
    const stockLabel = product.stock > 10 ? "Kho tốt" : product.stock > 0 ? "Sắp hết" : "Hết hàng";
    
    // Extra safety for memory and chip strings
    const mem = product.memory && String(product.memory).toLowerCase() !== "undefined" ? product.memory : "";
    const memoryText = mem ? ` • ${mem}` : "";
    const chipText = product.chip && String(product.chip).toLowerCase() !== "undefined" ? product.chip : "";
    
    return `
      <tr>
        <td>
          <div class="admin-product-cell">
            <div class="admin-product-thumb" style="background: linear-gradient(135deg, ${product.theme?.[0] || "#0f766e"}, ${product.theme?.[1] || "#d4af37"}, ${product.theme?.[2] || "#ecfeff"});">
              <img src="${product.image || buildPhoneSvg(product)}" alt="${product.name}" />
            </div>
            <div class="product-cell-info">
              <strong>${product.name}</strong>
              <div class="mini-meta">${product.brand}${memoryText}</div>
              ${chipText ? `<div class="mini-meta">${chipText}</div>` : ""}
            </div>
          </div>
        </td>
        <td><span class="category-badge">${product.category}</span></td>
        <td>
          <div class="price-cell-main">${formatPrice(product.price)}</div>
          <div class="price-cell-old">${formatPrice(product.oldPrice)}</div>
        </td>
        <td><span class="stock-badge ${stockClass}">${product.stock} • ${stockLabel}</span></td>
        <td>
          <strong style="font-size:0.95rem">${product.rating} ★</strong>
          <div class="mini-meta">${product.reviews} đánh giá</div>
        </td>
        <td>
          <div class="table-actions">
            <button class="table-btn" onclick="editProduct('${product._id || product.id}')">✏️ Sửa</button>
            <button class="table-btn danger" onclick="deleteProduct('${product._id || product.id}')">🗑️ Xóa</button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

function renderOrdersTable() {
  const list = getOrderList();

  if (!list.length) {
    orderTableBody.innerHTML = `<tr class="empty-row"><td colspan="7">Chưa có hóa đơn nào phù hợp bộ lọc.</td></tr>`;
    renderOrderDetail(null);
    return;
  }

  orderTableBody.innerHTML = list.map(order => {
    const paymentClass = order.paymentStatus === "Đã thanh toán" ? "paid" : order.status === "Đã hủy" ? "cancel" : "pending";
    return `
      <tr>
        <td>
          <strong>${order.id}</strong>
          <div class="order-subtext">${order.items?.length || 0} sản phẩm</div>
        </td>
        <td>
          <strong>${order.customer?.fullName || "--"}</strong>
          <div class="order-subtext">${order.customer?.phone || "--"}</div>
        </td>
        <td><strong>${formatPrice(order.totals?.total || 0)}</strong></td>
        <td>
          <div class="payment-badge ${paymentClass}">${mapPaymentMethod(order.paymentMethod)}</div>
          <div class="order-subtext">${order.paymentStatus || "Chờ xác nhận"}</div>
        </td>
        <td>
          <select class="inline-select" onchange="updateOrderStatus('${order.id}', this.value)">
            ${["Mới", "Đang xử lý", "Đã xác nhận", "Đang giao", "Hoàn tất", "Đã hủy"].map(status => `<option value="${status}" ${status === order.status ? "selected" : ""}>${status}</option>`).join("")}
          </select>
        </td>
        <td>${formatDate(order.createdAt)}</td>
        <td>
          <div class="table-actions">
            <button class="table-btn" onclick="selectOrder('${order.id}')">Chi tiết</button>
            <button class="table-btn danger" onclick="deleteOrder('${order.id}')">Xóa</button>
          </div>
        </td>
      </tr>
    `;
  }).join("");

  const exists = list.some(order => order.id === state.activeOrderId);
  renderOrderDetail(exists ? state.activeOrderId : list[0].id);
}

function renderOrderDetail(orderId) {
  const order = state.orders.find(item => item.id === orderId);
  state.activeOrderId = order ? order.id : null;

  if (!order) {
    orderDetailPanel.innerHTML = `
      <div class="empty-state">
        <h3>Chưa chọn hóa đơn</h3>
        <p class="drawer-empty">Nhấn vào nút xem chi tiết để xem đầy đủ thông tin đơn hàng.</p>
      </div>
    `;
    return;
  }

  orderDetailPanel.innerHTML = `
    <div class="detail-block">
      <div class="panel-head">
        <div>
          <span class="eyebrow">Mã đơn ${order.id}</span>
          <h3 style="margin: 12px 0 0;">${order.customer?.fullName || "--"}</h3>
        </div>
        <div>
          <div class="status-badge">${order.status}</div>
          <div class="status-note" style="margin-top: 8px;">${formatDate(order.createdAt)}</div>
        </div>
      </div>
      <div class="detail-grid">
        <div>
          <strong>Số điện thoại</strong>
          <span>${order.customer?.phone || "--"}</span>
        </div>
        <div>
          <strong>Email</strong>
          <span>${order.customer?.email || "--"}</span>
        </div>
        <div>
          <strong>Tỉnh / Thành phố</strong>
          <span>${order.customer?.city || "--"}</span>
        </div>
        <div>
          <strong>Địa chỉ</strong>
          <span>${order.customer?.address || "--"}</span>
        </div>
        <div>
          <strong>Vận chuyển</strong>
          <span>${mapShippingMethod(order.shippingMethod)}</span>
        </div>
        <div>
          <strong>Thanh toán</strong>
          <span>${mapPaymentMethod(order.paymentMethod)} • ${order.paymentStatus || "Chờ xác nhận"}</span>
        </div>
      </div>
      <div style="margin-top: 14px;">
        <strong>Ghi chú</strong>
        <p class="drawer-empty">${order.customer?.note || "Không có ghi chú."}</p>
      </div>
    </div>

    <div class="detail-block">
      <h4 style="margin: 0 0 14px;">Sản phẩm trong đơn</h4>
      <div class="order-items-list">
        ${(order.items || []).map(item => `
          <div class="order-item-row">
            <div>
              <strong>${item.name}</strong>
              <div class="mini-meta">${item.brand} • ${item.memory || ""} • SL: ${item.qty}</div>
            </div>
            <div style="text-align: right;">
              <div class="mini-meta">${formatPrice(item.price)} x ${item.qty}</div>
              <strong>${formatPrice((item.price || 0) * (item.qty || 0))}</strong>
            </div>
          </div>
        `).join("") || "<p class='drawer-empty'>Đơn chưa có chi tiết sản phẩm.</p>"}
      </div>
    </div>

    <div class="detail-block">
      <h4 style="margin: 0 0 14px;">Tổng kết thanh toán</h4>
      <div class="detail-grid">
        <div>
          <strong>Tạm tính</strong>
          <span>${formatPrice(order.totals?.subtotal || 0)}</span>
        </div>
        <div>
          <strong>Giảm giá</strong>
          <span>${formatPrice(order.totals?.discount || 0)}</span>
        </div>
        <div>
          <strong>Phí vận chuyển</strong>
          <span>${formatPrice(order.totals?.shipping || 0)}</span>
        </div>
        <div>
          <strong>Tổng thanh toán</strong>
          <span class="amount-strong">${formatPrice(order.totals?.total || 0)}</span>
        </div>
      </div>
      <div style="margin-top: 14px;">
        <strong>Mã ưu đãi</strong>
        <p class="drawer-empty">${order.coupon || "Không sử dụng"}</p>
      </div>
    </div>
  `;
}

function mapPaymentMethod(method) {
  const map = {
    cod: "COD",
    bank: "Chuyển khoản",
    card: "Thẻ",
    installment: "Trả góp 0%"
  };
  return map[method] || "Khác";
}

function mapShippingMethod(method) {
  const map = {
    standard: "Giao tiêu chuẩn",
    express: "Giao hỏa tốc",
    pickup: "Nhận tại showroom"
  };
  return map[method] || "Khác";
}

function resetProductForm() {
  productForm.reset();
  fields.productId.value = "";
  if (fields.image) fields.image.value = "";
  fields.theme1.value = "#0f766e";
  fields.theme2.value = "#d4af37";
  fields.theme3.value = "#ecfeff";
  state.editingProductId = null;
  productFormTitle.textContent = "Thêm sản phẩm mới";
  document.getElementById("saveProductBtn").textContent = "Lưu sản phẩm";
}

async function handleProductSubmit(event) {
  event.preventDefault();

  const product = {
    name: fields.name.value.trim(),
    brand: fields.brand.value.trim(),
    category: fields.category.value,
    price: Number(fields.price.value),
    oldPrice: Number(fields.oldPrice.value),
    rating: Number(fields.rating.value),
    reviews: Number(fields.reviews.value),
    stock: Number(fields.stock.value),
    sale: Number(fields.sale.value),
    colors: fields.colors.value.split(",").map(item => item.trim()).filter(Boolean),
    memory: fields.memory.value.trim(),
    battery: fields.battery.value.trim(),
    camera: fields.camera.value.trim(),
    screen: fields.screen.value.trim(),
    chip: fields.chip.value.trim(),
    desc: fields.desc.value.trim(),
    image: fields.image.value.trim(),
    theme: [fields.theme1.value, fields.theme2.value, fields.theme3.value]
  };

  if (!product.name || !product.brand || !product.category) {
    showToast("Vui lòng nhập đầy đủ thông tin sản phẩm.", "error");
    return;
  }

  try {
    let url = "http://localhost:3000/api/products";
    let method = "POST";

    if (state.editingProductId) {
      url = `http://localhost:3000/api/products/${state.editingProductId}`;
      method = "PUT";
    }

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${state.session.token}`
      },
      body: JSON.stringify(product)
    });

    if (!response.ok) {
      showToast("Lỗi khi cập nhật/thêm sản phẩm.", "error");
      return;
    }

    showToast(state.editingProductId ? "Đã cập nhật sản phẩm." : "Đã thêm sản phẩm mới.", "success");
    await loadProductsData();
    renderAll();
    resetProductForm();
  } catch (error) {
    showToast("Lỗi kết nối máy chủ.", "error");
  }
}

function editProduct(productId) {
  const product = state.products.find(item => item._id === productId || item.id === productId || String(item._id) === String(productId));
  if (!product) {
    console.error("Edit: Product not found", productId);
    return;
  }

  // Use the database _id if available for future PUT/DELETE
  state.editingProductId = product._id || product.id;
  
  fields.productId.value = product.id; 
  fields.name.value = product.name || "";
  fields.brand.value = product.brand || "";
  fields.category.value = product.category || "Flagship";
  fields.price.value = product.price || 0;
  fields.oldPrice.value = product.oldPrice || 0;
  fields.sale.value = product.sale ?? 0;
  fields.stock.value = product.stock ?? 0;
  fields.rating.value = product.rating ?? 4.5;
  fields.reviews.value = product.reviews ?? 0;
  fields.memory.value = product.memory || "";
  fields.battery.value = product.battery || "";
  fields.camera.value = product.camera || "";
  fields.screen.value = product.screen || "";
  fields.chip.value = product.chip || "";
  fields.colors.value = Array.isArray(product.colors) ? product.colors.join(", ") : "";
  fields.desc.value = product.desc || "";
  if (fields.image) fields.image.value = product.image || "";
  
  fields.theme1.value = product.theme?.[0] || "#0f766e";
  fields.theme2.value = product.theme?.[1] || "#d4af37";
  fields.theme3.value = product.theme?.[2] || "#ecfeff";

  productFormTitle.textContent = "Chỉnh sửa sản phẩm";
  document.getElementById("saveProductBtn").textContent = "Cập nhật sản phẩm";
  window.scrollTo({ top: document.getElementById("products").offsetTop - 70, behavior: "smooth" });
}

async function deleteProduct(productId) {
  console.log("Attempting to delete product with ID:", productId);
  const product = state.products.find(item => item._id === productId || item.id === productId);
  if (!product) {
    console.error("Product not found in state for ID:", productId);
    return;
  }
  
  if (!confirm(`Xóa sản phẩm "${product.name}"?`)) return;

  try {
    const targetId = product._id || product.id;
    console.log("Sending DELETE request for ID:", targetId);

    const response = await fetch(`http://localhost:3000/api/products/${targetId}`, {
      method: "DELETE",
      headers: { 
        "Authorization": `Bearer ${state.session?.token || ""}`,
        "Content-Type": "application/json"
      }
    });

    console.log("Delete response status:", response.status);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Delete failed:", errorData);
      showToast(errorData.message || "Lỗi khi xóa sản phẩm.", "error");
      return;
    }

    showToast("Đã xóa sản phẩm thành công.", "success");
    await loadProductsData();
    renderAll();
    if (state.editingProductId === productId || state.editingProductId === product._id) {
      resetProductForm();
    }
  } catch (error) {
    console.error("Network error during delete:", error);
    showToast("Lỗi kết nối máy chủ.", "error");
  }
}

function selectOrder(orderId) {
  renderOrderDetail(orderId);
  window.scrollTo({ top: document.getElementById("orders").offsetTop - 70, behavior: "smooth" });
}

async function updateOrderStatus(orderId, nextStatus) {
  const order = state.orders.find(item => item.id === orderId);
  if (!order) {
    showToast("Không tìm thấy đơn hàng.", "error");
    return;
  }

  const paymentStatus = nextStatus === "Hoàn tất"
    ? "Đã thanh toán"
    : nextStatus === "Đã hủy"
      ? "Đã hủy"
      : order.paymentStatus || "Chờ xác nhận";

  try {
    const response = await fetch(`http://localhost:3000/api/orders/${orderId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${state.session?.token || ""}`
      },
      body: JSON.stringify({ status: nextStatus, paymentStatus })
    });
    
    if (response.ok) {
      showToast(`Đã cập nhật trạng thái: ${nextStatus}`, "success");
    } else {
      showToast("Lỗi khi cập nhật trên server, đã lưu tạm local.", "warning");
    }
  } catch (err) {
    console.warn("Server offline, saving locally only.");
  }

  // Luôn cập nhật UI và local storage
  state.orders = state.orders.map(o =>
    o.id === orderId ? { ...o, status: nextStatus, paymentStatus } : o
  );
  saveOrders();
  renderAll();
}

async function deleteOrder(orderId) {
  const order = state.orders.find(item => item.id === orderId);
  if (!order) return;
  if (!confirm(`Xóa hóa đơn ${order.id}?`)) return;

  try {
    const response = await fetch(`http://localhost:3000/api/orders/${orderId}`, {
      method: "DELETE",
      headers: { "Authorization": `Bearer ${state.session?.token || ""}` }
    });
    if (response.ok) {
      showToast("Đã xóa hóa đơn thành công.", "success");
    }
  } catch (err) {
    console.warn("Server offline, deleted locally only.");
  }

  // Luôn cập nhật UI và local storage
  state.orders = state.orders.filter(item => item.id !== orderId);
  saveOrders();
  renderAll();
}

function renderAll() {
  renderStats();
  renderProductsTable();
  renderOrdersTable();
  renderFeedbacksTable();
}

function renderFeedbacksTable() {
  if (!feedbackTableBody) return;
  const list = state.feedbacks.filter(fb => state.feedbackStatus === "all" || fb.status === state.feedbackStatus);

  if (!list.length) {
    feedbackTableBody.innerHTML = `<tr class="empty-row"><td colspan="6">Không có góp ý nào.</td></tr>`;
    return;
  }

  feedbackTableBody.innerHTML = list.map(fb => {
    const statusClass = fb.status === 'Đã xử lý' ? 'paid' : 'pending';
    return `
      <tr>
        <td>
          <strong>${fb.customerName}</strong>
          <div class="order-subtext">${fb.customerEmail || "--"}</div>
        </td>
        <td style="max-width: 300px; white-space: normal;">${fb.content}</td>
        <td><span class="category-badge">${fb.source}</span></td>
        <td><span class="payment-badge ${statusClass}">${fb.status}</span></td>
        <td>${formatDate(fb.createdAt)}</td>
        <td>
          <div class="table-actions">
            ${fb.status === 'Mới' ? `<button class="table-btn" onclick="resolveFeedback('${fb._id}')">✓ Xử lý</button>` : ''}
            <button class="table-btn danger" onclick="deleteFeedback('${fb._id}')">Xóa</button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

async function resolveFeedback(id) {
  try {
    const response = await fetch(`http://localhost:3000/api/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${state.session.token}`
      },
      body: JSON.stringify({ status: "Đã xử lý" })
    });
    if (response.ok) {
      state.feedbacks = state.feedbacks.map(f => f._id === id ? { ...f, status: "Đã xử lý" } : f);
      renderFeedbacksTable();
      showToast("Đã đánh dấu xử lý góp ý.", "success");
    }
  } catch (err) {
    showToast("Lỗi cập nhật góp ý.", "error");
  }
}

async function deleteFeedback(id) {
  if (!confirm("Bạn có chắc chắn muốn xóa góp ý này?")) return;
  try {
    const response = await fetch(`http://localhost:3000/api/feedback/${id}`, {
      method: "DELETE",
      headers: { "Authorization": `Bearer ${state.session.token}` }
    });
    if (response.ok) {
      state.feedbacks = state.feedbacks.filter(f => f._id !== id);
      renderFeedbacksTable();
      showToast("Đã xóa góp ý.", "success");
    }
  } catch (err) {
    showToast("Lỗi xóa góp ý.", "error");
  }
}

window.editProduct = editProduct;
window.deleteProduct = deleteProduct;
window.selectOrder = selectOrder;
window.updateOrderStatus = updateOrderStatus;
window.deleteOrder = deleteOrder;
window.resolveFeedback = resolveFeedback;
window.deleteFeedback = deleteFeedback;

productForm.addEventListener("submit", handleProductSubmit);
document.getElementById("resetProductFormBtn").addEventListener("click", resetProductForm);
document.getElementById("cancelEditBtn").addEventListener("click", resetProductForm);

adminProductSearch.addEventListener("input", (e) => {
  state.productSearch = e.target.value;
  renderProductsTable();
});

adminOrderSearch.addEventListener("input", (e) => {
  state.orderSearch = e.target.value;
  renderOrdersTable();
});

adminOrderStatusFilter.addEventListener("change", (e) => {
  state.orderStatus = e.target.value;
  renderOrdersTable();
});

adminFeedbackStatusFilter?.addEventListener("change", (e) => {
  state.feedbackStatus = e.target.value;
  renderFeedbacksTable();
});

adminLoginForm?.addEventListener("submit", handleAdminLogin);
adminLogoutBtn?.addEventListener("click", handleAdminLogout);
adminLogoutGateBtn?.addEventListener("click", handleAdminLogout);

themeToggle.addEventListener("click", () => {
  state.theme = state.theme === "light" ? "dark" : "light";
  localStorage.setItem(STORAGE_KEYS.theme, state.theme);
  initTheme();
});

menuBtn.addEventListener("click", () => {
  mainNav.classList.toggle("show");
});

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => mainNav.classList.remove("show"));
});

window.addEventListener("scroll", () => {
  siteHeader.classList.toggle("scrolled", window.scrollY > 10);
});

seedAuthUsers();
initTheme();
applyAdminAccess();
