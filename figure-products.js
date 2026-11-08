/* =========================================================
   AKA Shop – Mục FIGURE (nguồn: aera.com.vn/collections/figure, 37 sản phẩm)
   Nạp SAU product-data.js + figure-images.js, TRƯỚC products.js / cart.js / quick-view.js
   - Thêm vào window.AKA_PRODUCTS (cho trang chi tiết product.html)
   - Vẽ thẻ sản phẩm vào #product-grid (products.html) và #figure-grid (index.html)
   ========================================================= */
(function () {
  if (!window.AKA_PRODUCTS) window.AKA_PRODUCTS = [];
  const IMGS = window.FIGURE_IMAGES || {};
  const BRAND = "DAI FIGURE";

  const PH = "data:image/svg+xml;utf8," + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600"><rect width="600" height="600" fill="#f1f1f1"/>' +
    '<text x="300" y="300" font-family="Arial" font-size="44" font-weight="700" fill="#bbb" text-anchor="middle">' + BRAND + '</text>' +
    '<text x="300" y="350" font-family="Arial" font-size="24" fill="#bbb" text-anchor="middle">Chưa có ảnh</text></svg>');

  // [handle, tên, giá, mã, hết hàng?]
  const ROWS = [
    ["1-64-figure-12-ban-dai-figure-basic-ss2-12-ver", "1/64 FIGURE - [12 BẢN] DAI FIGURE BASIC SS2 12 VER", 190000, "FB.S201", true],
    ["1-64-figure-2-ban-dai-fig-premium-911-gt3-rexy-skeleton-driver-fp-gt3rs", "1/64 FIGURE - [2 BẢN] DAI FIG PREMIUM 911 GT3 REXY SKELETON DRIVER - FP.GT3RS", 250000, "FP.GT3RS"],
    ["1-64-figure-2-ban-dai-fig-premium-dai-driver-mazda-787b-lemans-24h-winner", "1/64 FIGURE - [2 BẢN] DAI FIG PREMIUM DAI DRIVER MAZDA 787B LEMANS 24H WINNER", 190000, "AKA-F003"],
    ["1-64-figure-3-ban-dai-fig-headphone-fb-hp", "1/64 FIGURE - [3 BẢN] DAI FIG HEADPHONE - FB.HP", 190000, "FB.HP"],
    ["1-64-figure-3-ban-dai-fig-premium-dai-colorway-bape-series-2", "1/64 FIGURE - [3 BẢN] DAI FIG PREMIUM DAI COLORWAY BAPE SERIES", 195000, "AKA-F005"],
    ["1-64-figure-dai-fig-skater-3-ver", "1/64 FIGURE - [3 BẢN] DAI FIG SKATER 3 VER", 190000, "AKA-F006"],
    ["1-64-figure-3-ban-dai-fig-premium-lewis-hamilton", "1/64 FIGURE - DAI FIG PREMIUM LEWIS HAMILTON", 245000, "AKA-F007"],
    ["1-64-figure-dai-figure-premium-forte-gt3-diver-fp-gt3f", "1/64 FIGURE - DAI FIGURE PREMIUM FORTE GT3 DIVER - FP.GT3F", 250000, "FP.GT3F"],
    ["1-64-figure-basic-dai-fig-basic-ss1-fb", "1/64 FIGURE BASIC - DAI FIG BASIC SS1 - FB", 180000, "FB"],
    ["1-64-figure-basic-dai-fig-bosozoku-fb-b", "1/64 FIGURE PREMIUM - DAI FIG BOSOZOKU - FP.B", 180000, "FP.B"],
    ["1-64-figure-premium-dai-fig-chrome-hearts-x-the-rolling-stones-jacket-fp", "1/64 FIGURE PREMIUM - DAI FIG CHROME HEARTS X THE ROLLING STONES JACKET - FP.CH", 270000, "FP.CH"],
    ["1-64-figure-premium-dai-fig-xmax-santa-claus-fp", "1/64 FIGURE PREMIUM - DAI FIG XMAX SANTA CLAUS - FP.S", 270000, "FP.S"],
    ["1-64-gears-dai-fig-racing-sim-v1-rs-v1", "1/64 GEARS PREMIUM - DAI FIG RACING SIM V1 - RS.V1", 250000, "RS.V1"],
    ["dai-figure-1-64-active-tote-lady-daichar00037", "DAI FIGURE - 1/64 ACTIVE TOTE LADY - DAICHAR00037", 195000, "DAICHAR00037"],
    ["dai-figure-1-64-automotive-engineer-white-daichar00034", "DAI FIGURE - 1/64 AUTOMOTIVE ENGINEER WHITE - DAICHAR00034", 185000, "DAICHAR00034", true],
    ["dai-figure-1-64-dai-bape-puple-camo-luxe-20pcs-limited-daichar0021", "DAI FIGURE - 1/64 DAI BAPE PUPLE CAMO LUXE [20PCS LIMITED] - DAICHAR0021", 390000, "DAICHAR0021"],
    ["dai-figure-1-64-dai-frost-gilder-daichar0031", "DAI FIGURE - 1/64 DAI FROST GILDER - DAICHAR0031", 295000, "DAICHAR0031"],
    ["dai-figure-1-64-dai-fueling-boy-binh-xang-tach-roi-daichar0019", "DAI FIGURE - 1/64 DAI FUELING BOY [BÌNH XĂNG TÁCH RỜI] - DAICHAR0019", 195000, "DAICHAR0019"],
    ["dai-figure-1-64-dai-han-f-f-ver1-daichar0044", "DAI FIGURE - 1/64 DAI HAN F&F VER1 - DAICHAR0044", 225000, "DAICHAR0044"],
    ["dai-figure-1-64-dai-han-f-f-ver2-daichar00045", "DAI FIGURE - 1/64 DAI HAN F&F VER2 - DAICHAR00045", 225000, "DAICHAR00045"],
    ["dai-figure-1-64-dai-olive-bomber-daichar0020", "DAI FIGURE - 1/64 DAI OLIVE BOMBER - DAICHAR0020", 195000, "DAICHAR0020"],
    ["dai-figure-1-64-dai-paul-f-f-daichar00046", "DAI FIGURE - 1/64 DAI PAUL F&F - DAICHAR00046", 225000, "DAICHAR00046"],
    ["dai-figure-1-64-dai-smokey-nagataa-30pcs-limited-daichar0017", "DAI FIGURE - 1/64 DAI SMOKEY NAGATAA [30PCS LIMITED] - DAICHAR0017", 245000, "DAICHAR0017"],
    ["dai-figure-1-64-dai-urban-camo-girl-daichar0030", "DAI FIGURE - 1/64 DAI URBAN CAMO GIRL - DAICHAR0030", 195000, "DAICHAR0030"],
    ["dai-figure-1-64-dai-yellow-bombe-daichar0013-1", "DAI FIGURE - 1/64 DAI YELLOW BOMBE - DAICHAR0013", 195000, "DAICHAR0013"],
    ["dai-figure-1-64-demin-waist-girl-daichar0039", "DAI FIGURE - 1/64 DEMIN WAIST GIRL - DAICHAR0039", 195000, "DAICHAR0039"],
    ["dai-figure-1-64-gentleman-daichar0028", "DAI FIGURE - 1/64 GENTLEMAN - DAICHAR0028", 195000, "DAICHAR0028"],
    ["dai-figure-1-64-im-just-a-girl-daichar00049", "DAI FIGURE - 1/64 IM JUST A GIRL - DAICHAR00049", 190000, "DAICHAR00049"],
    ["dai-figure-1-64-nigoo-and-pharel-daichar0050", "DAI FIGURE - 1/64 NIGOO AND PHAREL - DAICHAR0050", 390000, "DAICHAR0050"],
    ["dai-figure-1-64-purple-tube-girl-daichar0038", "DAI FIGURE - 1/64 PURPLE TUBE GIRL - DAICHAR0038", 195000, "DAICHAR0038"],
    ["dai-figure-1-64-red-sneakers-kid-daichar00036", "DAI FIGURE - 1/64 RED SNEAKERS KID - DAICHAR00036", 159000, "DAICHAR00036"],
    ["dai-figure-1-64-red-varsity-vixen-daichar00041", "DAI FIGURE - 1/64 RED VARSITY VIXEN - DAICHAR00041", 245000, "DAICHAR00041"],
    ["dai-figure-1-64-skateboard-boy-daichar0013", "DAI FIGURE - 1/64 SKATEBOARD BOY - DAICHAR0012", 295000, "DAICHAR0012"],
    ["dai-figure-1-64-skull-boy-daichar00048", "DAI FIGURE - 1/64 SKULL BOY - DAICHAR00048", 245000, "DAICHAR00048"],
    ["dai-figure-1-64-stussy-boy-daichar0011", "DAI FIGURE - 1/64 STUSSY BOY - DAICHAR0011", 355000, "DAICHAR0011"],
    ["dai-figure-2ver-1-64-dai-cowgirl-daichar0022-daichar0023", "DAI FIGURE - [2VER] 1/64 DAI COWGIRL - DAICHAR0022 - DAICHAR0023", 195000, "DAICHAR0022"],
    ["dai-figure-dai-neo-bape-color-daichar0009w", "DAI FIGURE - DAI NEO BAPE COLOR - DAICHAR0009W", 390000, "DAICHAR0009W"],
  ];

  // Link ảnh gốc của Haravan không có đuôi kích thước -> thêm _master (bản lớn, luôn có trên CDN)
  const master = (u) => /_(master|grande|large|compact|medium|small)\.(jpg|png|webp)$/i.test(u) ? u : u.replace(/\.(jpg|png|webp)$/i, "_master.$1");
  const orig = (u) => u.replace(/_master(\.(jpg|png|webp))$/i, "$1");
  const money = (n) => n.toLocaleString("vi-VN") + "đ";
  const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
  const have = new Set(window.AKA_PRODUCTS.map((p) => p.id));
  const added = [];

  ROWS.forEach(([handle, name, price, code, soldOut]) => {
    if (have.has(handle)) return;
    const imgs = IMGS[handle] && IMGS[handle].length ? IMGS[handle].map(master) : [PH];
    const p = {
      id: handle,
      code: code,
      name: name,
      brand: BRAND,
      cat: "figure",
      scale: "1:64",
      price: price,
      old: 0,
      soldOut: !!soldOut,
      images: imgs,
      image: imgs[0],
      desc: [
        "Thương hiệu: " + BRAND + ".",
        "Mẫu: " + name + ".",
        "Figure nhân vật tỉ lệ 1:64 – dùng để trưng bày cùng xe mô hình và diorama.",
        "Sản phẩm chính hãng, đóng gói cẩn thận trước khi giao.",
      ],
    };
    // Bộ 12 phiên bản: cho chọn VER 1 → VER 12 ở trang chi tiết
    if (/12-ver$/.test(handle)) p.types = Array.from({ length: 12 }, (_, i) => ({ name: "VER " + (i + 1) }));
    window.AKA_PRODUCTS.push(p);
    added.push(p);
  });

  const card = (p, withQuickView) => `
      <div class="product-card" data-cat="${p.cat}" data-brand="${p.brand}" data-price="${p.price}">
        <div class="product-image">
          ${p.soldOut ? '<span class="sold-out">Hết hàng</span>' : ""}
          <img src="${p.images[0]}" data-o="${orig(p.images[0])}" alt="${esc(p.name)}" loading="lazy" onerror="if(this.dataset.o&&this.src!==this.dataset.o){var o=this.dataset.o;this.dataset.o='';this.src=o}else{this.onerror=null;this.src='${PH}'}">
          ${withQuickView ? '<button class="quick-view">Xem nhanh</button>' : ""}
        </div>
        <div class="product-info">
          <p class="brand">${p.brand}</p>
          <h3>${esc(p.name)}</h3>
          <div class="price"><span class="new-price">${money(p.price)}</span></div>
          <button class="add-cart"${p.soldOut ? " disabled" : ""}>${p.soldOut ? "Hết hàng" : "Thêm vào giỏ"}</button>
        </div>
      </div>`;

  // Trang "Tất cả sản phẩm"
  const grid = document.getElementById("product-grid");
  if (grid) grid.insertAdjacentHTML("beforeend", added.map((p) => card(p, false)).join(""));

  // Trang chủ (mục FIGURE)
  const home = document.getElementById("figure-grid");
  // Trang chủ chỉ hiện 4 sản phẩm nổi bật (ưu tiên còn hàng), xem đủ ở products.html
  if (home) {
    const featured = added.filter((p) => !p.soldOut).slice(0, 4);
    home.insertAdjacentHTML("beforeend", featured.map((p) => card(p, true)).join(""));
  }
})();