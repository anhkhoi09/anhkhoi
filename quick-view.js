/* AKA Shop – Bấm vào thẻ sản phẩm (hoặc nút "Xem nhanh") để mở trang chi tiết.
   Cần nạp SAU product-data.js */
(function () {
  if (!window.AKA_PRODUCTS) return;
  const norm = (s) => s.replace(/\s+/g, " ").trim().toLowerCase();
  const map = {};
  AKA_PRODUCTS.forEach((p) => (map[norm(p.name)] = p.id));

  document.querySelectorAll(".product-card").forEach((card) => {
    const h = card.querySelector("h3");
    const id = h && map[norm(h.textContent)];
    if (!id) return;
    card.style.cursor = "pointer";
    card.addEventListener("click", (e) => {
      if (e.target.closest(".add-cart")) return; // nút "Thêm vào giỏ" giữ nguyên
      window.location.href = "product.html?id=" + id;
    });
  });
})();