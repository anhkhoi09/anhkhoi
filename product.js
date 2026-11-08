/* =========================================================
   AKA Shop – Trang chi tiết sản phẩm (product.html?id=...)
   ========================================================= */
(function () {
  const root = document.getElementById("pd-root");
  const id = new URLSearchParams(location.search).get("id");
  const p = (window.AKA_PRODUCTS || []).find((x) => x.id === id);
  const money = (n) => n.toLocaleString("vi-VN") + "đ";
  const CAT = { xe: "Xe mô hình", diorama: "DIORAMA" };

  // Ô tìm kiếm trên header → chuyển sang trang "Tất cả sản phẩm"
  const si = document.getElementById("search-input");
  const sb = document.getElementById("search-btn");
  function goSearch() {
    const q = si.value.trim();
    location.href = "products.html" + (q ? "?q=" + encodeURIComponent(q) : "");
  }
  if (si) si.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); goSearch(); } });
  if (sb) sb.addEventListener("click", goSearch);

  if (!p) {
    root.innerHTML =
      '<div class="pd-notfound"><h1>Không tìm thấy sản phẩm</h1>' +
      '<a href="products.html">← Xem tất cả sản phẩm</a></div>';
    return;
  }
  document.title = p.name + " - AKA Shop";

  const discount = p.old > p.price ? Math.round((1 - p.price / p.old) * 100) : 0;
  const related = AKA_PRODUCTS.filter((x) => x.id !== p.id)
    .sort((a, b) => (b.cat === p.cat) - (a.cat === p.cat))
    .slice(0, 4);

  const specs = [
    ["Thương hiệu", p.brand],
    ["Danh mục", CAT[p.cat] || ""],
    p.scale ? ["Tỉ lệ", p.scale] : null,
    ["Mã sản phẩm", p.code],
  ].filter(Boolean);

  root.innerHTML = `
    <nav class="pd-crumb">
      <a href="index.html">Trang chủ</a><span>/</span>
      <a href="products.html">Sản phẩm</a><span>/</span>
      <a href="products.html">${CAT[p.cat] || "Tất cả"}</a><span>/</span>
      <strong>${p.name}</strong>
    </nav>

    <section class="pd">
      <div class="pd-gallery">
        <div class="pd-main">
          ${discount ? `<span class="sale">-${discount}%</span>` : p.isNew ? `<span class="new">NEW</span>` : ""}
          <img id="pd-main-img" src="${p.images[0]}" alt="${p.name}">
        </div>
        ${p.images.length > 1 ? `<div class="pd-thumbs">${p.images
          .map((src, i) => `<button type="button" class="pd-thumb${i ? "" : " on"}" data-src="${src}"><img src="${src}" alt=""></button>`)
          .join("")}</div>` : ""}
      </div>

      <div class="pd-info">
        <h3 class="pd-title">${p.name}</h3>
        <div class="pd-meta">
          <span>Mã sản phẩm: <strong>${p.code}</strong></span>
          <span>Thương hiệu: <strong>${p.brand}</strong></span>
        </div>

        <div class="pd-row">
          <span class="pd-label">Giá:</span>
          <div class="pd-price">
            <span class="pd-now" id="pd-now">${money(p.price)}</span>
            ${p.old > p.price ? `<span class="pd-old">${money(p.old)}</span>` : ""}
          </div>
        </div>

        ${p.types ? `
        <div class="pd-row">
          <span class="pd-label">LOẠI:</span>
          <div class="pd-opts" id="pd-types">${p.types
            .map((t, i) => `<button type="button" class="pd-opt${i ? "" : " on"}" data-i="${i}">${t.name}</button>`)
            .join("")}</div>
        </div>` : ""}

        <div class="pd-row">
          <span class="pd-label">Số lượng:</span>
          <div class="pd-qty">
            <button type="button" id="qty-dec" aria-label="Giảm">−</button>
            <input type="number" id="qty" value="1" min="1" max="99">
            <button type="button" id="qty-inc" aria-label="Tăng">+</button>
          </div>
        </div>

        <div class="pd-actions">
          <button type="button" class="pd-add" id="pd-add">THÊM VÀO GIỎ HÀNG</button>
          <button type="button" class="pd-buy" id="pd-buy">MUA NGAY</button>
        </div>
        <a class="pd-contact" href="tel:0123456789">LIÊN HỆ ĐỂ ĐƯỢC TƯ VẤN THÊM</a>
      </div>
    </section>

    <section class="pd-detail">
      <h2>Mô tả sản phẩm</h2>
      <div class="pd-desc">${p.desc.map((l) => `<p>${l}</p>`).join("")}</div>
      <table class="pd-specs">${specs.map(([k, v]) => `<tr><th>${k}</th><td>${v}</td></tr>`).join("")}</table>
    </section>

    <section class="pd-related products">
      <div class="section-title"><h2>Sản phẩm liên quan</h2></div>
      <div class="product-container">
        ${related.map((r) => `
          <div class="product-card">
            <div class="product-image"><img src="${r.images[0]}" alt="${r.name}"></div>
            <div class="product-info">
              <p class="brand">${r.brand}</p>
              <h3>${r.name}</h3>
              <div class="price">
                <span class="new-price">${money(r.price)}</span>
                ${r.old > r.price ? `<span class="old-price">${money(r.old)}</span>` : ""}
              </div>
              <button class="add-cart">Thêm vào giỏ</button>
            </div>
          </div>`).join("")}
      </div>
    </section>

    <div class="pd-lightbox" id="pd-lightbox"><img alt=""></div>
  `;

  /* ----- Ảnh lỗi: ảnh nhỏ lỗi thì ẩn, ảnh chính lỗi thì dùng ảnh tạm ----- */
  const PH = "data:image/svg+xml;utf8," + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600"><rect width="600" height="600" fill="#f1f1f1"/>' +
    '<text x="300" y="300" font-family="Arial" font-size="40" font-weight="700" fill="#bbb" text-anchor="middle">' + (p.brand || "AKA Shop") + '</text>' +
    '<text x="300" y="348" font-family="Arial" font-size="22" fill="#bbb" text-anchor="middle">Chưa có ảnh</text></svg>');
  function fixImg(img) {
    const bad = () => {
      const th = img.closest(".pd-thumb");
      if (th) { th.remove(); return; }          // ảnh nhỏ lỗi -> bỏ
      if (img.src !== PH) img.src = PH;         // ảnh chính lỗi -> ảnh tạm
    };
    img.addEventListener("error", bad);
    if (img.complete && img.naturalWidth === 0 && img.getAttribute("src")) bad();
  }
  root.querySelectorAll(".pd-main img, .pd-thumb img, .product-image img").forEach(fixImg);

  /* ----- Ảnh: bấm ảnh nhỏ để đổi ảnh chính, bấm ảnh chính để phóng to ----- */
  const mainImg = document.getElementById("pd-main-img");
  root.querySelectorAll(".pd-thumb").forEach((t) =>
    t.addEventListener("click", () => {
      mainImg.src = t.dataset.src;
      root.querySelectorAll(".pd-thumb").forEach((x) => x.classList.toggle("on", x === t));
    })
  );
  const box = document.getElementById("pd-lightbox");
  mainImg.addEventListener("click", () => {
    if (mainImg.src.startsWith("data:")) return;
    box.querySelector("img").src = mainImg.src;
    box.classList.add("open");
  });
  box.addEventListener("click", () => box.classList.remove("open"));

  /* ----- Loại (BOX / CARD) ----- */
  let typeIdx = 0;
  const unitPrice = () => (p.types && p.types[typeIdx].price) || p.price;
  root.querySelectorAll(".pd-opt").forEach((btn) =>
    btn.addEventListener("click", () => {
      typeIdx = Number(btn.dataset.i);
      root.querySelectorAll(".pd-opt").forEach((x) => x.classList.toggle("on", x === btn));
      document.getElementById("pd-now").textContent = money(unitPrice());
    })
  );

  /* ----- Số lượng ----- */
  const qtyEl = document.getElementById("qty");
  const getQty = () => Math.min(99, Math.max(1, parseInt(qtyEl.value, 10) || 1));
  document.getElementById("qty-dec").addEventListener("click", () => (qtyEl.value = Math.max(1, getQty() - 1)));
  document.getElementById("qty-inc").addEventListener("click", () => (qtyEl.value = Math.min(99, getQty() + 1)));
  qtyEl.addEventListener("change", () => (qtyEl.value = getQty()));

  /* ----- Thêm vào giỏ (cùng định dạng với cart.js) ----- */
  function getUser() {
    try { return JSON.parse(localStorage.getItem("aka_current_user")); } catch { return null; }
  }
  function addToCart() {
    const user = getUser();
    if (!user) {
      alert("Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!");
      localStorage.setItem("redirectAfterLogin", location.href);
      location.href = "login.html";
      return false;
    }
    const key = "aka_shop_cart:" + user.uid;
    let cart;
    try { cart = JSON.parse(localStorage.getItem(key)) || []; } catch { cart = []; }
    // Có chọn loại → ghi kèm tên loại để giỏ hàng tách riêng BOX / CARD
    const label = p.types ? p.name + " - " + p.types[typeIdx].name : p.name;
    const item = cart.find((i) => i.id === label);
    if (item) item.qty += getQty();
    else cart.push({ id: label, name: label, price: money(unitPrice()), image: p.images[0], qty: getQty() });
    localStorage.setItem(key, JSON.stringify(cart));
    window.dispatchEvent(new Event("aka-auth-changed")); // cart.js vẽ lại giỏ + badge
    document.querySelector("a.cart").click();            // mở ngăn kéo giỏ hàng
    return true;
  }
  document.getElementById("pd-add").addEventListener("click", addToCart);
  document.getElementById("pd-buy").addEventListener("click", addToCart);
})();