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
  cart: "astera-cart",
  favorites: "astera-favorites",
  theme: "astera-theme",
  orders: "astera-orders",
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

function saveProducts() {
  localStorage.setItem(STORAGE_KEYS.products, JSON.stringify(products));
}

function loadOrders() {
  return parseStorage(STORAGE_KEYS.orders, []);
}

function saveOrders(orders) {
  localStorage.setItem(STORAGE_KEYS.orders, JSON.stringify(orders));
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

function saveAuthUsers(users) {
  localStorage.setItem(STORAGE_KEYS.authUsers, JSON.stringify(users));
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

let products = loadProducts();

const state = {
  category: "Tất cả",
  brand: "Tất cả",
  search: "",
  sort: "popular",
  priceMax: 35000000,
  saleOnly: false,
  stockOnly: true,
  cart: parseStorage(STORAGE_KEYS.cart, []),
  favorites: parseStorage(STORAGE_KEYS.favorites, []),
  theme: localStorage.getItem(STORAGE_KEYS.theme) || "light",
  shippingMethod: "standard",
  paymentMethod: "cod",
  coupon: "",
  session: loadSession()
};

const productGrid = document.getElementById("productGrid");
const resultCount = document.getElementById("resultCount");
const searchInput = document.getElementById("searchInput");
const brandFilter = document.getElementById("brandFilter");
const sortFilter = document.getElementById("sortFilter");
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");
const saleOnly = document.getElementById("saleOnly");
const stockOnly = document.getElementById("stockOnly");
const categoryTabs = document.getElementById("categoryTabs");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");
const cartCount = document.getElementById("cartCount");
const favoritesCount = document.getElementById("favoritesCount");
const cartItems = document.getElementById("cartItems");
const favoriteItems = document.getElementById("favoriteItems");
const cartTotal = document.getElementById("cartTotal");
const cartDrawer = document.getElementById("cartDrawer");
const favoritesDrawer = document.getElementById("favoritesDrawer");
const overlay = document.getElementById("overlay");
const quickViewModal = document.getElementById("quickViewModal");
const checkoutModal = document.getElementById("checkoutModal");
const modalBody = document.getElementById("modalBody");
const toastContainer = document.getElementById("toastContainer");
const checkoutForm = document.getElementById("checkoutForm");
const checkoutSummaryItems = document.getElementById("checkoutSummaryItems");
const checkoutSubtotal = document.getElementById("checkoutSubtotal");
const checkoutDiscount = document.getElementById("checkoutDiscount");
const checkoutShipping = document.getElementById("checkoutShipping");
const checkoutGrandTotal = document.getElementById("checkoutGrandTotal");
const couponCodeInput = document.getElementById("couponCode");
const couponHint = document.getElementById("couponHint");
const openCheckoutBtn = document.getElementById("openCheckoutBtn");
const placeOrderBtn = document.getElementById("placeOrderBtn");
const siteHeader = document.getElementById("siteHeader");
const mainNav = document.getElementById("mainNav");
const menuBtn = document.getElementById("menuBtn");
const themeToggle = document.getElementById("themeToggle");
const accountBtn = document.getElementById("accountBtn");
const authModal = document.getElementById("authModal");
const closeAuthBtn = document.getElementById("closeAuthBtn");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const logoutBtn = document.getElementById("logoutBtn");
const accountSummary = document.getElementById("accountSummary");
const accountAdminLink = document.getElementById("accountAdminLink");
const changePasswordForm = document.getElementById("changePasswordForm");
const authTabButtons = document.querySelectorAll(".auth-tab");
const authPanels = {
  login: document.getElementById("authLoginPanel"),
  register: document.getElementById("authRegisterPanel"),
  account: document.getElementById("authAccountPanel")
};

function formatPrice(value) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0
  }).format(value);
}

function saveState() {
  localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(state.cart));
  localStorage.setItem(STORAGE_KEYS.favorites, JSON.stringify(state.favorites));
  localStorage.setItem(STORAGE_KEYS.theme, state.theme);
}


function getRoleLabel(role) {
  return role === "admin" ? "Admin" : "User";
}

function setAuthTab(tab) {
  authTabButtons.forEach(button => {
    button.classList.toggle("active", button.dataset.authTab === tab);
  });

  Object.entries(authPanels).forEach(([key, panel]) => {
    if (panel) panel.classList.toggle("active", key === tab);
  });
}

function renderAccountState() {
  const session = state.session;

  if (accountBtn) {
    accountBtn.innerHTML = session
      ? `👤 ${session.name.split(" ")[0]} <span class="account-role">${getRoleLabel(session.role)}</span>`
      : `Tài khoản`;
  }

  if (!accountSummary) return;

  if (!session) {
    accountSummary.innerHTML = `
      <div class="empty-state">
        <h3>Chưa đăng nhập</h3>
        <p class="drawer-empty">Đăng nhập để lưu trải nghiệm mua hàng. Chỉ tài khoản admin mới có thể vào trang quản trị.</p>
      </div>
    `;
    if (accountAdminLink) {
      accountAdminLink.classList.add("disabled-link");
      accountAdminLink.setAttribute("aria-disabled", "true");
    }
    return;
  }

  accountSummary.innerHTML = `
    <div class="account-card-summary">
      <span class="eyebrow">Phiên hiện tại</span>
      <h3>${session.name}</h3>
      <div class="account-meta-list">
        <div><span>Email</span><strong>${session.email}</strong></div>
        <div><span>Quyền</span><strong>${getRoleLabel(session.role)}</strong></div>
      </div>
      <p class="drawer-empty">
        ${session.role === "admin"
      ? "Tài khoản này có thể truy cập trang quản trị sản phẩm và hóa đơn."
      : "Tài khoản user chỉ dùng để mua hàng và theo dõi đơn. Truy cập admin sẽ bị từ chối."}
      </p>
    </div>
  `;

  if (accountAdminLink) {
    if (session.role === "admin") {
      accountAdminLink.classList.remove("disabled-link");
      accountAdminLink.removeAttribute("aria-disabled");
    } else {
      accountAdminLink.classList.add("disabled-link");
      accountAdminLink.setAttribute("aria-disabled", "true");
    }
  }
}

function openAuthModal(tab) {
  if (!authModal) return;
  const targetTab = tab || (state.session ? "account" : "login");
  closePanels();
  renderAccountState();
  setAuthTab(targetTab);
  overlay.classList.add("show");
  authModal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function prefillCheckoutFromSession() {
  if (!checkoutForm || !state.session) return;
  const fill = (id, value) => {
    const element = document.getElementById(id);
    if (element && !String(element.value || "").trim()) {
      element.value = value || "";
    }
  };

  fill("fullName", state.session.name || "");
  fill("email", state.session.email || "");
}

function handleLogin(event) {
  event.preventDefault();
  const email = String(document.getElementById("loginEmail")?.value || "").trim().toLowerCase();
  const password = String(document.getElementById("loginPassword")?.value || "");

  if (!email || !password) {
    showToast("Vui lòng nhập email và mật khẩu.", "error");
    return;
  }

  const user = loadAuthUsers().find(item => item.email.toLowerCase() === email && item.password === password);
  if (!user) {
    showToast("Sai email hoặc mật khẩu.", "error");
    return;
  }

  state.session = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role
  };
  saveSession(state.session);
  renderAccountState();
  prefillCheckoutFromSession();
  setAuthTab("account");
  showToast(
    user.role === "admin"
      ? "Đăng nhập admin thành công. Bạn có thể vào trang quản trị."
      : "Đăng nhập user thành công. Tài khoản này không có quyền vào admin.",
    "success"
  );
}

function handleRegister(event) {
  event.preventDefault();
  const name = String(document.getElementById("registerName")?.value || "").trim();
  const email = String(document.getElementById("registerEmail")?.value || "").trim().toLowerCase();
  const password = String(document.getElementById("registerPassword")?.value || "");
  const confirmPassword = String(document.getElementById("registerConfirmPassword")?.value || "");

  if (!name || !email || !password || !confirmPassword) {
    showToast("Vui lòng nhập đầy đủ thông tin đăng ký.", "error");
    return;
  }

  if (password.length < 6) {
    showToast("Mật khẩu cần ít nhất 6 ký tự.", "error");
    return;
  }

  if (password !== confirmPassword) {
    showToast("Mật khẩu xác nhận chưa khớp.", "error");
    return;
  }

  const users = loadAuthUsers();
  if (users.some(item => item.email.toLowerCase() === email)) {
    showToast("Email này đã tồn tại.", "error");
    return;
  }

  const newUser = {
    id: `user-${Date.now()}`,
    name,
    email,
    password,
    role: "user",
    createdAt: new Date().toISOString()
  };

  users.unshift(newUser);
  saveAuthUsers(users);

  state.session = {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
    role: newUser.role
  };
  saveSession(state.session);
  renderAccountState();
  prefillCheckoutFromSession();
  registerForm?.reset();
  setAuthTab("account");
  showToast("Đăng ký tài khoản user thành công.", "success");
}

function handleLogout() {
  if (!state.session) return;
  clearSession();
  state.session = null;
  renderAccountState();
  if (loginForm) loginForm.reset();
  if (registerForm) registerForm.reset();
  if (changePasswordForm) changePasswordForm.reset();
  setAuthTab("login");
  showToast("Đã đăng xuất tài khoản.", "success");
}

function handleChangePassword(event) {
  event.preventDefault();
  if (!state.session) return;

  const oldPassword = String(document.getElementById("oldPassword")?.value || "");
  const newPassword = String(document.getElementById("newPassword")?.value || "");

  if (!oldPassword || !newPassword) {
    showToast("Vui lòng nhập đầy đủ thông tin.", "error");
    return;
  }

  if (newPassword.length < 6) {
    showToast("Mật khẩu mới cần ít nhất 6 ký tự.", "error");
    return;
  }

  const users = loadAuthUsers();
  const currentUserIndex = users.findIndex(u => u.id === state.session.id);

  if (currentUserIndex === -1) {
    showToast("Lỗi hệ thống: Không tìm thấy tài khoản.", "error");
    return;
  }

  if (users[currentUserIndex].password !== oldPassword) {
    showToast("Mật khẩu cũ không chính xác.", "error");
    return;
  }

  users[currentUserIndex].password = newPassword;
  saveAuthUsers(users);

  if (changePasswordForm) changePasswordForm.reset();
  showToast("Cập nhật mật khẩu thành công!", "success");
}

function buildPhoneSvg(product) {
  const [c1, c2, c3] = product.theme;
  const text = encodeURIComponent(product.brand + " • " + product.name);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 420">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${c1}"/>
          <stop offset="50%" stop-color="${c2}"/>
          <stop offset="100%" stop-color="${c3}"/>
        </linearGradient>
        <linearGradient id="shine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="rgba(255,255,255,0.85)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
        </linearGradient>
      </defs>
      <rect width="320" height="420" rx="44" fill="url(#g)"/>
      <rect x="44" y="20" width="232" height="24" rx="12" fill="rgba(0,0,0,0.28)"/>
      <rect x="22" y="18" width="276" height="384" rx="42" fill="rgba(255,255,255,0.14)" stroke="rgba(255,255,255,0.25)"/>
      <circle cx="255" cy="118" r="18" fill="rgba(255,255,255,0.18)"/>
      <circle cx="220" cy="88" r="14" fill="rgba(255,255,255,0.16)"/>
      <circle cx="88" cy="334" r="140" fill="rgba(255,255,255,0.15)"/>
      <path d="M45 65 C120 10, 200 15, 280 105" fill="none" stroke="rgba(255,255,255,0.38)" stroke-width="10" stroke-linecap="round"/>
      <text x="36" y="360" fill="white" font-size="19" font-family="Arial" font-weight="700">${product.brand}</text>
      <text x="36" y="388" fill="rgba(255,255,255,0.92)" font-size="14" font-family="Arial">${product.memory} • ${product.screen.replace(/"/g, '')}</text>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function populateBrands() {
  const brands = [...new Set(products.map(p => p.brand))].sort();
  brandFilter.innerHTML = `<option value="Tất cả">Tất cả thương hiệu</option>` +
    brands.map(brand => `<option value="${brand}">${brand}</option>`).join("");
}

function getFilteredProducts() {
  const keyword = state.search.trim().toLowerCase();

  const filtered = products.filter(product => {
    const matchCategory = state.category === "Tất cả" || product.category === state.category;
    const matchBrand = state.brand === "Tất cả" || product.brand === state.brand;
    const matchSearch = !keyword || [product.name, product.brand, product.category, product.chip].join(" ").toLowerCase().includes(keyword);
    const matchPrice = product.price <= state.priceMax;
    const matchSale = !state.saleOnly || product.sale > 0;
    const matchStock = !state.stockOnly || product.stock > 0;
    return matchCategory && matchBrand && matchSearch && matchPrice && matchSale && matchStock;
  });

  switch (state.sort) {
    case "price-asc":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "rating-desc":
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case "sale-desc":
      filtered.sort((a, b) => b.sale - a.sale);
      break;
    default:
      filtered.sort((a, b) => (b.rating * 100 + b.reviews) - (a.rating * 100 + a.reviews));
  }

  return filtered;
}

function renderProducts() {
  const list = getFilteredProducts();
  resultCount.textContent = list.length;

  if (!list.length) {
    productGrid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <h3>Không tìm thấy sản phẩm phù hợp</h3>
        <p class="drawer-empty">Hãy thử đổi bộ lọc, tăng khoảng giá hoặc tìm với từ khóa khác.</p>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = list.map(product => {
    const favorite = state.favorites.includes(product.id);
    const inCart = state.cart.find(item => item.id === product.id);
    return `
      <article class="product-card reveal visible">
        <div class="product-thumb" style="background: linear-gradient(135deg, ${product.theme[0]} 0%, ${product.theme[1]} 45%, ${product.theme[2]} 100%);">
          <img src="${buildPhoneSvg(product)}" alt="${product.name}" />
        </div>

        <div class="product-top">
          <span class="product-brand">${product.brand}</span>
          <div class="product-actions">
            <button class="card-action ${favorite ? "active" : ""}" onclick="toggleFavorite(${product.id})" aria-label="Yêu thích">❤</button>
            <button class="card-action" onclick="openQuickView(${product.id})" aria-label="Xem nhanh">👁</button>
          </div>
        </div>

        <div class="product-info">
          <h3>${product.name}</h3>
          <div class="rating-row">
            <span class="rating-stars">${"★".repeat(Math.round(product.rating))}</span>
            <span>${product.rating} (${product.reviews})</span>
          </div>
          <div class="meta-row">
            <span>${product.screen}</span>
            <span>${product.memory}</span>
          </div>
          <div class="price-row">
            <div>
              <div class="price-current">${formatPrice(product.price)}</div>
              <div class="price-old">${formatPrice(product.oldPrice)}</div>
            </div>
            <span class="discount-badge">-${product.sale}%</span>
          </div>
          <div class="meta-row">
            <span class="stock-tag ${product.stock > 0 ? "in" : "out"}">${product.stock > 0 ? `Còn ${product.stock} máy` : "Hết hàng"}</span>
            <span>${product.camera}</span>
          </div>
          <div class="product-footer">
            <button class="btn btn-primary" onclick="addToCart(${product.id})" ${product.stock === 0 ? "disabled" : ""}>${inCart ? "Thêm nữa" : "Thêm giỏ hàng"}</button>
            <button class="btn btn-secondary" onclick="openQuickView(${product.id})">Chi tiết</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function addToCart(id) {
  const product = products.find(item => item.id === id);
  if (!product || product.stock === 0) {
    showToast("Sản phẩm đang tạm hết hàng.", "error");
    return;
  }

  const existing = state.cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ id, qty: 1 });
  }
  saveState();
  updateCartUI();
  renderProducts();
  showToast(`Đã thêm ${product.name} vào giỏ hàng.`, "success");
}

function toggleFavorite(id) {
  const product = products.find(item => item.id === id);
  const exists = state.favorites.includes(id);
  if (exists) {
    state.favorites = state.favorites.filter(item => item !== id);
    showToast(`Đã bỏ yêu thích ${product.name}.`, "info");
  } else {
    state.favorites.push(id);
    showToast(`Đã thêm ${product.name} vào yêu thích.`, "success");
  }
  saveState();
  updateFavoriteUI();
  renderProducts();
}

function updateCartQty(id, delta) {
  const item = state.cart.find(product => product.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter(product => product.id !== id);
  }
  saveState();
  updateCartUI();
  renderProducts();
}

function removeFromCart(id) {
  state.cart = state.cart.filter(item => item.id !== id);
  saveState();
  updateCartUI();
  renderProducts();
  showToast("Đã xóa sản phẩm khỏi giỏ hàng.", "info");
}

function removeFavorite(id) {
  state.favorites = state.favorites.filter(item => item !== id);
  saveState();
  updateFavoriteUI();
  renderProducts();
  showToast("Đã xóa khỏi danh sách yêu thích.", "info");
}

function updateCartUI() {
  cartCount.textContent = state.cart.reduce((sum, item) => sum + item.qty, 0);

  if (!state.cart.length) {
    cartItems.innerHTML = `
      <div class="empty-state">
        <h3>Giỏ hàng đang trống</h3>
        <p class="drawer-empty">Hãy chọn vài mẫu điện thoại đẹp và thêm vào giỏ hàng nhé.</p>
      </div>
    `;
    cartTotal.textContent = formatPrice(0);
    if (openCheckoutBtn) openCheckoutBtn.disabled = true;
    return;
  }

  let total = 0;
  cartItems.innerHTML = state.cart.map(item => {
    const product = products.find(product => product.id === item.id);
    if (!product) return "";
    total += product.price * item.qty;
    return `
      <div class="drawer-item">
        <img class="drawer-thumb" src="${buildPhoneSvg(product)}" alt="${product.name}" style="background: linear-gradient(135deg, ${product.theme[0]}, ${product.theme[1]}, ${product.theme[2]});" />
        <div>
          <h4>${product.name}</h4>
          <div class="drawer-empty">${product.memory} • ${product.brand}</div>
          <div class="drawer-row">
            <strong>${formatPrice(product.price)}</strong>
            <button class="remove-btn" onclick="removeFromCart(${product.id})">Xóa</button>
          </div>
          <div class="drawer-row">
            <div class="qty-controls">
              <button onclick="updateCartQty(${product.id}, -1)">−</button>
              <strong>${item.qty}</strong>
              <button onclick="updateCartQty(${product.id}, 1)">+</button>
            </div>
            <strong>${formatPrice(product.price * item.qty)}</strong>
          </div>
        </div>
      </div>
    `;
  }).join("");

  cartTotal.textContent = formatPrice(total);
  if (openCheckoutBtn) openCheckoutBtn.disabled = !state.cart.length;
}

function updateFavoriteUI() {
  favoritesCount.textContent = state.favorites.length;

  if (!state.favorites.length) {
    favoriteItems.innerHTML = `
      <div class="empty-state">
        <h3>Chưa có sản phẩm yêu thích</h3>
        <p class="drawer-empty">Nhấn vào biểu tượng trái tim để lưu lại các mẫu máy bạn quan tâm.</p>
      </div>
    `;
    return;
  }

  favoriteItems.innerHTML = state.favorites.map(id => {
    const product = products.find(item => item.id === id);
    if (!product) return "";
    return `
      <div class="drawer-item">
        <img class="drawer-thumb" src="${buildPhoneSvg(product)}" alt="${product.name}" style="background: linear-gradient(135deg, ${product.theme[0]}, ${product.theme[1]}, ${product.theme[2]});" />
        <div>
          <h4>${product.name}</h4>
          <div class="drawer-empty">${product.camera} • ${product.screen}</div>
          <div class="drawer-row">
            <strong>${formatPrice(product.price)}</strong>
            <button class="remove-btn" onclick="removeFavorite(${product.id})">Xóa</button>
          </div>
          <div class="drawer-row">
            <button class="btn btn-primary btn-block" onclick="addToCart(${product.id})">Thêm giỏ hàng</button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function normalizeCoupon(code) {
  return code.trim().toUpperCase();
}

function getCheckoutTotals() {
  const subtotal = state.cart.reduce((sum, item) => {
    const product = products.find(product => product.id === item.id);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);

  const itemCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const shippingMethod = document.querySelector('input[name="shippingMethod"]:checked')?.value || state.shippingMethod;
  const couponCode = normalizeCoupon(couponCodeInput?.value || state.coupon || "");

  let discount = 0;
  let couponLabel = "Chưa áp dụng mã giảm giá";

  if (couponCode === "ASTERA10") {
    discount = Math.min(Math.round(subtotal * 0.1), 1500000);
    couponLabel = "ASTERA10 giảm 10% tối đa 1.500.000đ";
  } else if (couponCode === "MEGA500") {
    if (subtotal >= 15000000) {
      discount = 500000;
      couponLabel = "MEGA500 giảm trực tiếp 500.000đ";
    } else {
      couponLabel = "MEGA500 áp dụng cho đơn từ 15.000.000đ";
    }
  } else if (couponCode === "FREESHIP") {
    couponLabel = "FREESHIP miễn phí vận chuyển";
  } else if (couponCode) {
    couponLabel = "Mã ưu đãi chưa hợp lệ";
  }

  let shipping = 0;
  if (shippingMethod === "standard") shipping = subtotal >= 10000000 ? 0 : 30000;
  if (shippingMethod === "express") shipping = subtotal >= 10000000 ? 60000 : 90000;
  if (shippingMethod === "pickup") shipping = 0;
  if (couponCode === "FREESHIP") shipping = 0;

  const total = Math.max(subtotal - discount + shipping, 0);

  return { subtotal, discount, shipping, total, itemCount, couponCode, couponLabel, shippingMethod };
}

function renderCheckoutSummary() {
  if (!checkoutSummaryItems) return;

  if (!state.cart.length) {
    checkoutSummaryItems.innerHTML = `
      <div class="empty-state">
        <h3>Chưa có sản phẩm để thanh toán</h3>
        <p class="drawer-empty">Hãy thêm ít nhất một sản phẩm vào giỏ hàng trước khi tạo đơn.</p>
      </div>
    `;
    checkoutSubtotal.textContent = formatPrice(0);
    checkoutDiscount.textContent = formatPrice(0);
    checkoutShipping.textContent = formatPrice(0);
    checkoutGrandTotal.textContent = formatPrice(0);
    if (placeOrderBtn) placeOrderBtn.disabled = true;
    return;
  }

  const totals = getCheckoutTotals();
  state.coupon = totals.couponCode;
  state.shippingMethod = totals.shippingMethod;

  checkoutSummaryItems.innerHTML = state.cart.map(item => {
    const product = products.find(product => product.id === item.id);
    if (!product) return "";
    return `
      <div class="checkout-item">
        <img class="checkout-item-thumb" src="${buildPhoneSvg(product)}" alt="${product.name}" style="background: linear-gradient(135deg, ${product.theme[0]}, ${product.theme[1]}, ${product.theme[2]});" />
        <div>
          <h5>${product.name}</h5>
          <div class="checkout-meta">${product.brand} • ${product.memory} • SL: ${item.qty}</div>
          <div class="checkout-line">
            <span class="drawer-empty">${formatPrice(product.price)} x ${item.qty}</span>
            <strong>${formatPrice(product.price * item.qty)}</strong>
          </div>
        </div>
      </div>
    `;
  }).join("");

  checkoutSubtotal.textContent = formatPrice(totals.subtotal);
  checkoutDiscount.textContent = `- ${formatPrice(totals.discount)}`;
  checkoutShipping.textContent = totals.shipping === 0 ? "Miễn phí" : formatPrice(totals.shipping);
  checkoutGrandTotal.textContent = formatPrice(totals.total);
  if (couponHint) couponHint.textContent = totals.couponLabel;
  if (placeOrderBtn) placeOrderBtn.disabled = false;
}

function openCheckout() {
  if (!state.cart.length) {
    showToast("Giỏ hàng đang trống, chưa thể thanh toán.", "error");
    return;
  }

  cartDrawer.classList.remove("show");
  favoritesDrawer.classList.remove("show");
  quickViewModal.classList.remove("show");

  const activeShipping = checkoutForm?.querySelector(`input[name="shippingMethod"][value="${state.shippingMethod}"]`);
  const activePayment = checkoutForm?.querySelector(`input[name="paymentMethod"][value="${state.paymentMethod}"]`);
  if (activeShipping) activeShipping.checked = true;
  if (activePayment) activePayment.checked = true;
  if (couponCodeInput) couponCodeInput.value = state.coupon || "";
  prefillCheckoutFromSession();

  renderCheckoutSummary();
  overlay.classList.add("show");
  checkoutModal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function completeCheckout(event) {
  event.preventDefault();

  if (!state.cart.length) {
    showToast("Giỏ hàng đang trống, chưa thể tạo đơn.", "error");
    return;
  }

  const formData = new FormData(checkoutForm);
  const fullName = String(formData.get("fullName") || "").trim();
  const phone = String(formData.get("phone") || "").trim().replace(/\s+/g, "");
  const city = String(formData.get("city") || "").trim();
  const address = String(formData.get("address") || "").trim();
  const paymentMethod = String(formData.get("paymentMethod") || "cod");
  const shippingMethod = String(formData.get("shippingMethod") || "standard");

  if (!fullName || !phone || !city || !address) {
    showToast("Vui lòng nhập đầy đủ họ tên, điện thoại và địa chỉ nhận hàng.", "error");
    return;
  }

  if (!/^(\+?84|0)\d{9,10}$/.test(phone)) {
    showToast("Số điện thoại chưa đúng định dạng Việt Nam.", "error");
    return;
  }

  state.paymentMethod = paymentMethod;
  state.shippingMethod = shippingMethod;
  state.coupon = normalizeCoupon(String(formData.get("coupon") || ""));

  const totals = getCheckoutTotals();
  const orderId = `AST${Date.now().toString().slice(-8)}`;

  const orderItems = state.cart.map(item => {
    const product = products.find(product => product.id === item.id);
    return product ? {
      id: product.id,
      name: product.name,
      brand: product.brand,
      memory: product.memory,
      price: product.price,
      qty: item.qty
    } : null;
  }).filter(Boolean);

  state.cart.forEach(item => {
    const product = products.find(product => product.id === item.id);
    if (product) product.stock = Math.max(product.stock - item.qty, 0);
  });

  const email = String(formData.get("email") || "").trim();
  const note = String(formData.get("note") || "").trim();
  const orders = loadOrders();
  orders.unshift({
    id: orderId,
    createdAt: new Date().toISOString(),
    status: "Mới",
    paymentStatus: paymentMethod === "cod" ? "Chờ thu tiền" : "Chờ xác nhận",
    paymentMethod,
    shippingMethod,
    coupon: totals.couponCode,
    customer: {
      fullName,
      phone,
      email,
      city,
      address,
      note,
      userId: state.session?.id || null,
      accountEmail: state.session?.email || email || null
    },
    items: orderItems,
    totals
  });
  saveOrders(orders);
  saveProducts();

  state.cart = [];
  saveState();
  updateCartUI();
  renderProducts();
  renderCheckoutSummary();
  closePanels();
  checkoutForm.reset();
  state.shippingMethod = "standard";
  state.paymentMethod = "cod";
  state.coupon = "";

  showToast(`Đặt hàng thành công. Mã đơn ${orderId} • Tổng thanh toán ${formatPrice(totals.total)}.`, "success");
}

function openDrawer(type) {
  overlay.classList.add("show");
  checkoutModal.classList.remove("show");
  if (type === "cart") cartDrawer.classList.add("show");
  if (type === "favorites") favoritesDrawer.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closePanels() {
  overlay.classList.remove("show");
  cartDrawer.classList.remove("show");
  favoritesDrawer.classList.remove("show");
  quickViewModal.classList.remove("show");
  checkoutModal.classList.remove("show");
  authModal?.classList.remove("show");
  document.body.style.overflow = "";
}

function openQuickView(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;

  modalBody.innerHTML = `
    <div class="modal-visual" style="background: linear-gradient(135deg, ${product.theme[0]} 0%, ${product.theme[1]} 45%, ${product.theme[2]} 100%);">
      <img src="${buildPhoneSvg(product)}" alt="${product.name}" />
    </div>
    <div class="modal-main">
      <span class="product-brand">${product.brand}</span>
      <h3>${product.name}</h3>
      <div class="modal-rating">
        <span class="rating-stars">${"★".repeat(Math.round(product.rating))}</span>
        <span class="modal-meta">${product.rating} điểm • ${product.reviews} đánh giá</span>
      </div>
      <p class="modal-desc">${product.desc}</p>
      <div class="modal-price">
        <strong>${formatPrice(product.price)}</strong>
        <span class="price-old">${formatPrice(product.oldPrice)}</span>
      </div>
      <ul class="spec-list">
        <li><span>Màn hình</span><strong>${product.screen}</strong></li>
        <li><span>Chip xử lý</span><strong>${product.chip}</strong></li>
        <li><span>Camera</span><strong>${product.camera}</strong></li>
        <li><span>Pin</span><strong>${product.battery}</strong></li>
        <li><span>Bộ nhớ</span><strong>${product.memory}</strong></li>
        <li><span>Màu sắc</span><strong>${product.colors.join(", ")}</strong></li>
      </ul>
      <div class="modal-actions">
        <button class="btn btn-primary" onclick="addToCart(${product.id})" ${product.stock === 0 ? "disabled" : ""}>Thêm vào giỏ hàng</button>
        <button class="btn btn-secondary" onclick="toggleFavorite(${product.id})">Yêu thích</button>
      </div>
    </div>
  `;

  overlay.classList.add("show");
  quickViewModal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  toastContainer.appendChild(toast);
  setTimeout(() => toast.remove(), 2600);
}

function updatePriceLabel() {
  priceValue.textContent = `Tối đa ${Math.round(state.priceMax / 1000000)} triệu`;
}

function resetFilters() {
  state.category = "Tất cả";
  state.brand = "Tất cả";
  state.search = "";
  state.sort = "popular";
  state.priceMax = 35000000;
  state.saleOnly = false;
  state.stockOnly = true;

  searchInput.value = "";
  brandFilter.value = "Tất cả";
  sortFilter.value = "popular";
  priceRange.value = 35000000;
  saleOnly.checked = false;
  stockOnly.checked = true;
  [...categoryTabs.querySelectorAll(".chip")].forEach(chip => chip.classList.toggle("active", chip.dataset.category === "Tất cả"));

  updatePriceLabel();
  renderProducts();
}

function initCountdown() {
  const deadline = new Date(Date.now() + 4 * 24 * 60 * 60 * 1000 + 13 * 60 * 60 * 1000 + 25 * 60 * 1000 + 10 * 1000);
  const parts = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds")
  };

  const tick = () => {
    const diff = deadline - new Date();
    if (diff <= 0) return;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    parts.days.textContent = String(days).padStart(2, "0");
    parts.hours.textContent = String(hours).padStart(2, "0");
    parts.minutes.textContent = String(minutes).padStart(2, "0");
    parts.seconds.textContent = String(seconds).padStart(2, "0");
  };

  tick();
  setInterval(tick, 1000);
}

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".reveal").forEach(item => observer.observe(item));
}

function initTheme() {
  document.body.classList.toggle("dark", state.theme === "dark");
}

window.toggleFavorite = toggleFavorite;
window.openQuickView = openQuickView;
window.addToCart = addToCart;
window.updateCartQty = updateCartQty;
window.removeFromCart = removeFromCart;
window.removeFavorite = removeFavorite;

seedAuthUsers();
populateBrands();
initTheme();
updatePriceLabel();
renderProducts();
updateCartUI();
updateFavoriteUI();
renderAccountState();
prefillCheckoutFromSession();
initCountdown();
initReveal();

searchInput.addEventListener("input", (e) => {
  state.search = e.target.value;
  renderProducts();
});

brandFilter.addEventListener("change", (e) => {
  state.brand = e.target.value;
  renderProducts();
});

sortFilter.addEventListener("change", (e) => {
  state.sort = e.target.value;
  renderProducts();
});

priceRange.addEventListener("input", (e) => {
  state.priceMax = Number(e.target.value);
  updatePriceLabel();
  renderProducts();
});

saleOnly.addEventListener("change", (e) => {
  state.saleOnly = e.target.checked;
  renderProducts();
});

stockOnly.addEventListener("change", (e) => {
  state.stockOnly = e.target.checked;
  renderProducts();
});

categoryTabs.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  state.category = chip.dataset.category;
  [...categoryTabs.querySelectorAll(".chip")].forEach(item => item.classList.remove("active"));
  chip.classList.add("active");
  renderProducts();
});

resetFiltersBtn.addEventListener("click", resetFilters);
document.getElementById("cartBtn").addEventListener("click", () => openDrawer("cart"));
document.getElementById("favoritesBtn").addEventListener("click", () => openDrawer("favorites"));
document.getElementById("closeModalBtn").addEventListener("click", closePanels);
document.getElementById("closeCheckoutBtn").addEventListener("click", closePanels);
overlay.addEventListener("click", closePanels);
document.querySelectorAll(".close-drawer").forEach(btn => btn.addEventListener("click", closePanels));
document.getElementById("scrollDealsBtn").addEventListener("click", () => {
  document.getElementById("sale").scrollIntoView({ behavior: "smooth" });
});
openCheckoutBtn?.addEventListener("click", openCheckout);
checkoutForm?.addEventListener("submit", completeCheckout);
checkoutForm?.addEventListener("input", renderCheckoutSummary);
checkoutForm?.addEventListener("change", renderCheckoutSummary);
document.getElementById("applyCouponBtn")?.addEventListener("click", renderCheckoutSummary);
document.querySelectorAll("[data-coupon]").forEach(btn => {
  btn.addEventListener("click", () => {
    if (couponCodeInput) couponCodeInput.value = btn.dataset.coupon || "";
    renderCheckoutSummary();
  });
});

authTabButtons.forEach(button => {
  button.addEventListener("click", () => setAuthTab(button.dataset.authTab));
});

accountBtn?.addEventListener("click", () => openAuthModal());
closeAuthBtn?.addEventListener("click", closePanels);
loginForm?.addEventListener("submit", handleLogin);
registerForm?.addEventListener("submit", handleRegister);
logoutBtn?.addEventListener("click", handleLogout);
changePasswordForm?.addEventListener("submit", handleChangePassword);
accountAdminLink?.addEventListener("click", (event) => {
  if (state.session?.role !== "admin") {
    event.preventDefault();
    showToast("Tài khoản user không có quyền vào trang admin.", "error");
  }
});

themeToggle.addEventListener("click", () => {
  state.theme = state.theme === "light" ? "dark" : "light";
  initTheme();
  saveState();
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

/* ===== AI Chat Assistant ===== */
const aiChatTrigger = document.getElementById("aiChatTrigger");
const aiChatWidget = document.getElementById("aiChatWidget");
const closeAiChatBtn = document.getElementById("closeAiChatBtn");
const aiChatMessages = document.getElementById("aiChatMessages");
const aiChatForm = document.getElementById("aiChatForm");
const aiChatInput = document.getElementById("aiChatInput");
const aiSendBtn = document.getElementById("aiSendBtn");
const aiQuickActions = document.getElementById("aiQuickActions");
let isWaitingForAi = false;

// Format plain text to HTML with basic markdown-like support (newlines to br)
function formatAiResponse(text) {
  return text.replace(/\n\s*\n/g, "<br><br>").replace(/\n/g, "<br>");
}

function appendMessage(content, sender = "user", isHtml = false) {
  const msgDiv = document.createElement("div");
  msgDiv.className = `ai-message ${sender}-msg`;
  const contentDiv = document.createElement("div");
  contentDiv.className = "msg-content";

  if (isHtml) contentDiv.innerHTML = content;
  else contentDiv.textContent = content;

  msgDiv.appendChild(contentDiv);

  // Insert before the typing indicator if it exists
  const typingInd = document.getElementById("aiTypingIndicator");
  if (typingInd && sender === "bot") {
    typingInd.remove();
    isWaitingForAi = false;
  }

  aiChatMessages.appendChild(msgDiv);
  scrollToBottom();
}

function showTypingIndicator() {
  if (isWaitingForAi) return;
  const indDiv = document.createElement("div");
  indDiv.className = "typing-indicator";
  indDiv.id = "aiTypingIndicator";
  indDiv.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
  aiChatMessages.appendChild(indDiv);
  scrollToBottom();
  isWaitingForAi = true;
}

function scrollToBottom() {
  aiChatMessages.scrollTo({ top: aiChatMessages.scrollHeight, behavior: "smooth" });
}

async function sendAiMessage(message) {
  if (!message.trim() || isWaitingForAi) return;

  // Remove quick actions if present, user has taken action
  if (aiQuickActions) {
    aiQuickActions.style.display = "none";
  }

  appendMessage(message, "user");
  aiChatInput.value = "";
  aiSendBtn.disabled = true;

  showTypingIndicator();

  try {
    const res = await fetch("http://localhost:3000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });

    const data = await res.json();

    // Simulate AI thinking delay for realism
    setTimeout(() => {
      appendMessage(formatAiResponse(data.reply), "bot", true);
    }, 600);
  } catch (error) {
    console.error("AI Chat error:", error);
    setTimeout(() => {
      appendMessage("Xin lỗi, mình đang gặp sự cố kết nối. Vui lòng thử lại sau nhé!", "bot");
    }, 600);
  }
}

// Draggable AI Chat Trigger Logic
let triggerDrag = { isDragging: false, isMoved: false, startX: 0, startY: 0, initialX: 0, initialY: 0 };

aiChatTrigger?.addEventListener('pointerdown', (e) => {
  triggerDrag.isDragging = true;
  triggerDrag.isMoved = false;
  triggerDrag.startX = e.clientX;
  triggerDrag.startY = e.clientY;

  const rect = aiChatTrigger.getBoundingClientRect();
  triggerDrag.initialX = rect.left;
  triggerDrag.initialY = rect.top;

  aiChatTrigger.style.transition = 'none'; // Disable transition during drag
  aiChatTrigger.setPointerCapture(e.pointerId);
});

aiChatTrigger?.addEventListener('pointermove', (e) => {
  if (!triggerDrag.isDragging) return;

  const dx = e.clientX - triggerDrag.startX;
  const dy = e.clientY - triggerDrag.startY;

  if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
    triggerDrag.isMoved = true;
  }

  let newX = triggerDrag.initialX + dx;
  let newY = triggerDrag.initialY + dy;

  // Boundary check
  const maxW = window.innerWidth - aiChatTrigger.offsetWidth;
  const maxH = window.innerHeight - aiChatTrigger.offsetHeight;
  newX = Math.max(0, Math.min(newX, maxW));
  newY = Math.max(0, Math.min(newY, maxH));

  aiChatTrigger.style.left = `${newX}px`;
  aiChatTrigger.style.top = `${newY}px`;
  aiChatTrigger.style.bottom = 'auto'; // Disable default bottom/right positioning
  aiChatTrigger.style.right = 'auto';
});

aiChatTrigger?.addEventListener('pointerup', (e) => {
  triggerDrag.isDragging = false;
  aiChatTrigger.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease'; // Restore toggle/hover transition
  aiChatTrigger.releasePointerCapture(e.pointerId);
});

aiChatTrigger?.addEventListener("click", (e) => {
  if (triggerDrag.isMoved) {
    e.preventDefault();
    return; // Cancel click if it was a drag
  }

  if (!aiChatWidget.classList.contains("show")) {
    // Dynamically position the chat widget next to the trigger icon
    const triggerRect = aiChatTrigger.getBoundingClientRect();

    // We should safely measure the widget or use its max bounds
    const widgetWidth = Math.min(window.innerWidth - 32, 380);
    const widgetHeight = Math.min(window.innerHeight - 120, 580);

    // Default position (above and aligned right)
    let left = triggerRect.right - widgetWidth;
    let originX = 'right';
    if (left < 10) {
      left = triggerRect.left;
      originX = 'left';
    }

    let top = triggerRect.top - widgetHeight - 16;
    let originY = 'bottom';
    if (top < 10) {
      top = triggerRect.bottom + 16;
      originY = 'top';
    }

    // Ensure the widget doesn't clip off the edges of the viewport
    left = Math.max(10, Math.min(left, window.innerWidth - widgetWidth - 10));
    top = Math.max(10, Math.min(top, window.innerHeight - widgetHeight - 10));

    aiChatWidget.style.bottom = 'auto';
    aiChatWidget.style.right = 'auto';
    aiChatWidget.style.top = `${top}px`;
    aiChatWidget.style.left = `${left}px`;
    aiChatWidget.style.transformOrigin = `${originY} ${originX}`;
  }

  aiChatWidget.classList.toggle("show");

  if (aiChatWidget.classList.contains("show")) {
    setTimeout(() => aiChatInput?.focus(), 100);
  }
});

closeAiChatBtn?.addEventListener("click", () => {
  aiChatWidget.classList.remove("show");
});

aiChatInput?.addEventListener("input", (e) => {
  aiSendBtn.disabled = e.target.value.trim().length === 0;
});

aiChatForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  sendAiMessage(aiChatInput.value);
});

document.querySelectorAll(".ai-chip").forEach(chip => {
  chip.addEventListener("click", () => {
    sendAiMessage(chip.dataset.query);
  });
});