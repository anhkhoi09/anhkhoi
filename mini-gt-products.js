/* =========================================================
   AKA Shop – Thêm sản phẩm MINI GT (nguồn: aera.com.vn)
   Nạp SAU product-data.js và TRƯỚC products.js / quick-view.js
   - Tự thêm vào window.AKA_PRODUCTS (cho trang chi tiết)
   - Tự vẽ thẻ sản phẩm vào #product-grid (trang Tất cả sản phẩm)
   - Muốn có ảnh thật: điền link vào cột "img" của từng dòng
   ========================================================= */
(function () {
  if (!window.AKA_PRODUCTS) window.AKA_PRODUCTS = [];

  // Ảnh tạm khi chưa có link ảnh
  const PLACEHOLDER = "data:image/svg+xml;utf8," + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600"><rect width="600" height="600" fill="#f1f1f1"/>' +
    '<text x="300" y="300" font-family="Arial" font-size="44" font-weight="700" fill="#bbb" text-anchor="middle">MINI GT</text>' +
    '<text x="300" y="350" font-family="Arial" font-size="24" fill="#bbb" text-anchor="middle">Chưa có ảnh</text></svg>');

  // Ảnh lấy từ aera.com.vn theo mã sản phẩm (chỉ dùng khi cột img của dòng còn trống)
  const IMG = {
      "MGT00765": "https://cdn.hstatic.net/products/200001046178/0a73a0be-0d1d-40cd-9a99-e6644cb8a9e4_2c61867e88554c1abfef13d3177e01ff_master.jpg",
      "MGT00274": "https://cdn.hstatic.net/products/200001046178/6c984460-f117-4660-bcb5-8de521901bed_8d68d0dc2b7b4b4db3abd098ef9fa211_master.jpg",
      "MGT01133": "https://cdn.hstatic.net/products/200001046178/ccfc5ca9-8fea-4aa7-8c9c-7b6910dbaa54_5397939b32fa40058ad05869f2877940_master.jpg",
      "MGT01248": "https://cdn.hstatic.net/products/200001046178/5969c7d6-49b3-4e11-8d63-34aa95d87f76_47619c58c17742af93aa0cff3b1d8761_master.jpg",
      "QZ00601": "https://cdn.hstatic.net/products/200001046178/bdbb18de-9a91-44ea-ab32-be6e1056e57d_db8a73291d3f439ea9936643cfd472ae_master.jpg",
      "QZ01002": "https://cdn.hstatic.net/products/200001046178/b6dec067-708e-47bf-b9d6-0d8145abf115_fac22443538f4475980bc379a4bd0ebe_master.jpg",
      "QZ00402": "https://cdn.hstatic.net/products/200001046178/46ae23ef-4c1c-4718-9400-95b607eccf85_8f13c7f01c9a4d1ca093d73acb8cd6bb_master.jpg",
      "QZ00102": "https://cdn.hstatic.net/products/200001046178/519f0bcd-7f26-40df-b3ac-603bfcf52ba5_c99d4cae53594a5e8eac482ca682d36a_master.jpg",
      "QZ00101": "https://cdn.hstatic.net/products/200001046178/430f0a15-664c-4921-8846-81d81d6cbbb1_ef6c7c5709584e31ab2a8c0396b34ab6_master.jpg",
      "MGT01204": "https://cdn.hstatic.net/products/200001046178/57662c64-f223-4bbd-b3ed-8af6904b5e7f_ade754d37c484a1ab0e0d8706e1b57cd_master.jpg",
      "MGT01205": "https://cdn.hstatic.net/products/200001046178/55b349cc-cedf-461a-a39a-0f4b82adf39c_67350ef3859c451a9310aa97b89a780b_master.jpg",
      "MGT01169": "https://cdn.hstatic.net/products/200001046178/e7e2265e-19b5-4b3a-968c-23bbc0dc942c_375de5f5c0ab4237a125b47b8adc4660_master.jpg",
      "MGT01212": "https://cdn.hstatic.net/products/200001046178/cdd6fce8-d794-4f2e-9abe-5f622d500b36_039be2616a8546b88981e28b2e04da52_master.jpg",
      "MGT01217": "https://cdn.hstatic.net/products/200001046178/3b39c81c-0e24-457c-bf72-c702ba14389f_205f791ac6dc4ee5a38b445a80c7386e_master.jpg",
      "MGT01182": "https://cdn.hstatic.net/products/200001046178/443e5d8d-b3b2-4f40-b2a8-203ab5c6f7b8_d4b16e6ec9e24f16a80336b8544e3dd8_master.jpg",
      "MT00581": "https://cdn.hstatic.net/products/200001046178/9cd78aaa-597f-4602-955e-891538f0272a_4df03c6b8c6d4952ad58e76fefdd6546_master.jpg",
      "MGT00528": "https://cdn.hstatic.net/products/200001046178/0992445b-73bc-4d1f-ad0a-cc12be63349a_33be0c1ffe274740b177e8d4cb434222_master.jpg",
      "MGT01149": "https://cdn.hstatic.net/products/200001046178/226d19dc-042e-42c4-a70f-1eb3a3b1f48f_838c9529f34b4f509e605f2b29089e9f_master.jpg",
      "MGT01132": "https://cdn.hstatic.net/products/200001046178/77f0a7df-8f08-4c57-9c5f-fef59714d134_ac1b8682f9b04abdbcd3bd0240142ee9_master.jpg",
      "MGT00972": "https://cdn.hstatic.net/products/200001046178/a35ae57c-9c4a-42cf-ad77-014c663c5e0a_fcdbf4ba513844569a3a268e5705583f_master.jpg",
      "MGT01096": "https://cdn.hstatic.net/products/200001046178/df45e5b3-42e8-40a8-9b93-ca85d1acd856_17ca172124e84b6bafb0e660051e4616_master.jpg",
      "MGT01098": "https://cdn.hstatic.net/products/200001046178/97afeea5-15fd-46f0-a53e-35d3288d6860_ed85ddc32b5d41b89288d120bea1c7d8_master.jpg",
      "MGT01118": "https://cdn.hstatic.net/products/200001046178/5809e461-a436-4e06-bb9b-e50273f5ff82_238a17fb54ff418da35021b38558c0f0_master.jpg",
      "MGT01185": "https://cdn.hstatic.net/products/200001046178/732b0507-52a1-47d2-aa4f-4ddb74ad3c4d_895079e4714149849d8b181aaa092d51_master.jpg",
      "MGT01157": "https://cdn.hstatic.net/products/200001046178/b2300adf-c92d-42ca-91d3-ed3d8fd224b1_9e9a17fab94f493bad247ca1133cdb60_master.jpg",
      "MGT01177": "https://cdn.hstatic.net/products/200001046178/01ceaca2-1657-4091-8820-c4ec0f90c1d9_0d7d275fa41847f0a0e796cc685dc1f5_master.jpg",
      "MGT01129": "https://cdn.hstatic.net/products/200001046178/0f97e1ce-f20e-4f5d-97bb-1c5674d4cbe8_371ce6eee76340b6aad6ba6e6385ccce_master.jpg",
      "MGT01087": "https://cdn.hstatic.net/products/200001046178/1964d9a3-586e-4746-8b55-5da6924318bd_1814c69bd6614997b89469c46701d53f_master.jpg",
      "MGT01130": "https://cdn.hstatic.net/products/200001046178/68d52658-d346-4738-9e48-119cf281099b_defdb43cb7e047a28bc01425429d3b8f_master.jpg",
      "MGT01076": "https://cdn.hstatic.net/products/200001046178/0076828a-abd0-410f-989c-ef2c78003e31_4a465f93bb004ad7858dedd8376eb908_master.jpg",
      "MGT01134": "https://cdn.hstatic.net/products/200001046178/05cddcbe-e2d5-4a1c-8688-10905bb4938c_42a8714c3a71472689c20d48fdaf8bc7_master.jpg",
      "MGT00894": "https://cdn.hstatic.net/products/200001046178/df6fe83e-af6b-45a0-b9b9-cfde74907976_021004172e784cafb3ce5f5d6e90c82b_master.jpg",
      "MGT01131": "https://cdn.hstatic.net/products/200001046178/b58d7f14-de06-4612-ba25-acf7b6e09605_896d28c9193648bdb920cddba4c6ebcd_master.jpg",
      "MGT01054": "https://cdn.hstatic.net/products/200001046178/cf9f919f-3079-4cf7-b0c6-f4a375002017_5cb1b85b9c214a34add0ef0daa6401f5_master.jpg",
      "MGT00858": "https://cdn.hstatic.net/products/200001046178/ded4dda9-9474-4047-bf71-4a689dcf660a_a70b39887f324789bbee6690a7312e12_master.jpg",
      "MGT00967": "https://cdn.hstatic.net/products/200001046178/c18c1af7-70f7-48e5-9bf8-4d709c2c4c8c_d5aa751862154c598655a0ac17cfcff9_master.jpg",
      "MDX-FF": "https://cdn.hstatic.net/products/200001046178/62c498ae-2196-4bf4-b54c-020d9c24eae8_88afd6bf374a4763b672ae12b2ce7319_master.jpg"
  };

  const BOXCARD = [{ name: "BOX" }, { name: "CARD" }];

  // [mã, tên, giá, giá cũ (0 = không giảm), có chọn BOX/CARD?, img]
  const ROWS = [
        ["MGT00765", "Nissan Z GT500 Niterra Motul Z NDDP Super GT Series 2023", 420000, 0, 1, ""],
    ["MGT00274", "Porsche Taycan Turbo S Shmee 150 Midnight Green", 790000, 0, 1, ""],
    ["MGT01133", "LB Works Lamborghini Aventador Limited Edition Orange MDX 2025", 400000, 0, 0, ""],
    ["MGT01248", "Nissan LB-Silhouette Works GT 35GT-RR VER.1 Matt Grey", 340000, 0, 1, ""],
    ["QZ00601", "Qube Carz Toyota TRD 3000GT White", 290000, 0, 1, ""],
    ["QZ01002", "Qube Carz Mazda RX-7 Veilside Fortune7 RED", 230000, 0, 1, ""],
    ["QZ00402", "Qube Carz Nissan LB-ER34 Super Silhouette Skyline RED Black", 290000, 0, 1, ""],
    ["QZ00102", "Qube Carz Nissan Skyline Kenmeri Liberty Walk #23 Heritage", 250000, 0, 1, ""],
    ["MGT01204", "Nissan LB-ER34 Super Silhouette Skyline Suppaiman Okinawa", 370000, 0, 1, ""],
    ["MGT01205", "Mazda RX-7 RE-Amemiya Matsukiyo Koku 3 Rotor NA-7 TAS 2025 Best Tuned CAR Award", 380000, 0, 1, ""],
    ["MGT01169", "Nissan LB Works Hakosuka Baby Blue", 320000, 0, 1, ""],
    ["MGT01212", "Nissan Skyline Kenmeri Liberty Walk Nissan Racing 75 Concept", 390000, 0, 1, ""],
    ["MGT01217", "LBWK Nissan Skyline GT-R R32 Kaido Works TAS 2025", 350000, 0, 1, ""],
    ["MGT01182", "Nissan LB-ER34 Super Silhouette Skyline Sport Yellow", 370000, 0, 1, ""],
    ["MT00581", "Nissan Silvia S15 D-MAX Metallic Orange", 590000, 0, 1, ""],
    ["MGT00528", "Nissan LB-Silhouette Works GT 35GT-RR VER.1 LB Racing", 1590000, 0, 0, ""],
    ["MGT01132", "Toyota Supra A80 TOP Secret GT-300 RED Chrome", 390000, 0, 1, ""],
    ["MGT00972", "Hyundai I20 N Rally1 #11 2023 Rally Croatia Power Stage Winner", 379000, 0, 1, ""],
    ["MGT01096", "BMW M5 Touring G99 Brooklyn Grey Metallic", 330000, 0, 1, ""],
    ["MGT01160", "Nissan Skyline GT-R Dark Metal Gray Nismo BNR34 CRS VER", 299000, 0, 1, ""],
    ["MGT01098", "Hyundai Ioniq 5N Mini GT RS-01T 2025 Tokyo Auto Salon", 350000, 0, 1, ""],
    ["MGT01118", "Toleman TG184 #19 Ayrton Senna 1984 Monaco Grand Prix 2ND Place", 350000, 0, 1, ""],
    ["MGT01143", "Porsche 911 GT3 R #77 Rexy Skeleton AO Racing 2025 IMSA Petit LE Mans", 650000, 0, 1, ""],
    ["MGT01185", "Nissan LB-Super Silhouette S15 Silvia #555 Team Liberty Walk 2025 Formula Drift Halloween Special", 510000, 0, 1, ""],
    ["MGT01157", "Nissan LB-Super Silhouette S15 Silvia #555 Team Mini GT Liberty Walk 2025 Formula Drift", 450000, 0, 1, ""],
    ["MGT01177", "LB Works Lamborghini Huracan GT Ronin", 450000, 0, 1, ""],
    ["MGT01129", "Lamborghini Huracán GT3 EVO2 #45 NO.45 DEX Imaging 2024 IMSA Daytona 24 HRS", 590000, 0, 1, ""],
    ["MGT01182-CARD", "[Card Nhật] 1/64 Nissan LB-ER34 R34 Super Silhouette Skyline Sport Yellow / LB Blister Packaging LBWK Card", 1490000, 0, 0, ""],
    ["MGT01054-CARD", "[Card Nhật] 1/64 Nissan LB-Super Silhouette S15 Silvia Athlete LBWK Card", 1190000, 0, 0, ""],
    ["MGT00858-CARD", "[Card Nhật] 1/64 Nissan LB-Super Silhouette S15 Silvia LBWK 2024 Fausto LBWK Card", 1490000, 0, 0, ""],
    ["MGT01087-CARD", "[Card Nhật] 1/64 Lamborghini Aventador LB-Works Matte Black LBWK Card", 1290000, 0, 0, ""],
    ["MGT00967-CARD", "[Card Nhật] 1/64 Lamborghini Huracan LB-Works MAD Mike Nimbul LBWK Card", 1490000, 0, 0, ""],
    ["MGT00049", "LB★Works Nissan GT-R R35 LBWK Satin Silver", 3456000, 0, 0, ""],
    ["MGT00004", "LB★Works Nissan GT-R R35 LBWK Light Blue", 2290000, 0, 0, ""],
    ["MGT01105", "Bugatti Bolide RED", 430000, 0, 1, ""],
    ["MDX-FF", "[MDX] Event SET Toyota Supra & Mazda RX-7 F&F Fast AND Furious", 4850000, 5500000, 0, ""],
    ["QZ00101", "Nissan Skyline Kenmeri Liberty Walk Baby Blue Qubecarz", 230000, 0, 1, ""],
    ["MGT01106", "Mazda RX-7 RE-Amemiya Silver Metallic", 350000, 0, 1, ""],
    ["MGT01087", "LB Works Lamborghini Aventador Limited Edition Matte Black", 550000, 0, 1, ""],
    ["MGT01130", "Shelby GT500 Dragon Snake Concept Black Gold", 330000, 0, 1, ""],
    ["MGT01076", "Mercedes-Benz 190 E 2.3-16 #11 Ayrton Senna 1984 Nürburgring Race OF Champions W/ Figure", 350000, 0, 1, ""],
    ["MGT01134", "Lamborghini Countach 25TH Anniversary White", 330000, 0, 1, ""],
    ["MGT00894", "BMW 750IL Sorrento Blue Metallic", 290000, 0, 1, ""],
    ["MGT01089", "Nissan GT-R 2013 Dark Metal Gray Nismo R35 CRS Version", 330000, 0, 1, ""],
    ["MGT01131", "Lancia Delta HF Integrale Evoluzione #1 1993 Rallye Monte-Carlo", 350000, 0, 1, ""],
    ["MGT01149", "Toyota GR86 LB Nation Black Gold", 350000, 0, 1, ""],
    ["MGT01140", "Subaru Impreza WRC97 #1 1999 DRM Champion", 350000, 0, 1, ""],
    ["MGT01082", "BMW Z8 Alpina Alpine Blue", 350000, 0, 1, ""],
    ["MGT01135", "LB-Silhouette Works Murcielago GT EVO Yellow", 350000, 0, 1, ""],
    ["MGT00852", "Mercedes-Benz 190E 2.5-16 Evolution II Astral Silver", 320000, 0, 1, ""],
    ["MGT01007", "Racing Bulls Vcarb 01 #22 Yuki Tsunoda 2024 F1 2024 Bahrain GP", 430000, 0, 1, ""],
    ["MGT01121", "Lamborghini Revuelto Viola 30TH Matte", 330000, 0, 1, ""],
    ["MGT01100", "Lamborghini Countach LB-Works RED", 300000, 0, 1, ""],
    ["MGT00190", "LB Works Lamborghini Huracan VER.2 Magic Bronze", 1900000, 0, 0, ""],
    ["MGT01103", "LB Works Toyota GR Supra RED White", 380000, 0, 1, ""],
    ["MGT01101", "Mazda RX-7 LB-Super Silhouette FD-Niles LB-Super", 350000, 0, 1, ""],
    ["MGT00697", "Nissan Skyline GT-R R34 Tommykaira R-Z Millenium Jade", 250000, 0, 1, ""],
    ["MGT01086", "BMW M5 G90 Isle OF MAN Green Metallic", 400000, 0, 1, ""],
    ["MGT01052", "Porsche 911 GT3 R #77 Roxy AO Racing 2024 IMSA Road America", 850000, 0, 1, ""],
    ["MGT01058", "Bugatti W16 Mistral Black", 450000, 0, 1, ""],
    ["MGT01122", "Ford Mustang Mach 1 1971 Race RED", 300000, 0, 1, ""],
    ["MGT01077", "LB-Works LBWK Ford Mustang Triple Yellow", 320000, 0, 1, ""],
    ["MGT01124", "LB-Silhouette Works GT Nissan 35GT-RR VER.2 Blue LBWK", 399000, 0, 1, ""],
    ["MGT01083", "Mclaren 720S LB Works THE Boring Concept TBC", 450000, 0, 1, ""],
    ["MGT00840", "[KÈM CHỮ KÝ] LBWK Nissan Silvia S15 Gold Chrome - Harajuku Store Exclusive", 5500000, 0, 0, ""],
    ["MGT00657", "Chase Included - Lamborghini Urus Performante Rosso Mars", 590000, 0, 1, ""],
    ["MGT00085", "LB Works Nissan GT-R R35 Magic Pearl LBWK", 2500000, 0, 0, ""],
    ["MGT00616", "Chase Included - Nissan Skyline GT-R Tommykaira R-Z Midnight Purple", 290000, 0, 1, ""],
    ["MGT01022", "Nissan LB-Super Silhouette S15 Silvia Garasidrift X LBWK 2025", 370000, 0, 1, ""],
    ["MGT01067", "Toyota Supra A80 TOP Secret GT-300 TOP Secret Purple", 319000, 0, 1, ""],
    ["MGT01081", "Lamborghini Countach LB-Works Black", 300000, 0, 1, ""],
    ["MGT01053", "Lamborghini LB-Silhouette Works Murcielago GT EVO Black", 400000, 0, 1, ""],
    ["", "Nissan LB-Super Silhouette S15 Silvia #555 V2 2024 Formula Drift Japan 823", 450000, 0, 1, ""],
    ["MGT01009", "Porsche 911 Dakar Rally 1974", 300000, 0, 1, ""],
    ["", "Volkswagen ID.Buzz Candy White / Energetic Orange 1061", 299000, 0, 1, ""],
    ["MGT00996", "[Chase Included] Mazda RX-7 (FD3S) Itosyoukai Rei-gouki with RE Amemiya 9", 349000, 0, 1, ""],
    ["", "Top Secret Nissan Skyline GT-R VR32 Top Secret Gold 431", 649000, 0, 1, ""],
    ["MGT00893", "Range Rover 1971 International Hillrally 1 Winner", 250000, 0, 1, ""],
    ["MGT00289", "Porsche Taycan Turbo S Carmine RED", 690000, 0, 1, ""],
    ["MGT00998", "BMW Z8 Silver", 359000, 0, 1, ""],
    ["MGT00661", "Bugatti Divo White", 550000, 0, 1, ""],
    ["MGT00733", "Lamborghini Countach LPI 800-4 Orion Yellow", 349000, 0, 1, ""],
    ["MGT00419", "Porsche RUF CTR 1987 Blossom Yellow", 449000, 0, 1, ""],
    ["", "Porsche RUF CTR Anniversary Dark Blue 451", 499000, 0, 1, ""],
    ["MGT00746", "Lamborghini Huracán STO Viola Pasifae", 290000, 0, 1, ""],
    ["MGT01059", "Nissan LB-ER34 ( R34 ) Super Silhouette Athlete Collet", 550000, 0, 1, ""],
    ["MGT01054", "Nissan LB-Super Silhouette S15 Silvia Athlete", 370000, 0, 1, ""],
    ["MGT00781", "Nissan LB-Super Silhouette S15 Silvia Auto Finesse Sema 2023", 449000, 0, 1, ""],
    ["MGT00958", "Porsche 911 Dakar Black", 350000, 0, 1, ""],
    ["MGT00978", "Toyota Supra VeilSide Combat V-II Combat Grey", 299000, 0, 1, ""],
    ["MGT00895", "Nissan LB-Super Silhouette S15 Silvia #555 2023 Formula Drift Japan", 450000, 0, 1, ""],
    ["MGT00850", "Nissan Z GT500 #24 \"Realize Corportation Advan Z\" Kondo Racing 2023 Super GT Series", 390000, 0, 1, ""],
    ["MGT00793", "Porsche 911 GT3 R #27 Hubauto Racing 2023 FIA GT World CUP 70TH Macau Grand Prix", 700000, 0, 1, ""],
    ["MGT00804", "2023 Macau GP Porsche 911 GT3 R #28 Hubauto Racing", 599000, 0, 1, ""],
    ["MGT00953", "Mazda AZ-1 Liberty Walk LB40 White 2024 Tokyo Auto Salon", 319000, 0, 1, ""],
    ["MGT00844", "Nissan LB-ER34 R34 Super Silhouette Skyline Black", 520000, 0, 1, ""],
    ["", "Lamborghini Huracan LB★Works ver. 2 Mad Mike Nimbul 967", 580000, 0, 0, ""],
    ["MGT00966", "Lamborghini Countach LB-Works White 2024 Tokyo Auto Salon", 349000, 0, 1, ""],
    ["MGT00869", "[KÈM Figure] 1/64 Nissan Skyline GT-R R32 Nismo Gunmetal With Matsuda Figure Tsugio Matsuda Collection", 450000, 0, 1, ""],
    ["MGT01011", "Mazda RX-7 LB-Super Silhouette IMSA", 280000, 0, 1, ""],
    ["MGT00805", "Porsche 911 Dakar Rallye Design Package", 499000, 0, 1, ""],
    ["MGT00772", "Lamborghini Huracan GT3 EVO2 #83 Iron Dames 2023 IMSA Daytona 24 HRS", 1590000, 0, 0, ""],
    ["MGT00964", "Porsche 911 Dakar ICE Grey Metallic Rally 1978", 220000, 0, 1, ""],
    ["MGT00886", "Chase Included - Lamborghini Revuelto Giallo", 330000, 0, 1, ""],
    ["MGT00985", "Nissan Z Veilside FFZ400 Gold Chrome", 449000, 0, 1, ""],
    ["", "Mazda RX-7 RE-Amemiya 20B NA 3Rotor-7 “Ama-san Go” 1046", 349000, 0, 1, ""],
    ["", "Lamborghini Countach LPI 800-4 Viola 30th 865", 289000, 0, 1, ""],
    ["MGT00990", "Mazda RX-7 LB-Super Silhouette 787B", 320000, 0, 1, ""],
    ["MGT00698", "Nissan Skyline Kenmeri Liberty Walk LBWK Kuma", 290000, 0, 1, ""],
    ["MGT00851", "Abarth 595 LB-Works x Abas Works", 359000, 0, 1, ""],
    ["MGT00785", "Mazda RX-7 LB-Super Silhouette Liberty Walk Black", 449000, 0, 1, ""],
    ["MGT00987", "Nissan Skyline GT-R R32 Veilside Combat C-I GEM RED", 299000, 0, 1, ""],
    ["MGT00782", "Nissan Z LB★Nation Works LB", 300000, 0, 1, ""],
    ["", "LB-Super Silhouette Nissan Silvia (S15) “Garuda” 652", 359000, 0, 1, ""],
    ["MGT00961", "Chase Included - Toyota Supra (A80) Top Secret GT-300 Top Secret Gold", 250000, 0, 1, ""],
  ];

  const slug = (s) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const money = (n) => n.toLocaleString("vi-VN") + "đ";
  const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
  const norm = (s) => s.replace(/\s+/g, " ").trim().toLowerCase();

const have = new Set(window.AKA_PRODUCTS.map((p) => norm(p.name)));
  const haveCode = new Set(window.AKA_PRODUCTS.map((p) => p.code));
  const added = [];

  ROWS.forEach(([code, name, price, old, boxcard, img]) => {
    if (have.has(norm(name)) || (code && haveCode.has(code))) return; // không thêm trùng
    const p = {
      id: slug(name).slice(0, 80),
      code: code,
      name: name,
      brand: "MINI GT",
      cat: "xe",
      scale: "1:64",
      price: price,
      old: old,
      images: [img || IMG[code.replace(/-CARD$|LB$/, "")] || PLACEHOLDER],
      desc: [
        "Thương hiệu: MINI GT.",
        "Mẫu: " + name + " – " + code + ".",
        "Tỉ lệ 1:64 – xe mô hình dành cho người sưu tầm.",
        "Sản phẩm chính hãng, đóng gói cẩn thận trước khi giao.",
      ],
    };
    if (boxcard) p.types = BOXCARD;
    window.AKA_PRODUCTS.push(p);
    added.push(p);
  });

  // Vẽ thẻ vào trang "Tất cả sản phẩm"
  const grid = document.getElementById("product-grid");
  if (grid) {
    const html = added.map((p) => {
      const off = p.old > p.price ? Math.round((1 - p.price / p.old) * 100) : 0;
      return `
      <div class="product-card" data-cat="${p.cat}" data-brand="${p.brand}" data-price="${p.price}"${p.old ? ` data-old="${p.old}"` : ""}>
        <div class="product-image">
          ${off ? `<span class="sale">-${off}%</span>` : ""}
          <img src="${p.images[0]}" alt="${esc(p.name)}" loading="lazy">
        </div>
        <div class="product-info">
          <p class="brand">${p.brand}</p>
          <h3>${esc(p.name)}</h3>
          <div class="price">
            <span class="new-price">${money(p.price)}</span>
            ${p.old > p.price ? `<span class="old-price">${money(p.old)}</span>` : ""}
          </div>
          <button class="add-cart">Thêm vào giỏ</button>
        </div>
      </div>`;
    }).join("");
    grid.insertAdjacentHTML("beforeend", html);
  }
})();