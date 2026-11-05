/* =========================================================
   AKA Shop – Dữ liệu sản phẩm (dùng cho trang chi tiết product.html)
   - "name" phải GIỐNG HỆT tên (thẻ h3) trên index.html / products.html
   - Muốn thêm ảnh cho sản phẩm: thêm link vào mảng "images"
     (ảnh đầu tiên là ảnh chính, các ảnh còn lại là ảnh nhỏ bên dưới)
   ========================================================= */
(function () {
  const CDN = "https://cdn.hstatic.net/products/200001046178/";
  const XE_DESC = (model) => [
    "Thương hiệu: MINI GT.",
    "Mẫu: " + model + ".",
    "Tỉ lệ 1:64 – xe mô hình dành cho người sưu tầm.",
    "Sản phẩm chính hãng, đóng gói cẩn thận trước khi giao.",
  ];

  // Loại (BOX / CARD) – chỉ hiện ở xe mô hình. Muốn giá khác nhau theo loại: { name: "CARD", price: 640000 }
  const XE_TYPES = [{ name: "BOX" }, { name: "CARD" }];

  window.AKA_PRODUCTS = [
    {
      id: "lamborghini-huracan-gt3-evo2",
      code: "AKA-001",
      name: "Lamborghini Huracan GT3 EVO2",
      brand: "MINI GT",
      cat: "xe",
      scale: "1:64",
      types: XE_TYPES,
      price: 495000,
      old: 550000,
      images: [CDN + "0f97e1ce-f20e-4f5d-97bb-1c5674d4cbe8_371ce6eee76340b6aad6ba6e6385ccce_master.jpg"],
      desc: XE_DESC("Lamborghini Huracan GT3 EVO2"),
    },
    {
      id: "porsche-911-gt3-rexy-skeleton",
      code: "MGT01143",
      name: "Porsche 911 GT3 Rexy Skeleton",
      brand: "MINI GT",
      cat: "xe",
      scale: "1:64",
      types: XE_TYPES,
      price: 599000,
      old: 0,
      isNew: true,
      images: [
        CDN + "187dcdfc-9704-40da-8bea-a1b7f92218d4_c0cfb1e036174b7b9f96dd467e5a60d1_master.jpg",
        CDN + "bdbcbc66-4711-4b2f-9aba-d14d0c3ebaf5_12a784d589804fe6a889f172fc4e53af_master.jpg",
        CDN + "c1fc2f81-594c-40a6-a90c-acc0d262d411_5c35f8f6f4914723be86c5327212d7aa_master.jpg",
        CDN + "5bc3f782-34b6-48c7-9974-af27c49c2354_134b7f3799254ac487c54b2155e93614_master.jpg",
        CDN + "380ccb42-4c7c-4676-b215-666b7b8d19c9_7fa92e5c2b664ebe911f05cfac8ffccc_master.jpg",
      ],
      desc: [
        "Thương hiệu: MINI GT.",
        "Mẫu: MINI GT – 1/64 PORSCHE 911 GT3 R #77 REXY SKELETON AO RACING 2025 IMSA PETIT LE MANS – MGT01143.",
        "Tỉ lệ 1:64 – xe mô hình dành cho người sưu tầm.",
        "Sản phẩm chính hãng, đóng gói cẩn thận trước khi giao.",
      ],
    },
    {
      id: "mazda-rx-7-lb-super-silhouette",
      code: "AKA-003",
      name: "MAZDA RX-7 LB-SUPER SILHOUETTE",
      brand: "MINI GT",
      cat: "xe",
      scale: "1:64",
      types: XE_TYPES,
      price: 340000,
      old: 400000,
      images: [CDN + "ec20760d-3d65-4bc7-a7bd-f71a2065e414_66d47687c280473bb240a0c63240295a_master.jpg"],
      desc: XE_DESC("MAZDA RX-7 LB-SUPER SILHOUETTE"),
    },
    {
      id: "bugatti-bolide-red",
      code: "AKA-004",
      name: "Bugatti Bolide Red",
      brand: "MINI GT",
      cat: "xe",
      scale: "1:64",
      types: XE_TYPES,
      price: 349000,
      old: 0,
      images: [CDN + "8b5e2fbd-9836-4be6-b90d-ba67d108423c_d48cab00e14448bbb9e5761ef08a11da_master.jpg"],
      desc: XE_DESC("Bugatti Bolide Red"),
    },
    {
      id: "7-eleven-convenience-store",
      code: "AKA-005",
      name: "7-ELEVEN CONVENIENCE STORE",
      brand: "SHOU CANG JIA",
      cat: "diorama",
      price: 499000,
      old: 0,
      images: ["https://m.media-amazon.com/images/I/61L1y9ocO1L.jpg"],
      desc: ["Thương hiệu: SHOU CANG JIA.", "Mô hình diorama cửa hàng tiện lợi 7-ELEVEN, dùng để trưng bày và chụp ảnh cùng xe mô hình."],
    },
    {
      id: "lawson-convenience-store",
      code: "AKA-006",
      name: "LAWSON CONVENIENCE STORE",
      brand: "SHOU CANG JIA",
      cat: "diorama",
      price: 399000,
      old: 0,
      images: ["https://down-vn.img.susercontent.com/file/sg-11134201-82623-mje6nnli9xj502"],
      desc: ["Thương hiệu: SHOU CANG JIA.", "Mô hình diorama cửa hàng tiện lợi LAWSON, dùng để trưng bày và chụp ảnh cùng xe mô hình."],
    },
    {
      id: "japanese-style-ramp",
      code: "AKA-007",
      name: "JAPANESE STYLE RAMP",
      brand: "SHOU CANG JIA",
      cat: "diorama",
      price: 499000,
      old: 0,
      images: ["https://m.media-amazon.com/images/I/71ZIDx1u2EL.jpg"],
      desc: ["Thương hiệu: SHOU CANG JIA.", "Mô hình diorama dốc đỗ xe phong cách Nhật, dùng để trưng bày và chụp ảnh cùng xe mô hình."],
    },
    {
      id: "safework-double-deck-parking-workshop",
      code: "AKA-008",
      name: "SAFEWORK DOUBLE-DECK PARKING WORKSHOP",
      brand: "SHOU CANG JIA",
      cat: "diorama",
      price: 449000,
      old: 0,
      images: ["https://i.ebayimg.com/00/s/ODAwWDgwMA==/z/qR8AAeSwENFpx53Q/$_10.PNG?set_id=880000500F"],
      desc: ["Thương hiệu: SHOU CANG JIA.", "Mô hình diorama xưởng đỗ xe hai tầng, dùng để trưng bày và chụp ảnh cùng xe mô hình."],
    },
  ];
})();