/* =========================================================
   AKA Shop – Trang Tất cả sản phẩm: lọc, sắp xếp, tìm kiếm
   ========================================================= */
(function () {
  const grid = document.getElementById("product-grid");
  const cards = Array.from(grid.querySelectorAll(".product-card"));
  const emptyMsg = document.getElementById("empty-msg");
  const resultCount = document.getElementById("result-count");
  const shownCount = document.getElementById("shown-count");
  const sortSelect = document.getElementById("sort-select");
  const searchInput = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");

  const panel = document.getElementById("filter-panel");
  const overlay = document.getElementById("filter-overlay");

  // Bỏ dấu tiếng Việt để tìm kiếm không phân biệt dấu
  function normalize(str) {
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/đ/g, "d")
      .trim();
  }

  // Gom dữ liệu từ thuộc tính data-* của từng thẻ
  const items = cards.map((card, index) => {
    const price = Number(card.dataset.price) || 0;
    const old = Number(card.dataset.old) || 0;
    return {
      card,
      index,
      price,
      old,
      discount: old > price ? Math.round((1 - price / old) * 100) : 0,
      cat: card.dataset.cat,
      brand: card.dataset.brand,
      name: card.querySelector("h3").textContent.trim(),
      text: normalize(
        card.querySelector("h3").textContent + " " + card.dataset.brand
      ),
    };
  });

  // Thêm dòng "Tiết kiệm ..." cho hàng giảm giá
  items.forEach((it) => {
    if (it.old > it.price) {
      const tag = document.createElement("span");
      tag.className = "save-tag";
      tag.textContent =
        "Tiết kiệm " + (it.old - it.price).toLocaleString("vi-VN") + "đ";
      it.card.querySelector(".price").after(tag);
    }
  });

  function checked(name) {
    return Array.from(
      document.querySelectorAll('input[name="' + name + '"]:checked')
    ).map((i) => i.value);
  }

  function apply() {
    const cats = checked("cat");
    const brands = checked("brand");
    const ranges = checked("price").map((v) => v.split("-").map(Number));
    const words = normalize(searchInput ? searchInput.value : "")
      .split(/\s+/)
      .filter(Boolean);

    // 1. Lọc
    const visible = items.filter((it) => {
      if (cats.length && !cats.includes(it.cat)) return false;
      if (brands.length && !brands.includes(it.brand)) return false;
      if (ranges.length && !ranges.some(([a, b]) => it.price >= a && it.price < b))
        return false;
      if (words.length && !words.every((w) => it.text.includes(w))) return false;
      return true;
    });

    // 2. Sắp xếp
    const sorters = {
      default: (a, b) => a.index - b.index,
      "price-asc": (a, b) => a.price - b.price,
      "price-desc": (a, b) => b.price - a.price,
      "name-asc": (a, b) => a.name.localeCompare(b.name, "vi"),
      "name-desc": (a, b) => b.name.localeCompare(a.name, "vi"),
    };
    visible.sort(sorters[sortSelect.value] || sorters.default);

    // 3. Hiển thị
    items.forEach((it) => it.card.classList.add("hidden"));
    visible.forEach((it) => {
      it.card.classList.remove("hidden");
      grid.appendChild(it.card); // đưa về đúng thứ tự đã sắp
    });

    resultCount.textContent = visible.length;
    shownCount.textContent = visible.length;
    emptyMsg.classList.toggle("show", visible.length === 0);
  }

  // ----- Sự kiện -----
  document
    .querySelectorAll('.filter-panel input[type="checkbox"]')
    .forEach((i) => i.addEventListener("change", apply));
  sortSelect.addEventListener("change", apply);

  if (searchInput) {
    searchInput.addEventListener("input", apply);
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        apply();
      }
    });
  }
  if (searchBtn) searchBtn.addEventListener("click", apply);

  document.getElementById("filter-reset").addEventListener("click", () => {
    document
      .querySelectorAll('.filter-panel input[type="checkbox"]')
      .forEach((i) => (i.checked = false));
    sortSelect.value = "default";
    apply();
    closePanel();
  });

  // ----- Ngăn kéo bộ lọc trên điện thoại -----
  function openPanel() {
    panel.classList.add("open");
    overlay.classList.add("open");
  }
  function closePanel() {
    panel.classList.remove("open");
    overlay.classList.remove("open");
  }
  document.getElementById("filter-toggle").addEventListener("click", openPanel);
  document.getElementById("filter-close").addEventListener("click", closePanel);
  document.getElementById("filter-apply").addEventListener("click", closePanel);
  overlay.addEventListener("click", closePanel);

  // Nhận từ khoá từ ô tìm kiếm của trang chi tiết (products.html?q=...)
  const q = new URLSearchParams(location.search).get("q");
  if (q && searchInput) searchInput.value = q;

  apply();
})();