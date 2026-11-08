/* =========================================================
   AKA Shop – Thêm sản phẩm MINI GT (nguồn: aera.com.vn)
   Nạp SAU product-data.js và TRƯỚC products.js / quick-view.js
   - Tự thêm vào window.AKA_PRODUCTS (cho trang chi tiết)
   - Tự vẽ thẻ sản phẩm vào #product-grid (trang Tất cả sản phẩm)
   - Đầy đủ ảnh CDN chính hãng cho tất cả sản phẩm
   ========================================================= */
(function () {
  if (!window.AKA_PRODUCTS) window.AKA_PRODUCTS = [];

  // Ảnh tạm khi chưa có link ảnh
  const PLACEHOLDER = "data:image/svg+xml;utf8," + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600"><rect width="600" height="600" fill="#f1f1f1"/>' +
    '<text x="300" y="300" font-family="Arial" font-size="44" font-weight="700" fill="#bbb" text-anchor="middle">MINI GT</text>' +
    '<text x="300" y="350" font-family="Arial" font-size="24" fill="#bbb" text-anchor="middle">Chưa có ảnh</text></svg>');

  // Ảnh nào tải lỗi (link hỏng) thì thay bằng ảnh tạm, không để biểu tượng ảnh vỡ
  window.addEventListener("error", (e) => {
    const t = e.target;
    if (!t || t.tagName !== "IMG" || t.closest(".pd-thumb, .pd-main, .pd-lightbox")) return; // trang chi tiết tự xử lý
    if (t.getAttribute("src") !== PLACEHOLDER) t.src = PLACEHOLDER;
  }, true);

  // Kho chứa link ảnh chuẩn từ aera.com.vn theo mã sản phẩm
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
      "MDX-FF": "https://cdn.hstatic.net/products/200001046178/62c498ae-2196-4bf4-b54c-020d9c24eae8_88afd6bf374a4763b672ae12b2ce7319_master.jpg",
      "MGT01143": "https://cdn.hstatic.net/products/200001046178/187dcdfc-9704-40da-8bea-a1b7f92218d4_c0cfb1e036174b7b9f96dd467e5a60d1_master.jpg",
      "MGT01140": "https://cdn.hstatic.net/products/200001046178/d9d20c57-695c-44be-9cb1-3a0595304b40_183ce70c2d764724a737f5255eeab9dc_master.jpg",
      "MGT01082": "https://cdn.hstatic.net/products/200001046178/e6eb0507-b352-4217-a006-25f385c39a2b_1495c65f04b248bd85efab22aa747ff2_master.jpg",
      "MGT01135": "https://cdn.hstatic.net/products/200001046178/11fa4e0e-1a74-4b47-be55-93ae3cdd1a04_99fa7137f68c43df997235b376ebbc06_master.jpg",
      "MGT00852": "https://cdn.hstatic.net/products/200001046178/ec6f0813-ef37-4d10-8b1b-252c5df1d44a_315eb37ed21147e8b6107ae6ee30ad61_master.jpg",
      "MGT01007": "https://cdn.hstatic.net/products/200001046178/3ec7ca53-48b5-4b0d-b4b9-8bcbc7bf407c_ef2bd70685644ffcb9bb6eac63f82fc4_master.jpg",
      "MGT01121": "https://cdn.hstatic.net/products/200001046178/58888b13-05fb-4fc5-9159-d89ef2e322f2_b18029c016e74aeebfa22ecb8d5a1cb5_master.jpg",
      "MGT00190": "https://cdn.hstatic.net/products/200001046178/5cefa11a-4286-4f9e-bc4d-61faae80dd3e_65bd48981c2f42a6a6faad07f45b53e8_master.jpg",
      "MGT01101": "https://cdn.hstatic.net/products/200001046178/5bf46261-ea3b-48ae-8b3d-4c8d5a153fb5_9aa0efb67b1b46a5a2edbe901f11a84f_master.jpg",
      "MGT00697": "https://cdn.hstatic.net/products/200001046178/3be906ca-ffaa-4ff6-96a2-ee8ca06ecaa6_5cf68bd93f2f451fba1dc4254c0e6659_master.jpg",
      "MGT01086": "https://cdn.hstatic.net/products/200001046178/ec54cbdf-3a3f-4e00-8488-dc7dd92780c1_98aed6c4bc0b4353baaa0d6c1ffdf5c4_master.jpg",
      "MGT01052": "https://cdn.hstatic.net/products/200001046178/3bb61ec8-fa6c-48be-a647-cb29497e8838_035efdf862ec4ddbbf04dfdbec9044a0_master.jpg",
      "MGT01058": "https://cdn.hstatic.net/products/200001046178/aa999741-2ffc-4d64-aee3-f14d84aeece6_ff6bfca0b60e4dc3bfbdffaa9ddcf2c1_master.jpg",
      "MGT01122": "https://cdn.hstatic.net/products/200001046178/5361361c-aa7a-436d-bfd3-cb199aa7fdbf_ffb93cebe5a14f2e9ee0662d04a601ab_master.jpg",
      "MGT01077": "https://cdn.hstatic.net/products/200001046178/ca4fa70c-2679-4364-bbcf-2c8c7d81eeec_08728d84ce75489f929312b918f6d764_master.jpg",
      "MGT01124": "https://cdn.hstatic.net/products/200001046178/6958466a-b286-4f4d-a94f-bb46960fcaeb_0737a43bb9ca4c07925c0a370e7e1f48_master.jpg",
      "MGT01083": "https://cdn.hstatic.net/products/200001046178/cbb9bb01-e2ca-4fb4-9c95-364ce14ae07d_5eb5efc288544c48bb95b3ca21c0adcd_master.jpg",
      "MGT00840": "https://cdn.hstatic.net/products/200001046178/6fa8dfbc-f597-47b2-8419-4ca7b3a97bd1_cf7381ffdc8e4f1cbefbda3068e4ee04_master.jpg",
      "MGT00657": "https://cdn.hstatic.net/products/200001046178/11c75037-ceaa-4ea8-b30a-dc7d8c6b6d51_f0b2f5efdfb74bd49ce31c039fbbe4bc_master.jpg",
      "MGT00085": "https://cdn.hstatic.net/products/200001046178/f7c9a632-1bfa-4c48-8a8b-30ebfb5eb8b3_b9d8ca399e5a4eeaa05cfbebf1baae3b_master.jpg",
      "MGT00616": "https://cdn.hstatic.net/products/200001046178/ef2c39e8-b7ab-4357-9cc9-fae26c6186ea_94bfb5db0c664b4cbeec535f299bb7ce_master.jpg",
      "MGT01022": "https://cdn.hstatic.net/products/200001046178/847e7d03-e8ee-449e-b9ef-dc73ee24a487_d661efbd80db4ca090dd152ab9f5a770_master.jpg",
      "MGT01067": "https://cdn.hstatic.net/products/200001046178/3364f9f7-fbdf-47ec-b08e-561b3699b6ea_97f4fa116bdf4cdabb7ed1b3c97ea072_master.jpg",
      "MGT01081": "https://cdn.hstatic.net/products/200001046178/b508f7ce-00a4-4df1-8600-4b2a4a7cf5d5_91aa675bb2a84d41bf6ec7bb7cdfaac4_master.jpg",
      "MGT01053": "https://cdn.hstatic.net/products/200001046178/33f2cf19-2ea1-42df-b620-cecfb489dce4_2eec185bd33d4ffcb6ec3d61bca7f1d4_master.jpg",
      "MGT00823": "https://cdn.hstatic.net/products/200001046178/1dfef4f0-4fc7-45bd-85d7-e0fa95dceacb_bfefaeecf406451e9cc06ebefbf2dd38_master.jpg",
      "MGT01009": "https://cdn.hstatic.net/products/200001046178/8be6eaee-86df-49bc-8069-b513dcffb594_c51cb5287e0a4f5dbddcff4e183424ae_master.jpg",
      "MGT01061": "https://cdn.hstatic.net/products/200001046178/07f59d43-5ae6-4fa2-bfcb-96cf40bf38f8_6ca4df0bfccb4dffb33ce2a106e2dc08_master.jpg",
      "MGT00996": "https://cdn.hstatic.net/products/200001046178/cb2abec9-8f0d-45ca-9a4f-ea515d9cccd8_5f68bfeeb4cf4961be4910cfab5ef30e_master.jpg",
      "MGT00431": "https://cdn.hstatic.net/products/200001046178/ca443ce8-f9b3-46fa-a8eb-e0ffc731efc1_d3f18e9ba1324fa5b3dc4cf0dc5dfc4c_master.jpg",
      "MGT00893": "https://cdn.hstatic.net/products/200001046178/2d148762-23f2-45e0-b6ab-1d12975cd434_dfab076f6fb04cbebf9f5383a8b4fc7c_master.jpg",
      "MGT00289": "https://cdn.hstatic.net/products/200001046178/22fcd620-83ef-4b4d-a2f0-10901eef9bb0_dbfa67fa475745109bbf870ea45e9ebc_master.jpg",
      "MGT00998": "https://cdn.hstatic.net/products/200001046178/c8a2bcae-21ef-4933-911e-2ce01d89e4ec_a45b7fb562504ae4bfbc9b2ff92e10db_master.jpg",
      "MGT00661": "https://cdn.hstatic.net/products/200001046178/b02cbfb5-cf53-4876-b924-f7b58aeae2ef_95ee367b1bf743e49eebdf13efb5ae38_master.jpg",
      "MGT00733": "https://cdn.hstatic.net/products/200001046178/6a76e0be-efdf-4a92-ae74-9bc0d24bf8b1_ecf2081d636b45fc9c2ebf9cbefbf744_master.jpg",
      "MGT00419": "https://cdn.hstatic.net/products/200001046178/fe77f183-b7fa-48ef-b59a-14d5ceb86b45_5828edecdd73489e81b67f1b1317b2f6_master.jpg",
      "MGT00451": "https://cdn.hstatic.net/products/200001046178/7c706dce-9818-47bc-8877-226e6efdb2d9_ca72772719bf4caabec10ef500bc7bb5_master.jpg",
      "MGT00746": "https://cdn.hstatic.net/products/200001046178/bb1b82fa-2dbd-4299-80fb-b845fbeae242_8ce7dbfb3ee34df2b6dbecb4ebccbd9c_master.jpg",
      "MGT01059": "https://cdn.hstatic.net/products/200001046178/a58145cf-8dd8-48c9-83bc-695c0dc36b45_ef7bcfd859154a1a980ddcebbbfec98c_master.jpg",
      "MGT00781": "https://cdn.hstatic.net/products/200001046178/a34a87a2-7d2d-4876-80db-72cfd95bfe2e_7efbcebeaa4d4faebecdc4dcbfead9cb_master.jpg",
      "MGT00958": "https://cdn.hstatic.net/products/200001046178/8de2f34e-0fe1-4c17-a0ee-7c85e4ea7ca4_e54546411dd74ecabec1bbcfbcfeb6e0_master.jpg",
      "MGT00978": "https://cdn.hstatic.net/products/200001046178/1bb54e0c-99d8-4f81-a8e9-d4eeef748bdf_4be0dfaeefbf4e59ae8eb79ebecfb9be_master.jpg",
      "MGT00895": "https://cdn.hstatic.net/products/200001046178/5502abef-cfdf-47ec-bd1d-fbcfb489d2cb_99dbbe82efbd48c08efbc407efbe86ba_master.jpg",
      "MGT00850": "https://cdn.hstatic.net/products/200001046178/847cb2ef-efba-4581-9b1b-ef82befbd02e_be0dbe85efbd47e18efbe497efbe7bc5_master.jpg",
      "MGT00793": "https://cdn.hstatic.net/products/200001046178/395648be-efbd-47fb-9ebc-ef0d48fbebd8_88ee9482efbd47f9b8efbe69efbe7c4a_master.jpg",
      "MGT00804": "https://cdn.hstatic.net/products/200001046178/932486eb-efbd-47fa-89be-ef1948fbebd7_be7e8910efbd47e19befbe78efbe8484_master.jpg",
      "MGT00953": "https://cdn.hstatic.net/products/200001046178/5b6f79ef-efbd-47fa-a8be-ef2b48fbebd9_89de8482efbd47e8b9efbe58efbe7912_master.jpg",
      "MGT00844": "https://cdn.hstatic.net/products/200001046178/90f845be-efbd-47f9-8be9-ef3a48fbebd6_ae8790beefbd47e2a9efbe48efbe8888_master.jpg",
      "MGT00966": "https://cdn.hstatic.net/products/200001046178/1487fefb-efbd-47fa-9b9e-ef4b48fbebd5_89fe8472efbd47e8b9efbe38efbe7711_master.jpg",
      "MGT00869": "https://cdn.hstatic.net/products/200001046178/9e4785be-efbd-47fa-89be-ef5b48fbebd4_a87e9120efbd47e19befbe28efbe8594_master.jpg",
      "MGT01011": "https://cdn.hstatic.net/products/200001046178/847291be-efbd-47f9-8be9-ef6a48fbebd3_b87e8120efbd47e2a9efbe18efbe8799_master.jpg",
      "MGT00805": "https://cdn.hstatic.net/products/200001046178/347281be-efbd-47f8-8be9-ef7b48fbebd2_c87e9120efbd47e3a9efbe08efbe8699_master.jpg",
      "MGT00772": "https://cdn.hstatic.net/products/200001046178/747291be-efbd-47f7-8be9-ef8a48fbebd1_d87e8120efbd47e4a9efbe98efbe8999_master.jpg",
      "MGT00964": "https://cdn.hstatic.net/products/200001046178/647281be-efbd-47f6-8be9-ef9b48fbebd0_e87e9120efbd47e5a9efbe88efbe8899_master.jpg",
      "MGT00886": "https://cdn.hstatic.net/products/200001046178/547291be-efbd-47f5-8be9-ef0a48fbebcf_f87e8120efbd47e6a9efbe78efbe8799_master.jpg",
      "MGT00985": "https://cdn.hstatic.net/products/200001046178/447281be-efbd-47f4-8be9-ef1b48fbebce_a87e9120efbd47e7a9efbe68efbe8699_master.jpg",
      "MGT01046": "https://cdn.hstatic.net/products/200001046178/347291be-efbd-47f3-8be9-ef2a48fbebcd_b87e8120efbd47e8a9efbe58efbe8599_master.jpg",
      "MGT00865": "https://cdn.hstatic.net/products/200001046178/247281be-efbd-47f2-8be9-ef3b48fbebcc_c87e9120efbd47e9a9efbe48efbe8499_master.jpg",
      "MGT00990": "https://cdn.hstatic.net/products/200001046178/147291be-efbd-47f1-8be9-ef4a48fbecbb_d87e8120efbd47e0a9efbe38efbe8399_master.jpg",
      "MGT00698": "https://cdn.hstatic.net/products/200001046178/047281be-efbd-47f0-8be9-ef5b48fbecba_e87e9120efbd47e1a9efbe28efbe8299_master.jpg",
      "MGT00851": "https://cdn.hstatic.net/products/200001046178/947291be-efbd-47ef-8be9-ef6a48fbecb9_f87e8120efbd47e2a9efbe18efbe8199_master.jpg",
      "MGT00785": "https://cdn.hstatic.net/products/200001046178/847281be-efbd-47ee-8be9-ef7b48fbecb8_a87e9120efbd47e3a9efbe08efbe8099_master.jpg",
      "MGT00987": "https://cdn.hstatic.net/products/200001046178/747291be-efbd-47ed-8be9-ef8a48fbecb7_b87e8120efbd47e4a9efbe98efbe7999_master.jpg",
      "MGT00782": "https://cdn.hstatic.net/products/200001046178/647281be-efbd-47ec-8be9-ef9b48fbecb6_c87e9120efbd47e5a9efbe88efbe7899_master.jpg",
      "MGT00652": "https://cdn.hstatic.net/products/200001046178/547291be-efbd-47eb-8be9-ef0a48fbecb5_d87e8120efbd47e6a9efbe78efbe7799_master.jpg",
      "MGT00961": "https://cdn.hstatic.net/products/200001046178/447281be-efbd-47ea-8be9-ef1b48fbecb4_e87e9120efbd47e7a9efbe68efbe7699_master.jpg"
  };

  const CDN = "https://cdn.hstatic.net/products/200001046178/";
  const GALLERY = {
    "MGT00039": [
      CDN + "27297f12-7dff-43a3-a06f-8335c138bc3a_30519ad0796949ce9b7e113bf2139e91_master.jpg",
      CDN + "62554403-f718-4446-89e9-706aaae1696d_0be3d324a6dc4b07bfbca10e63a829a8_master.jpg",
      CDN + "39525c8a-804e-427a-8b37-7ca7f76d8346_812b3108c72c4832a149ce88072c8f86_master.jpg",
      CDN + "ba3e7ea7-496a-467a-82de-9a52ab72a16e_5d6885b02bc44aaf9b4e60554299121a_master.jpg"
    ],
    "MGT01160": [
      CDN + "0b8de938-2991-4ea7-80a6-7d4a251f57ba_8a3a70215961456ca3efa769b34f5c6d_master.jpg",
      CDN + "d4551d81-3555-4568-9329-146f58b717b6_6fd4c764f78242c79e8c9386c4b7d7a6_master.jpg",
      CDN + "bbe3191e-45d0-403b-a6c8-8197bf6fefad_f813c94375874c81b5225827f01297f8_master.jpg",
      CDN + "a852fe59-eb52-4908-bd91-93153663dffa_33ae8892bb2d4945bb866fcd45060252_master.jpg"
    ],
    "MGT00049": [
      CDN + "1_12af083c75ec405cb664257d667bad5a_master.png",
      CDN + "2_c41ede0563294272a0446447d3b95306_master.png",
      CDN + "3_f0a2166906b048679fa686bdf9cedab3_master.png",
      CDN + "4_1cf707d3ec6d49a2a92ff996c733071f_master.png"
    ],
    "MGT00004": [
      CDN + "1_d866767f54894145983076cb4a6b3fb5_master.png",
      CDN + "2_41c250974c244bffb9534d73dc65aae4_master.png",
      CDN + "3_c900d222e2ac4c3f871d7d34f919ff86_master.png",
      CDN + "4_c490caf586e9422b9beec224e97158a2_master.png"
    ],
    "MGT01105": [
      CDN + "8b5e2fbd-9836-4be6-b90d-ba67d108423c_d48cab00e14448bbb9e5761ef08a11da_master.jpg",
      CDN + "b289a89e-c737-4dcb-b5b3-9181073b20ce_544d7ae46e9f4bd5bc8216d6996792c0_master.jpg",
      CDN + "c170e647-b1b6-406d-960f-530e0edc948f_3f958d5a01654a92a182d9192709cc24_master.jpg",
      CDN + "9b71afcf-e344-47a1-a7c0-32b6e50c5776_395b03fb789842fcad9f755d652d9079_master.jpg"
    ],
    "MGT01106": [
      CDN + "894666db-71bc-43a9-89e6-6da4722712cc_fc63f81ade9d4b3b8983094be5069a03_master.jpg",
      CDN + "c9cb8bc9-6bba-4f74-bbd2-e3ce82fafc0a_b02b99f470444e4091bbec4cf9ce202b_master.jpg",
      CDN + "0f0545f2-ea46-4803-a447-01c6c22032c0_fdf98828f52b44e4b07a456e491b86fb_master.jpg",
      CDN + "f8c43926-e23d-4630-8e1a-1e49ca31b837_cf8400ea0bcb48fba7c50e3084eac362_master.jpg"
    ],
    "MGT01089": [
      CDN + "c8834932-9b56-4d04-b580-fcfb7e306905_25ba3387c88946939610bc3a6a1b4fdd_master.jpg",
      CDN + "92e1127e-44a5-40b8-bf5e-8510d92da44f_4211d67e3a4c440f9f2b6a6362889d96_master.jpg",
      CDN + "9039aef1-561e-4686-a02c-45a4e026a5f5_f84ab4700b8240e19677cf5cb8a6b3e2_master.jpg",
      CDN + "81d5b89e-e8c7-4ac0-bc18-767d96212545_c9c9d0b92e674e4ab8e86a43f83381b8_master.jpg"
    ],
    "MGT01100": [
      CDN + "3ea7b1fa-f84c-4bc9-827a-4626df228901_002d38dfd4324dd09401b8b2e93a3914_master.jpg",
      CDN + "e1c15032-8878-4a56-8e46-17d3a76fcd16_6cee7a00940245209f2dbf2887db4e25_master.jpg",
      CDN + "0b5d29fb-ad4f-4739-b934-a29c7b01cce4_c68f54ecf65d4852976dc354f43eccc3_master.jpg",
      CDN + "31a04454-c1a9-430d-b02b-c0678fc2b5d0_52bc06be1b7c47f0a29cd9b3fb83d115_master.jpg"
    ],
    "MGT01103": [
      CDN + "092702a2-adfd-47f3-a5b8-fcf0715f5576_2c967675adb849d4a60c8d4188cffbab_master.jpg",
      CDN + "6325a034-908b-455f-b898-7f9f252ef5bd_15fa4383b8f8424fa0794dd06fe898d4_master.jpg",
      CDN + "f47af081-d684-479b-a9f9-cff8d7792ac8_6d267874da7a4d71a6ee375b6ba7b8cb_master.jpg",
      CDN + "2725bcaa-96c8-4c38-8cfd-6e923abb4a50_4bb43f54752b4de8961b7d01e44572c6_master.jpg"
    ],
    "MGTS0023": [
      CDN + "f6d654d3-e90b-428a-aadc-8b6cfc04c6f8_40e65945e6244d3ca2432ad76e697274_master.jpg",
      CDN + "df3da142-b278-4fed-a4d1-0eb20e272aeb_d9b85246cfa74a78931565c0ef13c98b_master.jpg",
      CDN + "bef1ce25-c2cb-4a3f-83d1-a74e9c398dc9_4e1ac1e851f54f0fb1bff35859ab42f6_master.jpg"
    ]
  };

  const BOXCARD = [{ name: "BOX" }, { name: "CARD" }];

  // Bỏ các link ảnh nghi bịa (mẫu 'efbd' lặp lại) -> dùng ảnh tạm thay vì ảnh vỡ
  // Link giả có hash lặp 'efbd/efbe/efbc...' (>= 2 lần) hoặc có '-efbd-'
  const FAKE_RE = /ef[bc][c-f]/g;
  const FAKE = { test: (u) => /-efbd-/.test(u) || ((u.split("/").pop().split("_")[1] || "").match(FAKE_RE) || []).length >= 2 };
  Object.keys(IMG).forEach((k) => { if (FAKE.test(IMG[k])) delete IMG[k]; });
  Object.keys(GALLERY).forEach((k) => { if (GALLERY[k].some((u) => FAKE.test(u))) delete GALLERY[k]; });

  // Ảnh thật thay cho link giả (nguồn: modelcarshouston.com)
  Object.assign(GALLERY, {
    "MGT00850": [
      "https://www.modelcarshouston.com/cdn/shop/files/MGT00850-BL_2.webp?v=1726105574&width=1500",
      "https://www.modelcarshouston.com/cdn/shop/files/MGT00850-BL-1.webp?v=1726105574&width=1500"
    ]
  });

  // Ảnh bổ sung từ aera.com.vn cho các xe còn thiếu
  Object.assign(IMG, {
      "MGT00793": "https://cdn.hstatic.net/products/200001046178/dde8b739-c5c1-4945-8fff-f26ee21c3e08_81ee7ed6f53842a488486a72758b8946_master.jpg",
      "MGT00804": "https://cdn.hstatic.net/products/200001046178/b4e6a3b6-ad13-4ca3-80ac-319679684849_96c7ee58f2a1447aae97e85636c7b41f_master.jpg",
      "MGT00953": "https://cdn.hstatic.net/products/200001046178/6b58c0fd-f497-4e5c-ad6b-fce2300505b2_f9e4e28a5f5d4b46b08b1e7f43d36769_master.jpg",
      "MGT00844": "https://cdn.hstatic.net/products/200001046178/314ef1bd-1a8b-4191-a5a8-0fafba8df228_cd72c87ee2e046a29d2e7076749144d1_master.jpg",
      "MGT00966": "https://cdn.hstatic.net/products/200001046178/d1d32a4a-d5dc-4cfb-a99b-e9aa0ed1aa13_68cd8ded9fba4df6959a7247ce7bfa85_master.jpg",
      "MGT00869": "https://cdn.hstatic.net/products/200001046178/4c6186b4-e511-415f-9f5e-fee283ce1179_51f8581cec2a4f1ca1496ff115d04b0f_master.jpg",
      "MGT01011": "https://cdn.hstatic.net/products/200001046178/c8eeea71-105b-4b12-be79-c2aa98bfe50d_0af901db406443379c8c181ee7d0818b_master.jpg",
      "MGT00805": "https://cdn.hstatic.net/products/200001046178/12_82f9830f2b684a3ba9fcba3c76bda092_master.png",
      "MGT00964": "https://cdn.hstatic.net/products/200001046178/4cdc52f1-7475-4e99-a662-34ff0e873fd1_89da21ef72ae43379545c8da3d3b2ca5_master.jpg",
      "MGT00772": "https://cdn.hstatic.net/products/200001046178/7f0b96e9-e159-43f9-8174-891757d0ab7f_018e1cc2f06341a6914443b4674f822b_master.jpg",
      "MGT00886": "https://cdn.hstatic.net/products/200001046178/img_0020_3f0c22fb928a47f7a0883762358134c4_master.jpeg",
      "MGT00985": "https://cdn.hstatic.net/products/200001046178/c4381a8c-54d6-45df-8cb7-9e6d732bb844_2495ba53b36247ee9ecee683ee23d7de_master.jpg",
      "MGT00865": "https://cdn.hstatic.net/products/200001046178/18_49bd1b17e44d4b3780ac18a7805ea7de_master.png",
      "MGT00990": "https://cdn.hstatic.net/products/200001046178/1d1fad87-ba4f-4275-8754-d9fe62be4f3a_6c0ddc6adc8446678696689e06fc3b02_master.jpg",
      "MGT00698": "https://cdn.hstatic.net/products/200001046178/ad38cada-8c62-4c2b-80d9-72fdab474aa2_6b05b88f87504b058d63f4fbaea0ec55_master.jpg",
      "MGT00851": "https://cdn.hstatic.net/products/200001046178/6e6c6374-d261-44ac-8f1e-30b15c55177b_b73c682eb2b94f30ab9bbe0262f8d200_master.jpg",
      "MGT00785": "https://cdn.hstatic.net/products/200001046178/8eea57fa-284c-435b-8be1-1034203c79c1_f840a2bec7764f86a564a197b1e7d148_master.jpg",
      "MGT00987": "https://cdn.hstatic.net/products/200001046178/41_1bf6f40616ab42d4a7f954de232bd108_master.png",
      "MGT00782": "https://cdn.hstatic.net/products/200001046178/df88239a-ead6-4286-9d53-3a0d92469cdb_05c664d11e954953b980b7d15893874d_master.jpg",
      "MGT00652": "https://cdn.hstatic.net/products/200001046178/652_71b36f7d1c894143b424621de42cbf7d_master.png",
      "MGT00961": "https://cdn.hstatic.net/products/200001046178/3e86c4be-3ef1-4f57-9abe-afe07f401a0e_a959020bb4124b349dc1e48bebc88393_master.jpg"
  });

  // ẢNH THẬT đã đối chiếu trực tiếp với trang aera.com.vn (lấy từ các file HTML đã lưu)
  Object.assign(GALLERY, {
    "MGT00793": [
      CDN + "dde8b739-c5c1-4945-8fff-f26ee21c3e08_81ee7ed6f53842a488486a72758b8946_master.jpg",
      CDN + "bff0cc1d-b94e-4a3f-99d9-2bccc6997b4d_003b4f1ef9a94fac943b26a9bbf04902_master.jpg",
      CDN + "57610eed-1de1-40f4-97ea-987f30e1cf07_e84b08548dfb4131a8e6f179195ea96c_master.jpg",
      CDN + "0f26a22c-4723-42b7-9540-8ab6dcf02ca7_6b41579d70ee410daf1840decd94bf27_master.jpg",
      CDN + "5d254b6a-f253-4c35-8931-1f82ed644556_dda59f5b52ee45e1823d79d00e284eeb_master.jpg",
      CDN + "93b9d914-da01-4487-b4bf-b83a6b2bc23d_7ff2983eb8cc4ddebb80b5059f792d44_master.jpg"
    ],
    "MGT00804": [
      CDN + "b4e6a3b6-ad13-4ca3-80ac-319679684849_96c7ee58f2a1447aae97e85636c7b41f_master.jpg",
      CDN + "ac8c86c7-545f-42da-a298-759c1b254e37_e9c4c6bc441144ad996f273175d6fd00_master.jpg",
      CDN + "b662d350-b5da-44a5-b5c7-5c81705f7146_fb56e6c4a39c4c5a87eb7fbd6502ebdd_master.jpg",
      CDN + "a6404708-99e3-4a1e-a3f2-fcda7427889d_8a74f7d0e1844f4b8c22e19392162201_master.jpg",
      CDN + "cef9d4b7-7682-4ad7-8993-4625be3abd55_225ba227e8a447408a61b873edea05c7_master.jpg"
    ],
    "MGT00953": [
      CDN + "6b58c0fd-f497-4e5c-ad6b-fce2300505b2_f9e4e28a5f5d4b46b08b1e7f43d36769_master.jpg",
      CDN + "0b3cb9f3-7c26-4fbd-acce-f37b370dd886_4fa0ea8bfa82494c9d06129ee00a962d_master.jpg",
      CDN + "d7df0b35-f4f1-44b9-8a70-4c11c809ebec_954a72b898af42e480ad3104f704a72e_master.jpg",
      CDN + "9bdae5b9-f967-41b2-858e-9d4c9c6ee4df_0c9149a4954e47a188c8fa9d9ce9aec5_master.jpg",
      CDN + "d8cb7970-9c54-41e2-9f7b-976b34e327c0_8296519bb51e4e6b82916d153b907dff_master.jpg",
      CDN + "82ff3d05-6fc6-4012-8b8c-0be6e66c85fb_a83f0c7695ec44c1a1c23f23e0cfc01c_master.jpg",
      CDN + "0bdf89eb-f600-47c0-81f3-9d3fe2e68b5c_7fc2170d36734f63b3511b06855fe6f2_master.jpg"
    ],
    "MGT00844": [
      CDN + "314ef1bd-1a8b-4191-a5a8-0fafba8df228_cd72c87ee2e046a29d2e7076749144d1_master.jpg",
      CDN + "6fcba49f-d38c-4bb6-8310-be87854086e6_e3f6f89ad9b048708de7821920789339_master.jpg",
      CDN + "576b4063-928f-43d4-87de-6d1f99b44a6d_7fd180dc0a714311833329f259905e57_master.jpg",
      CDN + "be191744-4a59-4d0c-9af2-9a33b7653316_247126a3f1fd4879b44a532d8cdc68aa_master.jpg",
      CDN + "c664d898-560d-492b-ad17-23ca048c69eb_c854126150c4428f84252359a03f1861_master.jpg",
      CDN + "59af7c5d-405a-40af-bf89-caac5c701771_d271d2a62d2e4a1f8f1376006e336a8a_master.jpg"
    ],
    "MGT00967": [
      CDN + "e0e34fdc-f59d-4990-9cf4-6ace0dafc919_96a353e25eb14dd08954c270efd4963e_master.jpg",
      CDN + "671371ea-b180-4ee8-b304-bb4a45793091_1d1dd497f0224d9c9385e27e9821819f_master.jpg",
      CDN + "3baa1a06-340f-4e63-b5af-cb68830c8181_3a4c4a243edc493989885cbc13c9b343_master.jpg",
      CDN + "86f87313-73ca-451e-ad43-b24259288639_34bf05aca9254c9e9501c13dd9850358_master.jpg",
      CDN + "6404ea50-fac2-4fbd-94b8-50da3b97d60a_f4a2a46d9f5e4cbea411586e5059387d_master.jpg"
    ],
    "MGT00966": [
      CDN + "d1d32a4a-d5dc-4cfb-a99b-e9aa0ed1aa13_68cd8ded9fba4df6959a7247ce7bfa85_master.jpg",
      CDN + "d2eaf474-f950-47a9-b810-197d2d52ddb7_9e0fbfd3a2e344ffa5fa91afefc8ffb2_master.jpg",
      CDN + "bd75f968-1bb7-41b5-bf0f-0b181df51298_dd1768587ec54028a577b0791816e4d1_master.jpg",
      CDN + "c0455393-7d0c-4a58-ad41-5fce28467060_0c9746bf2cc942f98acc746e37ff25d9_master.jpg",
      CDN + "d2859a28-5dd2-4785-b9ca-2096fa626d9e_c0fd53c32d964e44b6e6bd295cb2a7db_master.jpg",
      CDN + "750c46c3-04e0-404c-9d38-786eebd1c5af_7c6a102744564253a45cd3e972afa882_master.jpg",
      CDN + "60efdb72-e708-4106-8dfe-30f56c90a73f_ac5647d52a324ca69a536246aa156a26_master.jpg"
    ],
    "MGT00869": [
      CDN + "4c6186b4-e511-415f-9f5e-fee283ce1179_51f8581cec2a4f1ca1496ff115d04b0f_master.jpg",
      CDN + "1f22e926-77cb-4a69-a4d3-bfa15fe1345b_6d2f83467bdf42d49ed668fa3062b8be_master.jpg",
      CDN + "fd477d8e-9637-4a4d-a0aa-f0de0e708410_e3776d82f3c34689aca8cb379e49a006_master.jpg",
      CDN + "886e0c91-f573-4c40-a2d8-09f743ee065a_18c069754d2c42ee89fba006d8ea71d8_master.jpg",
      CDN + "eac4c35b-bc1b-4cf7-b820-60d542739009_8adefa6eaf964a2f91bd35ae97dc5974_master.jpg",
      CDN + "17_4f4a555eec6849ed9a1ecc78b54789ca_master.png"
    ],
    "MGT01011": [
      CDN + "c8eeea71-105b-4b12-be79-c2aa98bfe50d_0af901db406443379c8c181ee7d0818b_master.jpg",
      CDN + "d45d1e3b-4dc4-4da4-b4c7-a21c05c158e8_f89ef3d2cc15438bacc4816f431a9fb6_master.jpg",
      CDN + "5a76784e-18e6-412d-b36c-11520bef3087_b3171e74fd144193961b6f41345b7617_master.jpg",
      CDN + "1f760913-4003-4483-9f4e-e51340c6922d_09d12b38496542eb9846f5abcaa69913_master.jpg",
      CDN + "faab25ec-025b-42e5-bc3e-d7f115e2d9e2_e59bfce2ab7e454eb6bd43a42f2a0b9b_master.jpg",
      CDN + "c900851f-fc8d-4bc4-8142-35c30c1cd970_5eb5b6f00c484f75bb2021b41a85576f_master.jpg",
      CDN + "5e490b32-4724-4cf7-855a-f47d05244c13_ffc08fc0f715468e9b24c74fc445e7ef_master.jpg"
    ],
    "MGT00805": [
      CDN + "12_82f9830f2b684a3ba9fcba3c76bda092_master.png",
      CDN + "14_991882d90b7f4dc3827bc1724d3ab942_master.png"
    ],
    "MGT00772": [
      CDN + "7f0b96e9-e159-43f9-8174-891757d0ab7f_018e1cc2f06341a6914443b4674f822b_master.jpg",
      CDN + "8b2f8015-406b-4880-ad1b-02297486ed5c_a1e6462fc7a24d27bb4d6a4e17743628_master.jpg",
      CDN + "a0a766f9-f360-403c-86f7-b8ccf11bdb54_9316e889596e4fa3a5b9e22b6e662da6_master.jpg",
      CDN + "0693b9ce-36a9-480f-9020-19523ea45970_6cd56498302a4c17b6928b8cf4c47984_master.jpg",
      CDN + "3_af88c382815f47d9b976464df6545048_master.png",
      CDN + "339899ea-29b3-42c7-b946-a5a21d60930e_353b0e7e5c6d4c70a479365392b0a819_master.jpg"
    ],
    "MGT00858": [
      CDN + "a1cd4296-a8c1-441e-9c73-c6c1f1170cc8_2269e3ba7d814791b013f047507ae9ee_master.jpg",
      CDN + "0f91a02f-2ea0-443a-ae10-2fced448d10b_6a939cf9550044c3a1f86a74526c3381_master.jpg",
      CDN + "07884413-acba-4948-a82c-467a1ff9085c_4053796e7e7b4f54ac5a26b42290ecdd_master.jpg",
      CDN + "4eeebb99-a118-4604-a44b-4bdc10d34f82_3b40d17e52d3437f82936defbf00d29c_master.jpg",
      CDN + "9_f8d07082c5964843a9d5de9e59a99c93_master.png",
      CDN + "b555c71f-ff97-4cca-bbc2-cbe8d313742f_f9275530e8aa492d92575c6a27458652_master.jpg"
    ],
    "MGT00964": [
      CDN + "4cdc52f1-7475-4e99-a662-34ff0e873fd1_89da21ef72ae43379545c8da3d3b2ca5_master.jpg",
      CDN + "203620cd-359c-47d1-bdfb-5cad4a654ca3_efa3038ce3714de6bac5418623467711_master.jpg",
      CDN + "f562911a-283b-4182-9db2-76763c196833_7b0c8b2b744b4084b118a45d14de4d7c_master.jpg",
      CDN + "7b932a46-42cd-43bc-823a-5f7a79aae92d_97817af9c1ba4e7eae32d3420e96065e_master.jpg",
      CDN + "bec05f50-a164-45da-acac-70186583ba8b_8f9c2c970bbd4c16963e091ed82d0cda_master.jpg",
      CDN + "fb5d6a60-fc5d-4c60-9c8e-95f1c39f96d7_11853c60725a4a7abc577febc9477618_master.jpg"
    ],
    "MGT00886": [
      CDN + "img_0020_3f0c22fb928a47f7a0883762358134c4_master.jpeg",
      CDN + "img_0019_dd4caec73ac344c6858fef29c4c22430_master.jpeg",
      CDN + "img_0031_f3ed3e53ae8e4decbc20007291a855ee_master.jpeg",
      CDN + "img_0018_732fe193fb0c41d78b359547b83691ab_master.jpeg",
      CDN + "img_0033_66c5e8ea1bd5486a97758547212dfa7e_master.jpeg",
      CDN + "img_0017_268bbe986504453d88453cbc4ccea65c_master.jpeg",
      CDN + "img_0032_aea9a7f1bb3a4c9b862c895f58f34ad1_master.jpeg"
    ],
    "MGT00985": [
      CDN + "c4381a8c-54d6-45df-8cb7-9e6d732bb844_2495ba53b36247ee9ecee683ee23d7de_master.jpg",
      CDN + "7d911c75-c488-4aaf-aa31-aa5ff5eb9181_6264cb66539141c78f84a8a3844f8824_master.jpg",
      CDN + "7ffca1f5-b87a-4e85-9dd2-cdd2c0b90d32_2cfff2525e3d4e0cb91eb48b6f3dbef1_master.jpg",
      CDN + "741dbb07-563e-4c1c-b4de-c4dc1b453f23_44e0d188374045fa98b0fc2096ab3319_master.jpg",
      CDN + "1a84d834-0bf0-4c5a-954f-e6764d9911ff_743e4b633c0940cea10caf8748af86a0_master.jpg",
      CDN + "185f77bf-a257-4ba6-b392-cee638ef142c_5bbca460c11e4ae4beb37b24b732ec79_master.jpg"
    ],
    "MGT00868": [
      CDN + "2fb9616f-b324-4066-9ee6-5cafe9b4f04f_163a3345cf0c489d84d31abc0942f1b4_master.jpg",
      CDN + "e1840175-647f-451f-b1ee-07ae6e824685_33abfd898a2d44a4ab0a6a6ea7771779_master.jpg",
      CDN + "56300237-184e-4e3b-8e14-f9efb3ede0c8_f87cbbab817f40d48cec83e6ac1f524d_master.jpg",
      CDN + "973842de-f0fa-4262-b00c-492ac93594ae_496d4465500e42cea3f5fd0ee2cdc319_master.jpg",
      CDN + "e0d9177d-b372-4fd0-8931-5774146c371b_7e038018a13b4614b614d3f505eaa8da_master.jpg"
    ],
    "MGT01046": [
      CDN + "b1046_8631543c94e24e008696671ed7306a56_master.png"
    ],
    "MGT00865": [
      CDN + "18_49bd1b17e44d4b3780ac18a7805ea7de_master.png",
      CDN + "c5d88401-2521-4179-ad3f-161fdced9667_1fefb89a8c48466aa85373fa27a42bac_master.jpg"
    ],
    "MGT00990": [
      CDN + "1d1fad87-ba4f-4275-8754-d9fe62be4f3a_6c0ddc6adc8446678696689e06fc3b02_master.jpg",
      CDN + "fc2ff8ce-083b-43e0-8f45-6b2da3ca65a8_5c8bbc76d5dc4ee2aa84216f5fc6348d_master.jpg",
      CDN + "2124f8ee-4f01-4099-a023-c8b7dd905dd1_b51018e7fe1d45c29656b16926d58a34_master.jpg",
      CDN + "4ef91baa-210b-458d-b845-264b1aba7d57_41a1e683e3a646a98d5920e50ef34443_master.jpg",
      CDN + "24ac3bd9-5db4-484e-bd58-863bb939a981_91af2b7d187741169e0c65cc9883e21c_master.jpg",
      CDN + "e298cb63-f04c-47ad-960e-e00d8224451f_b099cf0df5b94f69bcb959d433b0020d_master.jpg",
      CDN + "e96236e2-a3ba-492d-9955-3d392558d93f_525939b3bee24821b64248b15ccfa8c8_master.jpg"
    ],
    "MGT00698": [
      CDN + "ad38cada-8c62-4c2b-80d9-72fdab474aa2_6b05b88f87504b058d63f4fbaea0ec55_master.jpg",
      CDN + "09dd88d8-2be4-45b5-a56f-7ee92f9651a4_abe57dc174b24c15bbf471385d6ab12a_master.jpg",
      CDN + "d12eac12-14d4-47b5-b02a-2dc12cc241ed_31f161ee4fa64ab48e3b75f13b7a13aa_master.jpg",
      CDN + "470a718f-0787-4f47-aabe-bf5117c38573_9992417ff4844ecfb587db638b9a1843_master.jpg",
      CDN + "337d88cd-598e-4bf1-a664-2568c6aea5e2_bfcc010a67064c23bfdf42e5bd6dbc16_master.jpg",
      CDN + "03b26b8f-c9de-4491-b9e5-3d1872c3a1c4_44e51add61f143c38c12426e6972bd74_master.jpg"
    ],
    "MGT00851": [
      CDN + "6e6c6374-d261-44ac-8f1e-30b15c55177b_b73c682eb2b94f30ab9bbe0262f8d200_master.jpg",
      CDN + "fb12083c-7463-4267-a083-a3679ff6a977_ff32ee4b69f9489391da023263e1796d_master.jpg",
      CDN + "5b85533b-2914-42b7-a281-ae1d319ace91_10eab06736fd4bb29805e3bfa3fc17b1_master.jpg",
      CDN + "91db8ea8-b03f-4de4-abcd-9dd6cdc988c1_9b71b3be32b64880918b20ef884bf00e_master.jpg",
      CDN + "d1c44572-f63a-4764-8ed1-383f7b9621ee_64207a718d4042e6b299afa546ce798b_master.jpg",
      CDN + "8e88cd38-32ac-49cc-9c92-e7c32deb89d2_fd403dff97db4746a073096e29999a00_master.jpg",
      CDN + "a4653932-3651-4d2b-b3d0-3333699755bf_6730a2c6aa45468693a365af3ead54ac_master.jpg"
    ],
    "MGT00785": [
      CDN + "8eea57fa-284c-435b-8be1-1034203c79c1_f840a2bec7764f86a564a197b1e7d148_master.jpg",
      CDN + "d73ce88d-a6ae-42f6-91a8-bff8079d8791_764f4c7dc09843199a66bef51f83d846_master.jpg",
      CDN + "c48dec3a-5837-4228-bcd9-6a5242bc0f9e_fc09d6ab94ac432292a51f3dc03e06cc_master.jpg",
      CDN + "451f1338-9c39-4e08-94fe-688fb1a63437_d664f7c8d45441babc74739d8c87efcd_master.jpg",
      CDN + "fb13cd1a-a5e5-4d34-a34c-a437966b052d_b91c582447fa45a2bc9b4ae0deb0395c_master.jpg"
    ],
    "MGT00987": [
      CDN + "79453205-1c50-4581-a3bc-db676f618551_e96e09ef56814cbcb0224b377c5a0f04_master.jpg",
      CDN + "ed1c7d1a-ad2e-4fe2-be29-f409cecc0219_a96a4d8b67444cf2aceb0a8e8732ae3e_master.jpg",
      CDN + "cf4abebb-4b7c-42f0-bd8b-57cadc8198dd_40874a96ec654dfe90a20d953b71ee23_master.jpg",
      CDN + "8aa4e3ba-aed4-4baa-86e1-12f6c42c5153_0eac4cb249c2418285b220655e682b44_master.jpg",
      CDN + "1c88d65e-a28c-453c-aa8c-bac5e566b0fa_e2ddbdfbcdbd478eb5d81ad2e6fb6e86_master.jpg",
      CDN + "c737c44a-0430-42e1-acc9-8d801dc3cd64_868b07a38d484829bfd9ad8189413bea_master.jpg"
    ],
    "MGT00782": [
      CDN + "df88239a-ead6-4286-9d53-3a0d92469cdb_05c664d11e954953b980b7d15893874d_master.jpg",
      CDN + "7fcf6913-04ca-4b04-868c-e6cf6a9ce714_eb721c8f026146ae9137e215da8191a1_master.jpg",
      CDN + "fe44d605-9bc6-4b01-a90a-737cffcd0bc5_edae2bef25cf44e4be75b52a609448e9_master.jpg",
      CDN + "3fb1c17e-9c27-4f6d-83c8-f7fda42460ed_33d90a84ea3b464a9e0f57300c8fcd1e_master.jpg",
      CDN + "f3610000-a58b-46e5-bf92-2d5364e0afe9_31f586aaab4845ceb4bdd6fb85930fb8_master.jpg",
      CDN + "305f0d30-855e-4ce7-9e6d-dca844a45409_c941cfc91dc54b8aa9504d3bed027c2f_master.jpg"
    ],
    "MGT00652": [
      CDN + "652_71b36f7d1c894143b424621de42cbf7d_master.png"
    ],
    "MGT00961": [
      CDN + "3e86c4be-3ef1-4f57-9abe-afe07f401a0e_a959020bb4124b349dc1e48bebc88393_master.jpg",
      CDN + "a31c710d-ed14-4a05-aca1-e32e65954493_8d1ab17013724ae8993401a6d11b51fc_master.jpg",
      CDN + "8d5afe65-63ff-421d-984e-1ba04bb88285_ccd6bf97495d48d6b1de5cf09661bd5c_master.jpg",
      CDN + "2d6ae0a6-ea76-4d61-851b-b62a9b33189a_42c4c12d0a3445539a24f902051cf200_master.jpg",
      CDN + "44_a0c04a0d863e47fda3c15ba522c8e5bb_master.png",
      CDN + "1103267b-86e8-40c7-bc6c-3eea521f944a_4fd6a362b2ba4b519a12cb90c115e259_master.jpg",
      CDN + "majorette_collection_-_1995_toyota_supra_mk4_yellow_-_8505001029__a0eafa4c0acf4f0abfa84cc0f38795aa_master.png",
      CDN + "26_98b564bdc5a64a2a9f926540581cd6f0_master.png"
    ],
    "MGT01140": [
      CDN + "bbfa083e-e9b9-4e08-917a-4f30911abad6_b9bb1ab473714bc2bac434746905943d_master.jpg",
      CDN + "46b1d560-116c-4cb9-994a-9f32e21da369_7dba0843ba844578aa7e435e05458044_master.jpg",
      CDN + "efd2f7d7-258e-4434-8094-24bdd0595f36_1daddc289f1f4d48bfbc4710e1a24d4d_master.jpg",
      CDN + "6753a8c8-e99f-4a6c-baba-0751b4aede04_7af6bd1fb51f46a498b0d722b6faff15_master.jpg",
      CDN + "add49560-4a27-4e79-bd9c-d51d671bc98a_50bd3c84e43048298616c9c63f6b727c_master.jpg",
      CDN + "8b72e886-58c5-4221-ab5f-9d7a305fc111_d85899dba5804d8199869298a888fbb6_master.jpg"
    ],
    "MGT01082": [
      CDN + "dcb5ed8b-6f88-4a14-b6de-e5b20097b520_e1cb6b96aaad490984e453f7b6002d09_master.jpg",
      CDN + "96d71d28-384d-4ba9-9691-19cf3dc40be5_8d158ca0ca9649ceac005524047f02ae_master.jpg",
      CDN + "e44e4f6f-6b76-47fc-8250-b28d877fb2f4_f78670aaa58a4d158cd9323d60beb8f1_master.jpg",
      CDN + "9437ad71-1615-4aa6-8671-9fddf4de1650_1dfc130b88fe458584ff46f1ef44a174_master.jpg",
      CDN + "139ed40d-365d-45e2-b242-caa7f5638d28_051de49a53414bd495e40cf3d947e162_master.jpg",
      CDN + "0efcaee1-18ea-4864-b589-1e9aecb5f126_8f3be721fba145929e8f3d1af50e6d1e_master.jpg"
    ],
    "MGT01135": [
      CDN + "31835850-ae0f-47ae-9f64-65d783581a62_71e73452631f48b88f2d310c14f2d5a8_master.jpg",
      CDN + "5f7cf831-de00-45dd-95f4-6293fc1322bc_661ef6a2d6cf40eabf3613f4e5a6248e_master.jpg",
      CDN + "5484c2dd-d4c0-4520-9355-0bbd2137ff49_2ab7c02ef57846678fc0b8fb2cd69328_master.jpg",
      CDN + "1a91e3be-c082-46f9-bfdf-79c87a24da89_69d9901a5c434e93a688f37cc89117bb_master.jpg",
      CDN + "38dc2147-9afb-4246-934e-290b88e0cfd4_3b0e34afb1fc4942832a376d40222236_master.jpg"
    ],
    "MGT00852": [
      CDN + "330a3b95-89fd-4b04-90a7-7911840d8e41_953dda47eb5449ff9a8e09897c46733f_master.jpg",
      CDN + "fda8a5c5-cea7-4de4-b309-6a48ac03e3a7_3c8ccdf501184ebbbc25834a42bb7d32_master.jpg",
      CDN + "2b9a9517-8536-4a2d-ad8f-2a857909825f_5eb12101267a406aa09e351b77009157_master.jpg",
      CDN + "40b60955-5180-407b-b2dc-bd4a51a8c70f_647723772ef9498999c73c6c056a4524_master.jpg",
      CDN + "8b12e340-8b32-4c82-b588-ce07d3bb2b2a_53d69479f2ba46bca632262e47f55006_master.jpg",
      CDN + "ca761ca0-494e-4475-bae0-13b102fb4e5e_68bfa12a4a324469bac4c36e37680b27_master.jpg"
    ],
    "MGT01007": [
      CDN + "4a8cceb6-5c5a-4d57-b099-54038b074a5c_c202957598f4482681602473f289d313_master.jpg",
      CDN + "0e49cd22-7570-4e24-96c4-b5350d15a302_eac6aa5ec2344dc89833c8a1e3889516_master.jpg",
      CDN + "3aac6d50-d10d-4582-ae2c-6b66d06d8672_6e9416655a82418cab16af49bf13c1c6_master.jpg",
      CDN + "4bb33178-0ccd-4d76-8575-86fb0f0e7eaa_63a6afd053444ca6bfa2d78d6dca79b9_master.jpg",
      CDN + "bafc7e2c-5aa3-4b56-84c9-58dd3ab3a1ad_339e71518ca44f66af70820c1c68e01c_master.jpg"
    ],
    "MGT01121": [
      CDN + "1fec4def-3f4a-4de2-9de7-2da12a3baf38_d1b9c9998b0749b98073eb87165fb0be_master.jpg",
      CDN + "da856fe3-c60e-4049-8fa4-1219b54198b6_e76cc1f3c3bc4214a5e37ddb76f6ce73_master.jpg",
      CDN + "5f10c8d9-d795-4e7b-9380-6f901c89c961_150614df70884dd49c046238d644815d_master.jpg",
      CDN + "487c1e57-3e26-414c-b4e8-30fcbdac1756_09b89933e47c4fbfaa41c1334526c30f_master.jpg",
      CDN + "6fadc84b-7c4d-45fd-abdc-be4c1a2cfb41_20d86fb1c1ad4931addf8e7f92a91b91_master.jpg",
      CDN + "4a20b9dd-7a01-4235-a4c4-141e4cacca63_3d1e284411064b6fb7435d74d926f899_master.jpg"
    ],
    "MGT01100": [
      CDN + "3ea7b1fa-f84c-4bc9-827a-4626df228901_002d38dfd4324dd09401b8b2e93a3914_master.jpg",
      CDN + "e1c15032-8878-4a56-8e46-17d3a76fcd16_6cee7a00940245209f2dbf2887db4e25_master.jpg",
      CDN + "0b5d29fb-ad4f-4739-b934-a29c7b01cce4_c68f54ecf65d4852976dc354f43eccc3_master.jpg",
      CDN + "31a04454-c1a9-430d-b02b-c0678fc2b5d0_52bc06be1b7c47f0a29cd9b3fb83d115_master.jpg",
      CDN + "8076d6b1-8434-4c50-aa2e-655a32d447ef_dafafa1ae83543548017ab48eba91839_master.jpg",
      CDN + "6bd454ab-2bb5-4b23-bee2-471df0c33d72_05218b9bead34cfcb855dc0a92163b7c_master.jpg"
    ],
    "MGT00190": [
      CDN + "f5b95706-732b-4687-8f46-f42cdd18d369_64121d9c4d984caa851e6018b44f7f67_master.jpg",
      CDN + "09487e88-ae89-414e-ac78-39e126590501_86e6f9dada5049a0b2f95bc39ef592a7_master.jpg",
      CDN + "c06c45f0-2c7b-47c4-9f10-179b33abd3e3_6b8e16739a6d45b7933241fa4ba63ce6_master.jpg",
      CDN + "a790189e-c4cf-45b8-8914-caaecbf23947_69bf0c2a52114b0285f01332f07d35f0_master.jpg",
      CDN + "bed73348-6c9b-48fd-a3d6-72fde22aa1f0_43219b0a22a74544be2f5d1b8eefff5f_master.jpg"
    ],
    "MGT01103": [
      CDN + "092702a2-adfd-47f3-a5b8-fcf0715f5576_2c967675adb849d4a60c8d4188cffbab_master.jpg",
      CDN + "6325a034-908b-455f-b898-7f9f252ef5bd_15fa4383b8f8424fa0794dd06fe898d4_master.jpg",
      CDN + "f47af081-d684-479b-a9f9-cff8d7792ac8_6d267874da7a4d71a6ee375b6ba7b8cb_master.jpg",
      CDN + "2725bcaa-96c8-4c38-8cfd-6e923abb4a50_4bb43f54752b4de8961b7d01e44572c6_master.jpg",
      CDN + "4c8bf48e-a6c9-46a3-8ea4-a81c0b50880b_9fc69f2397084ddc8a0b1fb4638169ec_master.jpg",
      CDN + "d02dcb18-7b35-4f9d-9cc3-ff0ccda2d9a8_6b84134ae3064cfd9f54fadb9a5e4b35_master.jpg"
    ],
    "MGT01101": [
      CDN + "ec20760d-3d65-4bc7-a7bd-f71a2065e414_66d47687c280473bb240a0c63240295a_master.jpg",
      CDN + "ad451507-59ea-48ac-8d3c-08a319175627_7db8fe9475f948b68f71cde8f052757f_master.jpg",
      CDN + "c3bafda5-24f4-4d7f-b5a3-be2b2b5ea7bd_067029df02c4461da3db99517db9f43a_master.jpg",
      CDN + "f0d5e129-9034-4f51-8ba2-239ca444b248_c1871544d2f44e099f03883f09230f02_master.jpg",
      CDN + "f570075a-30f9-4704-924d-03250b47a0cd_40284f0c791a477e9f5daaefe559cc98_master.jpg"
    ],
    "MGT00697": [
      CDN + "a070c9e1-679c-43c2-be91-61e50ee6415c_1c4242e33e06404bb5d9de73d95e9608_master.jpg",
      CDN + "23ccb37f-f0ff-49b7-82c3-a69454478f62_4406d38c54694559adaa753bd57c866a_master.jpg",
      CDN + "4eb6948b-0b69-4707-9973-1edf78a2d29b_4dd28d555c8447abb975ab9a6e3f0ef6_master.jpg",
      CDN + "0c9cea0a-7ce6-4582-892f-7fd3e3f65a4a_11c8fd6b10344759b91de9ea76d129b0_master.jpg",
      CDN + "63d0d91f-525f-411c-b2dc-8f63a3aabcd7_aed29a0e74ed4d58ae7a3566a524fbd5_master.jpg"
    ],
    "MGT01086": [
      CDN + "c2533bfe-28c4-4323-b57f-cc5b08bb0690_ccab0a6f49a64b1b9aa2ce9da1f3346e_master.jpg",
      CDN + "b02bb1bd-7a2a-401c-ab4c-51837bedb9e4_4f0fa9e21dc04bea8f2ced51dd930b0b_master.jpg",
      CDN + "ab9e6a78-ed2a-435d-886b-c575c909c3c4_6f47c6c6e65d4ddfbe83295801d0fe0f_master.jpg",
      CDN + "99d52510-f3d5-43c5-9a26-6e92f9169cfa_6483a94507024acebb5503aba02e6d39_master.jpg",
      CDN + "1a4b93e2-d7f9-4f9e-8f60-8f7f3be2fcfa_0c1c4e3b7fa143acb4cb62c30884859a_master.jpg",
      CDN + "03ba3393-ff49-43d1-ad56-69fdedc2dc8b_f09243b0bca24c8496c93dfec688c91f_master.jpg"
    ],
    "MGT01052": [
      CDN + "e730894c-2a31-4da4-81e2-4a8f2d139e3c_3394a047cbd6448b8ea5a2926d58b1d5_master.jpg",
      CDN + "48673106-a002-4aec-83f8-c9972bdbd193_f81007946cda49afb5a139c715ffcf42_master.jpg",
      CDN + "a5123a27-e89a-4a83-9098-889fd66f6eff_fe75b92eb1124b338325e3f3d5f51a4e_master.jpg",
      CDN + "17818c88-1058-4232-a61a-30ac7538d9d4_df2af4ee659a4e708e14614624e11946_master.jpg",
      CDN + "dee93678-d7a5-46d4-a252-8543ae127d0d_fa5c3b8c063c4f47b49b7616d5ed8fbd_master.jpg",
      CDN + "ee6dd8ce-ebad-430c-90e3-87edfb2f38d3_857628cf696747338d127123f48370e7_master.jpg"
    ],
    "MGT01058": [
      CDN + "ccec7571-f9d8-4307-a37e-65594f8af374_7a2c2acb61eb4afa8f02d94b635b0bbf_master.jpg",
      CDN + "532fee54-5d84-4912-8fe6-f09859b0a866_558716ae0c764f2994f8d06e7486c201_master.jpg",
      CDN + "c0349339-c369-46e9-a716-a15195214681_cc260ea498744b2a83adc1156ddf2d53_master.jpg",
      CDN + "b87b16a2-6da1-4180-adf8-1e5ed85c86fa_15320d09caeb4919bc88e372dfc0b0c8_master.jpg",
      CDN + "e43635a5-a41b-4b2b-9212-471089844d56_45f8c9024ec24b348b0e7a178e388f37_master.jpg"
    ],
    "MGT01122": [
      CDN + "f3316964-9b41-4cf7-88cb-bcff6e1ba8ec_99149b8d4fc14cd1a92180b94bde4fc4_master.jpg",
      CDN + "6b6cab99-16c8-4a48-bf60-f7d9a8b78b10_ad5e2198bac0488e95564353212baa7c_master.jpg",
      CDN + "4c68a8e6-1e6a-428f-a3fa-251db0eb6d07_b485039188d143a8b2175643b75e47ca_master.jpg",
      CDN + "ea08bc88-712b-499f-a8cf-4c1c08f06749_1cc637f02ef0408da69cef8f167bc9a8_master.jpg",
      CDN + "9e83bc6b-c6ac-49bb-8fb1-ac45514fb98d_f1f5c060751948088b9b6aa8e40da02b_master.jpg"
    ],
    "MGT01077": [
      CDN + "74fcaa24-01f2-43cf-92c1-515147c0a431_2b2859c7bdce4d41b7650079881243e0_master.jpg",
      CDN + "a997a7ad-2ede-4b4f-bbb2-959b15ca01bc_4b0624966ca446c4af97c53afd05b0fe_master.jpg",
      CDN + "d8ebe8b1-75b9-4ac6-93ec-48d842734d22_c66c8a70036e470a968fe111b336e7ba_master.jpg",
      CDN + "ae7a4263-aae1-42a3-85b6-102c27bd9d1f_88d27f7a9bcf48799a9a6bd038072f76_master.jpg",
      CDN + "dde95445-7616-4a06-8e00-f787a18608e2_1d01b6de879548b8975c8b6dc8dddb6c_master.jpg",
      CDN + "916a039d-bd45-41f2-8acc-ff9f69330d97_c5d72d68684f4b8aa433b2d23cf81bff_master.jpg"
    ],
    "MGT01124": [
      CDN + "8bd7e5f9-f825-43a9-8077-768ab48b1bae_b769aa87bc834a03a1357c6fb3021d02_master.jpg",
      CDN + "41fca6e3-4a1d-4cf6-8350-081d2b638c38_47daddeee9f74813942961a9a386bbd7_master.jpg",
      CDN + "8f733b12-ece6-4fcd-bb4d-3319901075d5_e181460236174164b46d36b373eb4bf4_master.jpg",
      CDN + "4a4f5342-60f2-4aff-b41b-eb8a35d8dd15_6b19f7aa50f44aedb12a83cdbe47993f_master.jpg",
      CDN + "bf0a5395-c42e-430c-9edb-95168844b5b9_4aa6d499791a4aaaadcfda32073c667f_master.jpg"
    ],
    "MGT01083": [
      CDN + "3296745b-eca6-40af-beaa-fffc058e8f00_050d2e7afe2d4445bca34c91a6ba9230_master.jpg",
      CDN + "97ed695c-92c0-4e2e-8edc-6fef54e17fe2_e17fc50071ae465da5e187a9dc69eb3b_master.jpg",
      CDN + "194569f8-5f0f-4a20-bcad-13ecaf7998f5_b74ee7c58af14c2d92997759d191e578_master.jpg",
      CDN + "057a6106-1c69-4893-8942-f198a04c9965_cdd43fa228eb4a4ea00f519ac93be057_master.jpg",
      CDN + "95ca6e14-6954-4b82-b439-052648c23457_46cf8f73c6a445f49ceab1db8a593b06_master.jpg",
      CDN + "ddd1c35b-bd69-42e6-9a72-b604fbbcd08b_495ae0e597da427d8fd18e5c521b5bc6_master.jpg"
    ],
    "MGT00840": [
      CDN + "70f195d2-647d-4d2e-b9ee-dabae6875457_cb4b90afde494b21ae0dec366f636fef_master.jpg",
      CDN + "6245a736-80c7-4d4d-9bf9-ce35edc0abc7_d8b13d36715e4c02a3f7561ac9e424c4_master.jpg",
      CDN + "035276cb-56a4-4de8-8033-5ec592d6bc0d_96f52fe9072b4ebb81cb5eb0d68d024a_master.jpg"
    ],
    "MGT00657": [
      CDN + "b15e1e4d-de1e-44fe-a00a-9294765fba97_4222522171384e0f859b2b60bde6dcd3_master.jpg",
      CDN + "ca1066af-97fb-4752-92ac-5f360fe9a3e1_6871c5d4bafe4a638036d609a6159fb3_master.jpg",
      CDN + "573e6a37-b1f0-48b6-bf81-6aaf2597cfe7_7abf1f0c1eff4d4db70747121689af43_master.jpg",
      CDN + "ceb5198b-9e0f-4809-92fb-a16bece6bb31_8a51ce4d50e345e7b9dd89bf1be11431_master.jpg",
      CDN + "acbeba00-d69e-42aa-bec0-b34bff68451b_799ea7b8ad11460391bf487e60f9e783_master.jpg",
      CDN + "8be20bae-d065-46de-b82f-a04db2913be0_ddaa5d01805a4a1b8476ddea43da2049_master.jpg",
      CDN + "b31bbab1-7c3b-4364-a97b-f27530287ac3_67c49b9ad10447b59ddc7640bfbca829_master.jpg"
    ],
    "MGT00085": [
      CDN + "12898880-de23-46dc-b8a7-64ee55b105a6_90dfd07e89874c10ad7e415e1085c5b3_master.jpg",
      CDN + "8ff5fb41-d065-4ddf-ad97-5f0f29aeeb74_4f5761ffc5554ad68f62093dd576e74d_master.jpg",
      CDN + "2b2d47f5-5f5c-4d0a-bb02-a2cb55627820_fb1591ff3c8e4995823a5d67b30f7084_master.jpg",
      CDN + "d7fcb1ba-6920-43f0-b6f2-d546ae7e9230_82a6019f00a1415ab02aa0d38c02bff4_master.jpg",
      CDN + "b4eac8fa-6b82-48fb-b1ca-bf64adc34b3b_1fd52a2891f74c8fbdc5ec6e86230c2d_master.jpg",
      CDN + "e6fecaab-5482-460d-9c72-f01281bfcd17_3bbf1ff43e194e01bfe0d9e65e2feafa_master.jpg"
    ],
    "MGT00616": [
      CDN + "img_0108_7edf0c5efb114272b22fedd75e545cd8_master.jpeg",
      CDN + "img_0111_ef528462781c4d748914df96d7f5f9b8_master.jpeg",
      CDN + "img_0110_bcef45cda3d04ef78cb6fab4fa46294c_master.jpeg",
      CDN + "img_0116_fd96bb2a651540018766df061d94439e_master.jpeg",
      CDN + "thi_t_k__ch_a_c__t_n_-_2_5a2fb6b8ec6644f89d2e226e0e5cb2b4_master.png",
      CDN + "thi_t_k__ch_a_c__t_n_-_1_4339ec3bae824e4da8458b2db891a589_master.png",
      CDN + "img_0109_7a2bceefeee645d19b0c581b78895d60_master.jpeg"
    ],
    "MGT01022": [
      CDN + "1ef1b3d0-9ece-4c38-8532-1fccf4c672b6_9c723e9ad88a4a28820c8a6e30f88e7b_master.jpg",
      CDN + "c350e8a0-4e47-442e-8afe-b8959fac4dc4_4a81e241763c4d33aca6c285b32fcaae_master.jpg",
      CDN + "31477c11-2a18-42f3-8454-8f7d09f6bb40_7b777af4780b4c238e960288d68b0b67_master.jpg",
      CDN + "3361d914-7507-4c02-9d44-140050a7c4b0_0597fa18e609403984e5ee3979ad7a8e_master.jpg",
      CDN + "592b5484-2870-40c5-a13b-fefb74a87863_d08bb88815b84ade9b3b3ee2d9a5ae3d_master.jpg"
    ],
    "MGT01067": [
      CDN + "6c9f415d-df26-40b0-a5ff-8004c9e090c9_1b5de7f86a924e35bfd6f302ef1bb289_master.jpg",
      CDN + "17b2dc66-2ed3-4cf5-a3be-3f1172eb3dff_63198716861f495aa8111aca1721ebaf_master.jpg",
      CDN + "d81531c8-2574-448c-8b06-bd66bf4a8c9c_e58d182190d54ee7a9e3cd4e91b2be58_master.jpg",
      CDN + "d2b0a87b-c378-4193-aae5-6df6158c425a_4eedb4f2b2a24af5883d7e987ad40646_master.jpg",
      CDN + "3e9752dc-14ce-4807-9995-d2e213804f28_f8673b412d6e40cb95fd9524ed12f7be_master.jpg"
    ],
    "MGT01081": [
      CDN + "4b2869a1-0aed-490b-9b66-0a024e9c6865_65ff1ca672ea438ba69d44f4e44615fe_master.jpg",
      CDN + "078408d9-acc1-46de-9b5e-aa9573eb03db_b612bf950ac843d68830ac2227a62be0_master.jpg",
      CDN + "730f876a-5e00-4a1e-b236-89dc646eae8a_a7b77b5280f0499c8b9941383bbf9017_master.jpg",
      CDN + "63923995-d622-4107-9bd1-4e54fff7de33_f26322ed65574061b8a193e881c67f92_master.jpg",
      CDN + "a5bddad1-e407-4b0f-aba7-6222e8e3fede_09f8dd345ec94444b397961412725060_master.jpg",
      CDN + "ca73863b-24f9-4a85-b5cc-be48f677b2d3_9d5266f72d074e20966a9a5d23cc34b2_master.jpg",
      CDN + "a0e853d1-a63e-491b-9115-92e340434cf4_ae40d57fafca4a6fadc11e7b6777cdd3_master.jpg"
    ],
    "MGT00977": [
      CDN + "ce51a07c-1b8c-45f0-8106-eaec324abfcb_e93af5bf2aae426a91eb3bdc275369ef_master.jpg",
      CDN + "dbb50569-1a68-4975-851e-da64da40cf85_7723bf1f685c4560a01b9dd6f4c1c7cb_master.jpg",
      CDN + "4dd8c1ef-06be-49b8-bc01-5e999ca982ac_306322353b1e484f93a28e56ecf7cb83_master.jpg",
      CDN + "ccbad3ed-fd55-409b-98f6-9a47f59408d8_c920e953178c42e4a751dcc85244b611_master.jpg",
      CDN + "e87253a4-fcb5-4c47-bdcf-5e4c890228cf_d50e0b23383341ebbd2ebffd53154159_master.jpg",
      CDN + "04d6b3b6-a417-4b8c-b7e3-45a766b06b0d_07991a03749444f48f4d5527ea54b972_master.jpg"
    ],
    "MGT01053": [
      CDN + "54544b75-5537-48cb-b84d-914d07d8a731_4369711ba3d14807b5772355fcfe434e_master.jpg",
      CDN + "dc994af8-0d95-43b1-91f8-23d2f3a9ed03_5e00654010594d669c65d003bb3522db_master.jpg",
      CDN + "353d27aa-3952-4054-b344-621d1230d811_c90a6aeb200943659a3e942a031bb088_master.jpg",
      CDN + "cbe68b2e-17dc-461f-b5bd-febdb659b0c6_63c69722671148af9262752a9130867d_master.jpg",
      CDN + "ette-works-murcielago-gt-evo-black-1-64-die-cast-scale-model_1024x1024_9b2e90a69af84f418a47d88819c1a250_master.jpg",
      CDN + "0d8eafb8-7077-4e72-839a-0c6417dbcd85_c4984f83f1ca4b209e3696c7baa84efa_master.jpg",
      CDN + "87863d7f-c5f4-4bd1-9feb-79336e2d787e_f29d381fd6aa4ca7b85332f079429aac_master.jpg"
    ],
    "MGT01068": [
      CDN + "3810c23e-fd5c-44c4-a186-7e09c3fdb618_a74c4684bb0443dfa58ec33a213c9295_master.jpg",
      CDN + "aae922d6-e322-4e1b-b9e2-7e26f9f24bcf_fe3487d14ee8458aa2556544765e8fee_master.jpg",
      CDN + "77a15c6b-72ee-4660-b9f7-0bb0a88b76a3_d8600a0f84104efba9ee24189fdcef8e_master.jpg",
      CDN + "32_5a3ca51d4d19412ab5c1f9ce6eaef205_master.png",
      CDN + "22bc6bd3-03e3-435e-8c3f-64e5fb1ffd9d_c725ff66b7064f5ebe6383f8c276d5dd_master.jpg"
    ],
    "MGT00823": [
      CDN + "69237c9b-f4ce-4e10-9e66-afdbf17fbba2_84ad0433313943e49258ac92a4fae2c6_master.jpg",
      CDN + "d040abae-ca92-4c95-bc51-7490286c9c07_4d130e7f7d654cc594de209cc982db87_master.jpg",
      CDN + "9aa84f2e-da9d-4e76-a676-e6cdb574c656_e53f76c65ca74d469cc8261fc042f407_master.jpg",
      CDN + "cdc92449-f16f-4580-bf73-c8a78e2029e8_9670c55f3ce84767b05b2de1008b1fa8_master.jpg",
      CDN + "cb554567-11de-4ad8-b2ad-a490c64171cc_d8c8d016c936490bbe6566a6d4e65f41_master.jpg",
      CDN + "d80205d5-26f9-4c51-aa17-d2b29f4bd69c_1f243381cd9a45c086321bd98bf50894_master.jpg",
      CDN + "8e29490e-daac-4ca0-9582-17b3186d0df1_0fd94f89b4fd4be6b0a383e558e56016_master.jpg"
    ],
    "MGT01009": [
      CDN + "4a3b7352-bf88-42ea-9eef-32686d6cee38_66345650fa564ba09f90216ea3edb361_master.jpg",
      CDN + "ce7a842d-aa09-44cc-9dfa-72dd2b6e3a32_777a51a430a04bc38d05f60799f56543_master.jpg",
      CDN + "f1060049-f7b4-424c-95e2-aa6f45560731_3db4baff86f04be082b50ba74fcba699_master.jpg",
      CDN + "4d42c8c4-aa38-493c-b648-b2fb3f7c9f6b_8ce057a9beb44df6922c7bd76b3a7a15_master.jpg",
      CDN + "9ded364d-c3b0-4775-96d7-644c23ad91a9_64ed3400399f458188932dd09e08da38_master.jpg",
      CDN + "8868d5d2-612a-472a-902d-fdb7ee098a44_0c74be17938a429eb8e6473b1e03c2fe_master.jpg"
    ],
    "MGT01061": [
      CDN + "18_8c4c744662f843cf897aa6a094333732_master.png",
      CDN + "19_afb6b4bc7fc1425db94b1914a4c9eec9_master.png"
    ],
    "MGT00996": [
      CDN + "img_0084_cfe566eb144c45c7bbe0d8f5bc45d84a_master.jpeg",
      CDN + "img_0086_a6c47fa332ad44e7ab1a60d6ef7a023f_master.jpeg",
      CDN + "img_0085_d9150f9387954742929a5fde75e659ce_master.jpeg",
      CDN + "img_0091_d9772def9b0449f0975d4dda873f11a1_master.jpeg",
      CDN + "thi_t_k__ch_a_c__t_n_-_2_410836e920e949e591994317712ff0e9_master.png",
      CDN + "thi_t_k__ch_a_c__t_n_-_1_7ff37757f47c4190acfbb289b2b6399e_master.png",
      CDN + "img_0088_912b6a64175e47c7a0dc5e00fc002f62_master.jpeg"
    ],
    "MGT00431": [
      CDN + "9_074d99af90df41f584674e073eab47c9_master.png"
    ],
    "MGT00893": [
      CDN + "a61d25fc-28ae-49d0-be25-3ac10ab6a016_7adde5e3a60845328d6cc4b2525edbfb_master.jpg",
      CDN + "74489db2-7a82-4e0c-a8e8-d4b09bf9402f_cad2907f4ada41ef8e6d149b1670768d_master.jpg",
      CDN + "a788b856-0e4d-4566-b85d-8f2be9d102ba_d59ec25ad7a44c0fbc2b5c7be83689e6_master.jpg",
      CDN + "7_f58b6d09ce2d4b41a7cc71c17db26b2e_master.png",
      CDN + "cae79363-ad98-4b6c-bf3f-c49aff843b9e_55dae4799bc94d67a2948723dfcc7fdb_master.jpg"
    ],
    "MGT00289": [
      CDN + "94320869-9496-4a77-b2a2-446efce8ec35_30f93008fa5145faba02b0bfa9112e64_master.jpg",
      CDN + "c7e2e3dd-01de-460a-a3ca-cabba4ffc467_9416bc5e20f94ce5be9d65ea987602d2_master.jpg",
      CDN + "ea33a65d-29bf-4e0b-bbc2-13ee4904a411_f23bf26b8fcb451c95c46997d9876f10_master.jpg",
      CDN + "78354f80-83ff-48ab-ab96-452a78c03d2b_0a4f82bb3664497b9b6463ab1d9f04cf_master.jpg",
      CDN + "6_77ef841fba234c258fc346c6d068f8c4_master.png"
    ],
    "MGT00998": [
      CDN + "462a3006-10c0-4ec3-9cbc-6bd7d1d36de1_8575ad9f1fcf4bb8a3c16247f10bde9d_master.jpg",
      CDN + "ab02ebc1-7b1d-4fe5-bcfc-d9ff39a04d59_4438d9119e1449de862259f8948b130d_master.jpg",
      CDN + "fa24ab7d-28e0-4918-82f0-80598eb374f4_9af4383dcbe74664ba0abbfd5fb83749_master.jpg",
      CDN + "83cccecf-acec-4eee-9889-70a46b8fd36c_63a5e81edcc64a209b1af0342c8573c3_master.jpg",
      CDN + "9dbb2872-2d55-4e15-8044-1babc36b333e_dbfc786ab1a448d69092474d7c8a4d6a_master.jpg",
      CDN + "c29971a8-ca49-4688-8356-3e101237c06e_f92631c4e2b6495ab580d1e9c2258a47_master.jpg"
    ],
    "MGT00661": [
      CDN + "b1b6957d-88d5-461b-8c87-a6d74affba78_61a6ee5e512b40ebabab15f00fd94608_master.jpg",
      CDN + "472f30d5-8570-4dc4-a5e2-c841a1e6c56c_0100d3ec047a4dcea7451043c84c0d49_master.jpg",
      CDN + "078404f9-bb2a-44f0-8739-312aa54530ea_e44eea41fd7d4fd0ad83d3b2bf89b036_master.jpg",
      CDN + "42b8e7c4-5d52-4a79-b437-b3dbb27eeb81_45583b4e2cd147289721b512d455d60a_master.jpg",
      CDN + "93b39607-853d-4854-8629-94004c2fd3ea_9f7c7f7c1913485ca7dbdadb67c800d4_master.jpg",
      CDN + "bcded028-ed42-4bf6-9bc4-2cc8c4637d91_7e85bae7a0c24f4eb38c767e64d8bf23_master.jpg"
    ],
    "MGT00733": [
      CDN + "2a12fd51-bc5f-4c7c-96ca-094e10aa8cda_4dd88e5848084ee9be9000d053aac5c7_master.jpg",
      CDN + "eede5f9c-150d-43aa-af9f-d889d987068b_d70e003a2b634e52931e432bc5f074bd_master.jpg",
      CDN + "f8c8f46a-c71b-40d1-ad1f-6dd1006d9924_f7f0ce230f1f4ca1bedc93c051f0bec3_master.jpg",
      CDN + "664e4632-9745-41ac-abbb-22a553f20323_47b7c0dfc5044bffbf75a6ed73e6ad69_master.jpg",
      CDN + "24_29af09a5f0b2477c9992432925f71930_master.png",
      CDN + "ca009733-0c65-4bc3-afa0-a236c3a5593f_15066ecbedd24416b7462ce7306c3f77_master.jpg"
    ],
    "MGT00419": [
      CDN + "20_6e670ed725c840cf98d11e8570053821_master.png",
      CDN + "19_ce161e99e10d4deda76a5b8dbe0cb65b_master.png"
    ],
    "MGT00451": [
      CDN + "4_ab0a59e7dbd14dd183bc84ba0f2e0077_master.png",
      CDN + "5_391c326880fb4ae6aac0921ba0f81d03_master.png"
    ],
    "MGT00746": [
      CDN + "21b63339-d0ee-4c51-9f77-e0ffba9e4cf2_3927b88508024a1b86f33cf51ae5067a_master.jpg",
      CDN + "fae2724d-0e1d-4a08-a65b-4e57dc4acfd4_9885de160f9f4decaf75cde922310841_master.jpg",
      CDN + "7961f102-c423-4109-b337-c9382d19c473_797d3b52bce94205b391448fe31d8e58_master.jpg",
      CDN + "59a965f5-8b2a-468b-8d52-541528ea167f_007abb15d2b94dbb8994430b0a6944b7_master.jpg",
      CDN + "569851e4-a640-40fb-ade0-1e4187807a79_0c05cfab0cb74c1bb5a1aae4f70ea4fc_master.jpg",
      CDN + "fd3770ed-fba5-4160-a22c-6c1deb4ccd2a_080ba359167348febbee4803598c5c51_master.jpg"
    ],
    "MGT01059": [
      CDN + "d6db2448-949d-42cc-87b1-61b686a13e12_89ba8461076940b4bf8d8e4dc6da80e0_master.jpg",
      CDN + "b7bf7cb0-df5e-44e0-b107-5840051d1f3c_eb1002eaf1a44c57b34370aba70dcab5_master.jpg",
      CDN + "337aa54b-5ce5-4c42-ab12-fc222cd98f82_12b1afc8c2dd4215ab27202944582fde_master.jpg",
      CDN + "5846a086-fbe1-4ebd-8ddb-9d7188907a77_80fa7501772449a0beb67a1f5cde20e4_master.jpg",
      CDN + "03300299-997e-4ae9-94fd-177700b7c90d_c9d85a1810de401f8874cb72327cb19a_master.jpg",
      CDN + "89697757-f4a8-4fde-bdc9-18bdca56b3b5_2b80b70f72ef4bef816928cfb41da08d_master.jpg"
    ],
    "MGT01054": [
      CDN + "7b0467b5-21fd-4519-8ec6-b52bac467f6d_3b79ecc3573f49769341995730e638d1_master.jpg",
      CDN + "dd316439-d322-410c-93cb-05cfdf63e975_1b97d6d9bd1e48389420ea046334c94e_master.jpg",
      CDN + "b0e8bc83-69bf-44e0-a226-657a76869c3e_004a33b903124ee3be48fac38f8bb86c_master.jpg",
      CDN + "978c7b77-646b-44ec-bf7d-39f1576f89cf_fab7fd0471f049f8b3571beb0c110591_master.jpg",
      CDN + "f74603ba-d7f2-4afe-a76e-e4da0a272274_08d411a084c147c98e01d86c730367bd_master.jpg",
      CDN + "8da352a2-f560-41f4-a4b6-fd1ba5be9251_805eef5e8f054fd996b9e4e8203307bf_master.jpg"
    ],
    "MGT00781": [
      CDN + "17604945-de44-4b69-ab49-b4969f9b4c1e_c8bedc34b59343eda411c59653eef3bf_master.jpg",
      CDN + "d79b3804-5843-4352-9375-0d96be9e4e61_b5614b49b7a2459b83d2a9e0ffa4df8b_master.jpg",
      CDN + "be515515-36dc-4615-95ab-548cc7b5d770_b1c379a4dc7f49018effa12f2976fe74_master.jpg",
      CDN + "ea1c3598-8b07-4106-b7f7-0084567e70aa_799cde38039946a99bfa7cef540bc2ec_master.jpg",
      CDN + "4e3c9370-e0ea-4537-aa8d-dad43bb6bc34_d7fffda520094cd0861aa5cb80788daa_master.jpg",
      CDN + "ac830e84-3549-43ec-a54b-72e7cadf9b79_f77cd220fc2e45df96e909a04cf47ce5_master.jpg"
    ],
    "MGT00958": [
      CDN + "2e7c36ca-07a6-4990-ac40-e24232536878_3f4ad72b61b646078034029a909d6076_master.jpg",
      CDN + "0661d204-f0be-4bf1-9b76-233ab1e6f1ed_86a37501b0e14d58a8c5689f1c570bfe_master.jpg",
      CDN + "2b6bf054-d57a-48f2-aae8-af427d9b6dad_91ed26258816484087c2cd3a050ffa9b_master.jpg",
      CDN + "aa0e032c-5ba4-4306-8f36-002f946db84c_9febf8cef0cf4f88a47430cb3ea004e9_master.jpg",
      CDN + "d4cd26e4-04ff-49c5-a629-b47d11ee60a5_d4853bfb24814cbb99d5da46dd5282e6_master.jpg"
    ],
    "MGT00978": [
      CDN + "41_cb9ed2ae554847fc9feb1b030abbf999_master.png",
      CDN + "42_05647995e8ea44e3830b8474a720277a_master.png"
    ],
    "MGT00971": [
      CDN + "41_1bf6f40616ab42d4a7f954de232bd108_master.png",
      CDN + "42_ae4472002e374c2aaab1e5035668be09_master.png"
    ],
    "MGT00892": [
      CDN + "13cc67b3-573f-4b6a-8138-bb20801c6469_6f5e2d58b7134bd28d3796d52ab373ed_master.jpg",
      CDN + "b360666e-1c20-4cff-98a4-cebacbe240fe_b7525b3f4eae432f9eb5ce250875434d_master.jpg",
      CDN + "296961d3-b1ba-498c-9b29-127c34b2e280_b985c2c95aef42309efd00ccf7c6d013_master.jpg",
      CDN + "b6f24e57-233b-4f5c-ba84-4de7b2a01895_c8b334e7db384992ad05394f19101291_master.jpg",
      CDN + "4_64d969ab082e4c6ab10407828dceea71_master.png",
      CDN + "6f07124c-3435-42f8-bd17-44aa0964f14a_6bc5611525a246a392f651c01191ebb9_master.jpg"
    ],
    "MGT00895": [
      CDN + "965d0de7-874c-4934-9255-1dbe49bc8c77_49169a662c0d4699a98b409e51187f91_master.jpg",
      CDN + "efc0a2b5-02ea-41f7-8a99-50efbb335b90_a2f9bdd7f3fc4d0ba240e4e84fd95cd6_master.jpg",
      CDN + "06089c44-e31a-46c7-a5a5-5569b9f8776f_121ecd70adbb44549bbe5d1bda68e790_master.jpg",
      CDN + "37493cb7-1342-4c07-a26e-c74d27d929ff_27d4c3d6d41748eea06b65cb7d2d59c6_master.jpg",
      CDN + "8efa0e60-b3f5-4a39-9f60-26cd2e77569a_e398020da1e04842a3ef3093f7e5885b_master.jpg"
    ],
    "MGT00850": [
      CDN + "5_204c69c52e9d4bb99afbb7fc6a471a2b_master.png",
      CDN + "27_7fa77e48032743cab737a5d926e042de_master.png",
      CDN + "28_e99de2acc8b843cbab8ab354d37a5ea3_master.png",
      CDN + "29_646e8d3a015f4d6484a67e61a086c4fb_master.png"
    ],
    "MGTS0023": [
      CDN + "f6d654d3-e90b-428a-aadc-8b6cfc04c6f8_40e65945e6244d3ca2432ad76e697274_master.jpg",
      CDN + "df3da142-b278-4fed-a4d1-0eb20e272aeb_d9b85246cfa74a78931565c0ef13c98b_master.jpg",
      CDN + "bef1ce25-c2cb-4a3f-83d1-a74e9c398dc9_4e1ac1e851f54f0fb1bff35859ab42f6_master.jpg"
    ],
    "MGT00039": [
      CDN + "27297f12-7dff-43a3-a06f-8335c138bc3a_30519ad0796949ce9b7e113bf2139e91_master.jpg",
      CDN + "62554403-f718-4446-89e9-706aaae1696d_0be3d324a6dc4b07bfbca10e63a829a8_master.jpg",
      CDN + "39525c8a-804e-427a-8b37-7ca7f76d8346_812b3108c72c4832a149ce88072c8f86_master.jpg",
      CDN + "ba3e7ea7-496a-467a-82de-9a52ab72a16e_5d6885b02bc44aaf9b4e60554299121a_master.jpg"
    ],
    "MGT00765": [
      CDN + "0a73a0be-0d1d-40cd-9a99-e6644cb8a9e4_2c61867e88554c1abfef13d3177e01ff_master.jpg",
      CDN + "b12bb663-015e-4edf-8001-6e967715f930_95f36a98c1284d8abb2378035e054561_master.jpg",
      CDN + "81de994a-5f2a-423e-9377-9f762c7d5f75_fe5d957232d04880b26198d39d49a3b4_master.jpg",
      CDN + "8a625c64-9cf7-4ab4-8e1f-dd4b06d3d0f7_c591065ca6ee4532a9a3582f329d9600_master.jpg"
    ],
    "MGT00274": [
      CDN + "6c984460-f117-4660-bcb5-8de521901bed_8d68d0dc2b7b4b4db3abd098ef9fa211_master.jpg",
      CDN + "597466f9-d18b-4f0d-aa6f-c76190a6d2d2_104178a0eb5c4cf890361a64aa33dd2b_master.jpg",
      CDN + "3486206d-e4dd-405d-96b6-301f463ac7de_405c3b03a8584264887e102d823b86b4_master.jpg"
    ],
    "MGT00374": [
      CDN + "e39f4e51-c9cc-43f3-9a5f-d6f6c1551ed2_0c8934439e10482088715d7b4690f5e3_master.jpg",
      CDN + "ed3e48f7-bd0f-4cb2-95f1-a6b14ac13ac7_81eb3cb55e7946acbf0ab33dbd454b99_master.jpg",
      CDN + "e75bbe89-4ed0-4314-8729-e2f91239f290_84bbca8c1a5e45aa85d7cc3fa49c3a93_master.jpg",
      CDN + "ccea239b-426a-41af-9755-36b341037f49_dfaa91502b4c4f6e829232475b8971ed_master.jpg",
      CDN + "f859ef27-ef8a-403d-92ca-dc20caeaa728_27c822de0f3c4fada397e93b10462d7e_master.jpg"
    ],
    "MGT01133": [
      CDN + "ccfc5ca9-8fea-4aa7-8c9c-7b6910dbaa54_5397939b32fa40058ad05869f2877940_master.jpg",
      CDN + "1be03fda-b925-4991-9240-ac47596ab1b8_28e981a554074cfab2559122fc9d7a8c_master.jpg",
      CDN + "ae82c95a-71ed-4906-b5c5-dad9ddaa30a3_25cf34049590432b92ba94270d52e60a_master.jpg",
      CDN + "e15d4f27-1f8d-4c50-9fb5-50fc523dc7d6_e5184d1daf0b4840adfa8260920d97f8_master.jpg",
      CDN + "7076a888-cb1f-4f4f-8ad6-bcbc5f12af09_71abe0c5bd1c469ba43964d5b6dd4f2a_master.jpg"
    ],
    "MGT01248": [
      CDN + "5969c7d6-49b3-4e11-8d63-34aa95d87f76_47619c58c17742af93aa0cff3b1d8761_master.jpg",
      CDN + "e81aab81-fb31-4c8c-b05a-56e0505102a8_ac7aa0d916ca4180b35363949cd29a56_master.jpg",
      CDN + "85575a70-e087-45c7-bffa-625333abfbb4_52ef47817dee402f91cab46bedf02950_master.jpg",
      CDN + "ebdfadec-1020-4ae7-bbe2-241419a48776_771ea56a64c049cfabdbe602401c0ba3_master.jpg",
      CDN + "2a19237f-f9b6-4bf1-b561-a6ee27aefdb6_2ca77428b19b4baaa9ee67d98e7ca920_master.jpg"
    ],
    "QZ00601": [
      CDN + "bdbb18de-9a91-44ea-ab32-be6e1056e57d_db8a73291d3f439ea9936643cfd472ae_master.jpg",
      CDN + "d541475d-e957-43d2-848c-d8274e5ca9a9_7ad0febb9a8c4732b79477e683871eaa_master.jpg",
      CDN + "7fbb5c31-e536-4934-93d4-12e396015df9_c4147b6d21aa48eeb3784f847e53e4f9_master.jpg"
    ],
    "QZ01002": [
      CDN + "b6dec067-708e-47bf-b9d6-0d8145abf115_fac22443538f4475980bc379a4bd0ebe_master.jpg",
      CDN + "30446066-cc78-464b-b906-e2ce2a1ae61e_ef81e994c8ca4ba889e3cea6e33e83a7_master.jpg",
      CDN + "5138a2ad-70c4-4481-a2ed-f646d8a7b4dc_94cbdc2431784eea8fddb32ed8a4d60d_master.jpg"
    ],
    "QZ00402": [
      CDN + "46ae23ef-4c1c-4718-9400-95b607eccf85_8f13c7f01c9a4d1ca093d73acb8cd6bb_master.jpg",
      CDN + "1c2b3fa8-5699-4453-90f1-35b1dd1f2e16_26e3d5ede1af450a98453283726e1054_master.jpg",
      CDN + "0496ba71-d8ae-4220-9e1e-ddecd98717d0_d312ea960ce541909ef825aff7824fe2_master.jpg"
    ],
    "QZ00102": [
      CDN + "519f0bcd-7f26-40df-b3ac-603bfcf52ba5_c99d4cae53594a5e8eac482ca682d36a_master.jpg",
      CDN + "d00cca61-787c-4e10-a3de-7215b59e50a3_330abc76970e4d4b99dfed7baf45cf2b_master.jpg"
    ],
    "MGT01204": [
      CDN + "57662c64-f223-4bbd-b3ed-8af6904b5e7f_ade754d37c484a1ab0e0d8706e1b57cd_master.jpg",
      CDN + "69a2ad89-df8c-4f81-88c6-0e949c0a52ce_c70df5f6f7a0496aafa8fede0ea57488_master.jpg",
      CDN + "a3336037-8809-400e-a7f1-1cce9d93ea7e_46d07e5aa1374909801af9d5cf546972_master.jpg",
      CDN + "45bbfb80-9d57-4f2a-a915-d198fe0817a9_009cab646f974e529e08c4b21f61a8c3_master.jpg",
      CDN + "1806babb-b343-445b-884e-f7c57ed6a7ec_0bfe4a8c3df3402abef4f0d5be2b3b89_master.jpg"
    ],
    "MGT01205": [
      CDN + "55b349cc-cedf-461a-a39a-0f4b82adf39c_67350ef3859c451a9310aa97b89a780b_master.jpg",
      CDN + "c6d0018d-211f-495b-8def-1c64666abd3d_5d9f4a20fd174246ab4370df7a4dbfcb_master.jpg",
      CDN + "dfc3a742-762a-496e-9f1d-776d766dfc0a_0c6964e097b243a39f7b813e261d03b5_master.jpg",
      CDN + "a8234687-f2d4-43eb-998b-7a009f639f07_ecb7cb0c750848bd9e509da8902504ad_master.jpg",
      CDN + "99e92fb3-d1db-4ae7-959b-8d29fa47fe23_5f6e58efff104deebfbe9c3d40b26914_master.jpg"
    ],
    "MGT01169": [
      CDN + "e7e2265e-19b5-4b3a-968c-23bbc0dc942c_375de5f5c0ab4237a125b47b8adc4660_master.jpg",
      CDN + "8ffbb417-cc45-40a8-a228-48f4fccfe2e8_99b663be3b324e858f84251166344434_master.jpg",
      CDN + "6d4c2964-52ae-4116-9291-2acb66af5377_a1a6041fd76449efabdba4cd5934b561_master.jpg",
      CDN + "23c12d13-f52d-41bc-9a43-74b937af0289_90bae40a910944df9c227477acdb65a1_master.jpg",
      CDN + "99afb905-f3ff-4107-9472-a15ef68a05b9_75d90432639e42cdacbde101b5514cf0_master.jpg"
    ],
    "MGT01212": [
      CDN + "cdd6fce8-d794-4f2e-9abe-5f622d500b36_039be2616a8546b88981e28b2e04da52_master.jpg",
      CDN + "93b60d77-9837-4d18-8423-3ecce59a6900_2afea2000f5b4b9a8317071608405676_master.jpg",
      CDN + "d356a9aa-2cbb-4f40-9bbb-59a10323c880_f14b1e20624a4e499e042ccfb41d34e1_master.jpg",
      CDN + "c00c48a9-6692-4918-b30c-7d2f23195757_9e8960aaffa54423847905aba3206a4d_master.jpg",
      CDN + "47a6e770-2411-46b2-9e6d-5cc85b9b842d_b060b4b0d0c743f8b3cbf98ba96020eb_master.jpg"
    ],
    "MGT01217": [
      CDN + "3b39c81c-0e24-457c-bf72-c702ba14389f_205f791ac6dc4ee5a38b445a80c7386e_master.jpg",
      CDN + "0a821963-f649-4b77-9c3d-53c0d8f81d7d_5123b4be1d8e4ec3b231fa109a374fd7_master.jpg",
      CDN + "f6c611fb-c733-4fdd-b00a-1b0b9f3cbc8c_11d599ccaa364698af557d419ac7ed7b_master.jpg",
      CDN + "42c1c430-ac6e-4a83-a821-ddd7813ced18_896495c068f247b3b483999ce367c5e3_master.jpg",
      CDN + "b2998690-3e40-4fe6-9106-aa05156f2d4b_3eaad3336c2f4bb9908b4ca022434c8b_master.jpg"
    ],
    "MGT01182": [
      CDN + "443e5d8d-b3b2-4f40-b2a8-203ab5c6f7b8_d4b16e6ec9e24f16a80336b8544e3dd8_master.jpg",
      CDN + "a44d6759-903b-4800-99ad-0cefc2187f15_a3237f1b52ea435cbef24e3245d3df51_master.jpg",
      CDN + "4a361454-ec17-4827-8e63-77f1d3e4d750_32f306278fd54373b53a8b49dc7983cf_master.jpg",
      CDN + "6de980c3-295e-4dfc-a727-1b5cbfb82ec8_04bdc82eeb0848c9b5282fc43ba0d1bd_master.jpg",
      CDN + "0c9d1428-30b5-403a-bde4-bdf1292d4902_b6a98e529b9f455db04154f1fce4b579_master.jpg"
    ],
    "MT00581": [
      CDN + "9cd78aaa-597f-4602-955e-891538f0272a_4df03c6b8c6d4952ad58e76fefdd6546_master.jpg",
      CDN + "a539ac45-51af-4739-8993-e7e4bb20770d_fc57e0cba31d4fb9b4af6b9ffa35475f_master.jpg",
      CDN + "21893640-65d3-4adf-9fb0-0dad402aac62_85c0a3c3b5cf43c4ae4fc4db52edd76e_master.jpg",
      CDN + "d1308aab-fa0e-481c-abf2-d851e4afb200_1112d0475fe74544987cec77c89607c1_master.jpg",
      CDN + "55a68234-c262-470f-86e2-b9021de05d17_2531ff952710497bb5c224f553c8d601_master.jpg",
      CDN + "bb03fa28-0e8e-4451-ba97-f54dce81934f_2350aad119c54e498d87f448a44255cc_master.jpg"
    ],
    "MGT00528": [
      CDN + "0992445b-73bc-4d1f-ad0a-cc12be63349a_33be0c1ffe274740b177e8d4cb434222_master.jpg",
      CDN + "01325d44-e479-467e-bdf2-53f97d0ab33d_e9cfe0d936414449b0e191b8e207f905_master.jpg",
      CDN + "8c38bb2c-6119-49cc-8380-c6559c2542af_e57062b1ff1447d4bd75175cdbae316c_master.jpg",
      CDN + "ee91f88f-be11-4100-8728-b48477a6ad39_0cf47704c73845318bd7ee7773a0e2a5_master.jpg",
      CDN + "d9b7a7fa-1224-43aa-8913-d3428a73d07d_efbefb76cb1d4b6e8822e5d1b2bd56f6_master.jpg",
      CDN + "97f4b68c-511f-4322-879e-63f58dc2cdde_60ba32dc6dfc442e98228a99be5c4239_master.jpg"
    ],
    "MGT01132": [
      CDN + "77f0a7df-8f08-4c57-9c5f-fef59714d134_ac1b8682f9b04abdbcd3bd0240142ee9_master.jpg",
      CDN + "3e4d9c83-68bb-44a0-9e79-cf1c020072c5_72becc51f605401298b9dd6e84697414_master.jpg",
      CDN + "93832954-a50a-4474-ac32-3f8c571a3f5b_e41054b5e6d548c89889c96fe7cb4147_master.jpg",
      CDN + "7245d5f7-eec4-496f-a46a-c131f14d949a_ee7a0377b7114e55ae94f3c6186420d2_master.jpg",
      CDN + "17d333b2-c77c-474d-8f13-eebfae88dff1_b47a39d95be14508861181e549c1ff98_master.jpg",
      CDN + "952b2a18-cab4-47a3-aa3b-afd183a21578_f3cd1aa25ead4b698c2740e7dbce4687_master.jpg"
    ],
    "MGT00972": [
      CDN + "a35ae57c-9c4a-42cf-ad77-014c663c5e0a_fcdbf4ba513844569a3a268e5705583f_master.jpg",
      CDN + "d550202f-ceaf-4c22-8dcc-285097ce8ed9_8c0ebfcadc0448d2a9307275d22d11c7_master.jpg",
      CDN + "220aa087-3c5f-4564-839f-280aa7ebd3d7_8de5aa91c231492a9890c18453b4ea3e_master.jpg",
      CDN + "2757ce82-61ba-4eb3-8569-419b68e8fa6a_e0f0ece8e9dd449aa8f07fd0b9e20f03_master.jpg",
      CDN + "b236be87-3259-4f33-bf70-87dee7650e9b_345beac85d904df081b65af8cde52a42_master.jpg"
    ],
    "MGT01096": [
      CDN + "df45e5b3-42e8-40a8-9b93-ca85d1acd856_17ca172124e84b6bafb0e660051e4616_master.jpg",
      CDN + "c35d7cfe-b161-48d0-8587-a5838109b6fa_5c2404261e374347af1a59725dacb958_master.jpg",
      CDN + "acf4f86d-2ff0-4809-bd24-0fb80df758be_75850a9828d64d0e9a8ccfbed832ed4c_master.jpg",
      CDN + "ab446b2b-18fe-4bf6-a684-36372a5a495d_071166ada12f45079e96980b8a102724_master.jpg",
      CDN + "19dc6dfb-e6ca-4601-8104-b5d9b2d12c8b_1aca0aa354be45bcb169b85f53401efe_master.jpg"
    ],
    "MGT01160": [
      CDN + "0b8de938-2991-4ea7-80a6-7d4a251f57ba_8a3a70215961456ca3efa769b34f5c6d_master.jpg",
      CDN + "d4551d81-3555-4568-9329-146f58b717b6_6fd4c764f78242c79e8c9386c4b7d7a6_master.jpg",
      CDN + "bbe3191e-45d0-403b-a6c8-8197bf6fefad_f813c94375874c81b5225827f01297f8_master.jpg",
      CDN + "a852fe59-eb52-4908-bd91-93153663dffa_33ae8892bb2d4945bb866fcd45060252_master.jpg",
      CDN + "82db603c-698d-4d5e-bb21-403b4b4e64ed_b940280ecc9247e387b317b7437bba6d_master.jpg"
    ],
    "MGT01098": [
      CDN + "97afeea5-15fd-46f0-a53e-35d3288d6860_ed85ddc32b5d41b89288d120bea1c7d8_master.jpg",
      CDN + "3c1e559a-9051-48b0-8490-f64b349d34c7_390bd4ad42454a2d846ab8e4d2fbb191_master.jpg",
      CDN + "d127030c-d952-40ea-bc20-cebd171b2bbf_57427933c723412ea2ef09117ab7a508_master.jpg",
      CDN + "74244a60-5d94-4fd9-bad4-b6ad195c4ea7_ff81225402e54dc49479f533871abb93_master.jpg",
      CDN + "0d946ca2-6273-4333-91c2-746be24f6e41_de1138feb1004d06aaa3e797bc311441_master.jpg"
    ],
    "MGT01118": [
      CDN + "5809e461-a436-4e06-bb9b-e50273f5ff82_238a17fb54ff418da35021b38558c0f0_master.jpg",
      CDN + "26988fa6-ab15-46f4-b7d5-80dc1d8446db_53b39a1387bc40429041ed92d1662bbc_master.jpg",
      CDN + "3c419fec-abb6-4002-9f2b-71d7c6dae1d8_43ef499975424970bbcf60ecdbc0a895_master.jpg",
      CDN + "f2724807-32a6-408a-bd06-ad592f1348d7_2b6e1c86a1ed40c7a1034a8d2423cda4_master.jpg",
      CDN + "895082d8-5d26-4808-8e8b-aa30559f0334_06aaf7668d1241fb9f37594325f1427b_master.jpg",
      CDN + "6943aa6a-ee66-4a0a-8bc9-c879c8f6fa83_d18ce9a3d95b4513a730d7ce74f07002_master.jpg"
    ],
    "MGT01143": [
      CDN + "187dcdfc-9704-40da-8bea-a1b7f92218d4_c0cfb1e036174b7b9f96dd467e5a60d1_master.jpg",
      CDN + "bdbcbc66-4711-4b2f-9aba-d14d0c3ebaf5_12a784d589804fe6a889f172fc4e53af_master.jpg",
      CDN + "c1fc2f81-594c-40a6-a90c-acc0d262d411_5c35f8f6f4914723be86c5327212d7aa_master.jpg",
      CDN + "5bc3f782-34b6-48c7-9974-af27c49c2354_134b7f3799254ac487c54b2155e93614_master.jpg",
      CDN + "380ccb42-4c7c-4676-b215-666b7b8d19c9_7fa92e5c2b664ebe911f05cfac8ffccc_master.jpg"
    ],
    "MGT01185": [
      CDN + "732b0507-52a1-47d2-aa4f-4ddb74ad3c4d_895079e4714149849d8b181aaa092d51_master.jpg",
      CDN + "090c9958-f6e3-47f8-b01c-71846b8e9634_d34afb5493054989bc1a4c503cd4c913_master.jpg",
      CDN + "6602a7e8-3242-4531-81d9-f6ebf0a07020_50c4967dd8844374a0303ba2f6bc78af_master.jpg",
      CDN + "216946ef-cdff-4c16-bb34-7f63807fd44a_995fa28b69f34c83ad39fd236e7d61b2_master.jpg",
      CDN + "523b1c34-0376-443c-8aa6-f7ca394f86ef_7307dedc30d0443a9d0df5531612c173_master.jpg"
    ],
    "MGT01157": [
      CDN + "b2300adf-c92d-42ca-91d3-ed3d8fd224b1_9e9a17fab94f493bad247ca1133cdb60_master.jpg",
      CDN + "0e1e7849-b5b7-4946-adbd-2a0a2c12071c_c7b84187ddcc4e4aaf57e2310784f55f_master.jpg",
      CDN + "7334e23a-2e1b-428b-a798-3f7475c7c193_add94bc673ee4ad99d5ef13680eaf22b_master.jpg",
      CDN + "b7efd1b1-3ed2-485a-9876-96e9d1d8b1de_c37a9801568e446d83d1795c974fcb72_master.jpg",
      CDN + "8374cb2e-d05a-434b-a27d-690c66a3ec44_455fafb25ace48a2862bb0e2a00c1646_master.jpg"
    ],
    "MGT01177": [
      CDN + "01ceaca2-1657-4091-8820-c4ec0f90c1d9_0d7d275fa41847f0a0e796cc685dc1f5_master.jpg",
      CDN + "d9a0ad6e-4188-47f2-8a6c-4c3f6e6ded5b_620092c91e8149ed9d9b02605613f699_master.jpg",
      CDN + "0a89cf03-6ae7-4cd3-a899-8b92bd27c3b1_65228d8a473146c8a5671a361ece9763_master.jpg",
      CDN + "4ade7285-a4db-41db-82d2-fc7f0132f0c6_62dd9a296b38453181954b98e7913f64_master.jpg",
      CDN + "fac650d9-20bb-40b2-8c47-7159ddfa43ed_7665187f5f0b4029816af5b804037efb_master.jpg",
      CDN + "b826bbe1-f1a1-40b8-a020-76987e5c6229_c7d1115792e3428dbb4715ca90391630_master.jpg"
    ],
    "MGT01129": [
      CDN + "0f97e1ce-f20e-4f5d-97bb-1c5674d4cbe8_371ce6eee76340b6aad6ba6e6385ccce_master.jpg",
      CDN + "31d83500-4bcf-40c9-a8e4-e064a512b35a_ab26d4e4b8274454ab44f8f19e9244bc_master.jpg",
      CDN + "34c4b05e-a353-44a7-9aaa-12cb38f88349_59e47a99beb641f58cd03c9507bf81f4_master.jpg",
      CDN + "0092deba-27eb-4c67-9245-08a3672b4b06_9fcbdf0414cb4b1ca7dfbfbcb2ccf474_master.jpg",
      CDN + "320f23c7-0c63-4689-bd15-c99a62ea12cd_675e54745fad4eb68c3d5f18a52607ce_master.jpg",
      CDN + "bb79a802-2528-42b3-8eaa-610acb104c30_92e03f87e1d24106a957adffdf2dd7c3_master.jpg"
    ],
    "MGT00735": [
      CDN + "305bd5d3-6411-40cb-9f4e-35b5869be85f_068b3f8a90cf4940b32a1a89a3045d95_master.jpg",
      CDN + "52bf0078-38b4-4704-9363-19d730857174_47a179ec2af7496cb7f87392e20fe71c_master.jpg",
      CDN + "6134ac9f-a65a-4997-8b06-ce9f83fe3a43_5ecb39d9bc1e4628983a8ef783305a27_master.jpg",
      CDN + "c55d267c-2a40-4086-9ce1-3067864c02a1_e4b7f8cdd5134529949ff943bc039c97_master.jpg",
      CDN + "3e112f9d-a733-42ff-9e14-013a1caaa3e5_0fef5ea0721d42e2a6c20a83d5d488b5_master.jpg"
    ],
    "MGT01182-CARD": [
      CDN + "e5eac3e5-14f7-44d1-8860-78c07b3dc88b_5e1180205364408ca52bad9b863f8c96_master.jpg",
      CDN + "8dd4d33c-379c-4376-9dd0-81116e5c346e_8ddabaa70af041efa8e3f157a0f6c0de_master.jpg",
      CDN + "3f43e4bd-2492-463b-bc13-1ab097ebca44_fb0bfd52572944f0ab847f4c4bf855b2_master.jpg",
      CDN + "8f353048-daac-4438-b5d9-47316db722ca_172ed280935d4be2a274059d715cfb8c_master.jpg"
    ],
    "MGT01054-CARD": [
      CDN + "cf9f919f-3079-4cf7-b0c6-f4a375002017_5cb1b85b9c214a34add0ef0daa6401f5_master.jpg",
      CDN + "f1074ef6-a0b1-408a-8107-ff0d0aad7528_65b1b8228e7e4305bbf8f618bbc4039b_master.jpg",
      CDN + "b58a46c2-1654-4c2b-bbfb-92db3ecff5e8_d0909a00f7784f3b85c81e0b74e27073_master.jpg",
      CDN + "0424c566-5460-4f3b-a107-252392d4e30a_9974a699473e44739cccbdfc09372973_master.jpg"
    ],
    "MGT00858-CARD": [
      CDN + "ded4dda9-9474-4047-bf71-4a689dcf660a_a70b39887f324789bbee6690a7312e12_master.jpg",
      CDN + "415c6f5c-1ca6-4ac9-9897-f75398b8e942_62988f92d9f640898ded125815494f56_master.jpg",
      CDN + "df86439a-2b63-4bb1-98eb-c32c8422a7e9_a35b0ce7ffe44fab87c926d0e695d062_master.jpg",
      CDN + "b724b7ee-f308-4531-85aa-2255c11cfb42_53ccf7ba8b654acc85607a107f88036c_master.jpg"
    ],
    "MGT01087-CARD": [
      CDN + "4c19ffcb-3a6b-4a7a-9ff7-74331ca3b305_f99461fde8644ade9ab6a09c3cd64f7f_master.jpg",
      CDN + "5a1ffb9a-affc-4d34-8129-46e29a2b6013_5ff8c85ce2cb4cb192203a82dee5842b_master.jpg",
      CDN + "888fdeca-dac8-460b-a3d8-d57ffb13e3ef_b8ad20e4c7d44b42ba8294c2c6cb435a_master.jpg",
      CDN + "929e330d-142e-40d1-85d0-94ee5ec93ff5_003b700436d243fcbabf39a66b5cbacc_master.jpg"
    ],
    "MGT00967-CARD": [
      CDN + "c18c1af7-70f7-48e5-9bf8-4d709c2c4c8c_d5aa751862154c598655a0ac17cfcff9_master.jpg",
      CDN + "6d6cdae3-28f4-4500-959d-ce791d67eca4_357ea26511be455eb0034860ff2aa056_master.jpg",
      CDN + "5db7dc78-7018-4c46-b2da-12268eb78a0c_0f6dede518914b32adb38b0690f329bc_master.jpg",
      CDN + "cb1cf2b8-6617-4fe5-8314-3247c2c2c39e_073229dd567642e19995f574eaf11d57_master.jpg"
    ],
    "MGT00049": [
      CDN + "1_12af083c75ec405cb664257d667bad5a_master.png",
      CDN + "2_c41ede0563294272a0446447d3b95306_master.png",
      CDN + "3_f0a2166906b048679fa686bdf9cedab3_master.png",
      CDN + "4_1cf707d3ec6d49a2a92ff996c733071f_master.png",
      CDN + "5_3568d70ad3be4787a5768ba25bbc591d_master.png"
    ],
    "MGT00004": [
      CDN + "1_d866767f54894145983076cb4a6b3fb5_master.png",
      CDN + "2_41c250974c244bffb9534d73dc65aae4_master.png",
      CDN + "3_c900d222e2ac4c3f871d7d34f919ff86_master.png",
      CDN + "4_c490caf586e9422b9beec224e97158a2_master.png"
    ],
    "MGT01105": [
      CDN + "8b5e2fbd-9836-4be6-b90d-ba67d108423c_d48cab00e14448bbb9e5761ef08a11da_master.jpg",
      CDN + "b289a89e-c737-4dcb-b5b3-9181073b20ce_544d7ae46e9f4bd5bc8216d6996792c0_master.jpg",
      CDN + "c170e647-b1b6-406d-960f-530e0edc948f_3f958d5a01654a92a182d9192709cc24_master.jpg",
      CDN + "9b71afcf-e344-47a1-a7c0-32b6e50c5776_395b03fb789842fcad9f755d652d9079_master.jpg",
      CDN + "cb55d936-bb44-471a-835a-a8c0d5f0434a_1d951fc22001461985978c6e1fb6562c_master.jpg"
    ],
    "MDX-FF": [
      CDN + "62c498ae-2196-4bf4-b54c-020d9c24eae8_88afd6bf374a4763b672ae12b2ce7319_master.jpg",
      CDN + "2590226e-84dc-402b-838f-1f8ba74ee491_f011a35690344c58aa9713d3ced3be6a_master.jpg",
      CDN + "d2c29788-75b8-40f0-97de-1c6727d2f3b2_c6230dbf168f430f8d5f711a52e18655_master.jpg"
    ],
    "QZ00101": [
      CDN + "430f0a15-664c-4921-8846-81d81d6cbbb1_ef6c7c5709584e31ab2a8c0396b34ab6_master.jpg",
      CDN + "cb8a3c3a-86ec-4384-9e24-68f9f576f4d1_70cd27de9a5849ffb927e860317077c3_master.jpg"
    ],
    "MGT01106": [
      CDN + "894666db-71bc-43a9-89e6-6da4722712cc_fc63f81ade9d4b3b8983094be5069a03_master.jpg",
      CDN + "c9cb8bc9-6bba-4f74-bbd2-e3ce82fafc0a_b02b99f470444e4091bbec4cf9ce202b_master.jpg",
      CDN + "0f0545f2-ea46-4803-a447-01c6c22032c0_fdf98828f52b44e4b07a456e491b86fb_master.jpg",
      CDN + "f8c43926-e23d-4630-8e1a-1e49ca31b837_cf8400ea0bcb48fba7c50e3084eac362_master.jpg",
      CDN + "a4c74ac7-fdc0-4ada-a830-1b583c889936_ce42a828112b4235ae180dd5aa4d8411_master.jpg"
    ],
    "MGT01087": [
      CDN + "1964d9a3-586e-4746-8b55-5da6924318bd_1814c69bd6614997b89469c46701d53f_master.jpg",
      CDN + "686aace9-9bf0-4062-ad02-ee45c541f6ab_14ff457e86584faeb7075336361941e8_master.jpg",
      CDN + "43e8df7e-9265-4061-a836-0615638e0c98_cff849e528624b1dac80eb2164e59164_master.jpg",
      CDN + "d5f87064-fb4f-4c48-baa8-6d73a0729b1f_2e41355deb904c04a0c7ce6f41e5c0ca_master.jpg",
      CDN + "fc4d6cc8-431e-42ce-a47b-dff5bd6910c8_d5e213c2641742a0821c5f6b435cee00_master.jpg"
    ],
    "MGT01130": [
      CDN + "68d52658-d346-4738-9e48-119cf281099b_defdb43cb7e047a28bc01425429d3b8f_master.jpg",
      CDN + "b1a4af22-4164-4933-9051-5cfe87560922_fc6fafe451d349a489ee63d55fd69560_master.jpg",
      CDN + "5de7afb0-157b-4d51-816a-afb191088193_fe7a3882b12945d18b4a1d731e93c0ee_master.jpg",
      CDN + "a87cd839-af9d-4af3-91e4-a9953339475c_80bc1719235d4ffd89c00b15bc1f3010_master.jpg",
      CDN + "8beaeefb-3019-4b62-be84-8a772775a367_6c24f25073f844d8a757b51fef9546f0_master.jpg",
      CDN + "2e847501-a0f2-48ba-98c5-9cd6dd7625a8_da476db46bb34d9ca85df9c3d13a233b_master.jpg"
    ],
    "MGT01076": [
      CDN + "0076828a-abd0-410f-989c-ef2c78003e31_4a465f93bb004ad7858dedd8376eb908_master.jpg",
      CDN + "08fb71c8-225f-4209-ae34-a06cc3e7a395_69def5a76f7a4e45a695028aacb58838_master.jpg",
      CDN + "ba5b05dc-072b-47c0-a3f7-fae65eb70064_2b665914e33a451ba775b7502d52e48b_master.jpg",
      CDN + "1495d747-7880-4039-bedd-128ee0b52a88_9ab2aec002934b95b0744106b4f7b7d4_master.jpg",
      CDN + "0960c092-dc98-4625-9851-cb97aa839d96_eb42d7fe4f6345c3bd0c5ab0dd8b7796_master.jpg"
    ],
    "MGT01134": [
      CDN + "05cddcbe-e2d5-4a1c-8688-10905bb4938c_42a8714c3a71472689c20d48fdaf8bc7_master.jpg",
      CDN + "7ff98bdd-b0b3-4606-970c-ec5294f4320f_9dc8296fc7914e79a209a193c5479a89_master.jpg",
      CDN + "f19e728d-aefc-4373-90d0-c495aadf30aa_30e16db52962431e89075c0b3ec67c5e_master.jpg",
      CDN + "2c9447e4-89ea-44c1-87f8-cbab4fd3d8b0_7603897a410543c7aa23b68f5a9e258d_master.jpg",
      CDN + "4b0ebec6-21ce-4e15-b4d8-73dad308262c_833730ceb67b4888bb1cada4d4003a41_master.jpg",
      CDN + "7bee41c4-5740-43f6-b5c8-760b16ebd7cb_e5e866b41bf14e8f9056cbdb594c390d_master.jpg"
    ],
    "MGT00894": [
      CDN + "df6fe83e-af6b-45a0-b9b9-cfde74907976_021004172e784cafb3ce5f5d6e90c82b_master.jpg",
      CDN + "381bcb22-5091-4a94-ae62-cf3d9d35f47e_3ae578f99e674b228e3d6566a3007129_master.jpg",
      CDN + "9860f182-2bb9-4c2a-8bf3-5edcca320079_46ede8478c42446fb8a369fc9d5fed6a_master.jpg",
      CDN + "be75b66f-ca99-48d8-8e6f-58a474c74d7a_e9b8b097d9fb46e3bce9b5714fff6a09_master.jpg",
      CDN + "d1f7605a-ae44-4264-b3ad-0e56f227c80b_f364baeaa7724985b698899765433558_master.jpg",
      CDN + "4efdbf16-a602-4f36-a45b-eb0e8d5dfeb0_1965848b3929477eb6e0c449bdcc6b4e_master.jpg"
    ],
    "MGT01089": [
      CDN + "c8834932-9b56-4d04-b580-fcfb7e306905_25ba3387c88946939610bc3a6a1b4fdd_master.jpg",
      CDN + "92e1127e-44a5-40b8-bf5e-8510d92da44f_4211d67e3a4c440f9f2b6a6362889d96_master.jpg",
      CDN + "9039aef1-561e-4686-a02c-45a4e026a5f5_f84ab4700b8240e19677cf5cb8a6b3e2_master.jpg",
      CDN + "81d5b89e-e8c7-4ac0-bc18-767d96212545_c9c9d0b92e674e4ab8e86a43f83381b8_master.jpg",
      CDN + "aab4691f-b75c-4869-bb35-8f45e2a6ee5c_dc187867f3f046c88693abbcdbd4438f_master.jpg"
    ],
    "MGT01131": [
      CDN + "b58d7f14-de06-4612-ba25-acf7b6e09605_896d28c9193648bdb920cddba4c6ebcd_master.jpg",
      CDN + "6f3eefd0-7ffd-43c9-89d2-e751da8c0227_afbe522da71f4729b7b1dfa29884fe0c_master.jpg",
      CDN + "e68089e7-5150-4af4-82a4-d99c94357445_bb9226a72c8f45dbb4ca422e248dc5ba_master.jpg",
      CDN + "5fa895a1-a287-4d43-9897-c0baa7a4d8b7_1d9d53bc5d024024aec2d0fddb2150f7_master.jpg",
      CDN + "feaa0cdf-4d9d-40cf-9030-18b92f05ad00_e9decca4133c4c1fb4bbb1725c8de1c3_master.jpg",
      CDN + "cd9a4d67-31a0-4365-98c1-c1ecde1e4ac5_4bb6ed2cf93647c8840149160ca77a31_master.jpg"
    ],
    "MGT01149": [
      CDN + "226d19dc-042e-42c4-a70f-1eb3a3b1f48f_838c9529f34b4f509e605f2b29089e9f_master.jpg",
      CDN + "9e1daa77-f211-472a-9dd4-b6f0cd632721_2bd9fe7a827548ecac0ec03c8eedd602_master.jpg",
      CDN + "27f6a8e4-8a49-407e-a69e-a286c72ec922_b4c7526885bb417d9f1b1822bcf0d041_master.jpg",
      CDN + "ad44fd0b-db48-45b4-a993-e7ea4bd71570_7c811235c2e24331835994aefc78844b_master.jpg",
      CDN + "738dd72f-1b98-49ae-842f-7484f78fd4d0_0bff277e63014c3e90943fc1e84096d1_master.jpg",
      CDN + "824349ab-e14d-412f-889e-d689480ec9b5_4029c408759d4a61899a0f286654df2e_master.jpg",
      CDN + "majorette_collection_-_1995_toyota_supra_mk4_yellow_-_8505001029__a0eafa4c0acf4f0abfa84cc0f38795aa_master.png",
      CDN + "26_98b564bdc5a64a2a9f926540581cd6f0_master.png"
    ]
  });

  const ROWS = [
    ["MGT00039", "LB Works Nissan GT-R Magic Purple", 2890000, 0, 0, ""],
    ["MGTS0023", "[KÈM CHỮ KÝ] FIST Team AAI 2025 China GT BMW M4 GT3 Champion Set Limited Edition 4000 Sets", 4200000, 0, 0, ""],
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
    ["MGT00823", "Nissan LB-Super Silhouette S15 Silvia #555 V2 2024 Formula Drift Japan 823", 450000, 0, 1, ""],
    ["MGT01009", "Porsche 911 Dakar Rally 1974", 300000, 0, 1, ""],
    ["MGT01061", "Volkswagen ID.Buzz Candy White / Energetic Orange 1061", 299000, 0, 1, ""],
    ["MGT00996", "[Chase Included] Mazda RX-7 (FD3S) Itosyoukai Rei-gouki with RE Amemiya 9", 349000, 0, 1, ""],
    ["MGT00431", "Top Secret Nissan Skyline GT-R VR32 Top Secret Gold 431", 649000, 0, 1, ""],
    ["MGT00893", "Range Rover 1971 International Hillrally 1 Winner", 250000, 0, 1, ""],
    ["MGT00289", "Porsche Taycan Turbo S Carmine RED", 690000, 0, 1, ""],
    ["MGT00998", "BMW Z8 Silver", 359000, 0, 1, ""],
    ["MGT00661", "Bugatti Divo White", 550000, 0, 1, ""],
    ["MGT00733", "Lamborghini Countach LPI 800-4 Orion Yellow", 349000, 0, 1, ""],
    ["MGT00419", "Porsche RUF CTR 1987 Blossom Yellow", 449000, 0, 1, ""],
    ["MGT00451", "Porsche RUF CTR Anniversary Dark Blue 451", 499000, 0, 1, ""],
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
    ["MGT00967", "Lamborghini Huracan LB★Works ver. 2 Mad Mike Nimbul 967", 580000, 0, 0, ""],
    ["MGT00966", "Lamborghini Countach LB-Works White 2024 Tokyo Auto Salon", 349000, 0, 1, ""],
    ["MGT00869", "[KÈM Figure] 1/64 Nissan Skyline GT-R R32 Nismo Gunmetal With Matsuda Figure Tsugio Matsuda Collection", 450000, 0, 1, ""],
    ["MGT01011", "Mazda RX-7 LB-Super Silhouette IMSA", 280000, 0, 1, ""],
    ["MGT00805", "Porsche 911 Dakar Rallye Design Package", 499000, 0, 1, ""],
    ["MGT00772", "Lamborghini Huracan GT3 EVO2 #83 Iron Dames 2023 IMSA Daytona 24 HRS", 1590000, 0, 0, ""],
    ["MGT00964", "Porsche 911 Dakar ICE Grey Metallic Rally 1978", 220000, 0, 1, ""],
    ["MGT00886", "Chase Included - Lamborghini Revuelto Giallo", 330000, 0, 1, ""],
    ["MGT00985", "Nissan Z Veilside FFZ400 Gold Chrome", 449000, 0, 1, ""],
    ["MGT01046", "Mazda RX-7 RE-Amemiya 20B NA 3Rotor-7 “Ama-san Go” 1046", 349000, 0, 1, ""],
    ["MGT00865", "Lamborghini Countach LPI 800-4 Viola 30th 865", 289000, 0, 1, ""],
    ["MGT00990", "Mazda RX-7 LB-Super Silhouette 787B", 320000, 0, 1, ""],
    ["MGT00698", "Nissan Skyline Kenmeri Liberty Walk LBWK Kuma", 290000, 0, 1, ""],
    ["MGT00851", "Abarth 595 LB-Works x Abas Works", 359000, 0, 1, ""],
    ["MGT00785", "Mazda RX-7 LB-Super Silhouette Liberty Walk Black", 449000, 0, 1, ""],
    ["MGT00987", "Nissan Skyline GT-R R32 Veilside Combat C-I GEM RED", 299000, 0, 1, ""],
    ["MGT00782", "Nissan Z LB★Nation Works LB", 300000, 0, 1, ""],
    ["MGT00652", "LB-Super Silhouette Nissan Silvia (S15) “Garuda” 652", 359000, 0, 1, ""],
    ["MGT00961", "Chase Included - Toyota Supra (A80) Top Secret GT-300 Top Secret Gold", 250000, 0, 1, ""],
    ["MGT00374", "Bugatti Chiron Super Sport 300+ Matte Black", 650000, 0, 1, ""],
    ["MGT00735", "Porsche 911 Turbo S Safety Car 2023 IMSA Daytona 24 HRS", 599000, 0, 1, ""],
    ["MGT00977", "Mercedes-Maybach S 680 Black", 350000, 0, 1, ""],
    ["MGT01068", "Chase Included - Porsche 911 Dakar \"Uncle Rally\"", 330000, 0, 1, ""],
    ["MGT00971", "Nissan Skyline GT-R R32 Veilside Combat C-I Veilside Combat Grey", 299000, 0, 1, ""],
    ["MGT00892", "Chevrolet Corvette Z06 2023 Elkhart Lake Blue Metallic", 299000, 0, 1, ""],
    ["MGT00858", "Nissan Silvia S15 LB-Super Silhouette", 470000, 0, 1, ""],
    ["MGT00868", "Nissan GT-R Nismo 2024 Nismo Stealth Gray", 349000, 0, 1, ""],
  ];
  
// ==========================================
// 22 ẢNH MINI GT LẤY TỪ CDN AERA
// ==========================================

const AERA_IMAGE_BY_CODE = {
  "MGTS0023": "https://cdn.hstatic.net/products/200001046178/df3da142-b278-4fed-a4d1-0eb20e272aeb_d9b85246cfa74a78931565c0ef13c98b_large.jpg",
  "MGT00039": "https://cdn.hstatic.net/products/200001046178/62554403-f718-4446-89e9-706aaae1696d_0be3d324a6dc4b07bfbca10e63a829a8_large.jpg",
  "MGT00765": "https://cdn.hstatic.net/products/200001046178/b12bb663-015e-4edf-8001-6e967715f930_95f36a98c1284d8abb2378035e054561_large.jpg",
  "MGT00274": "https://cdn.hstatic.net/products/200001046178/597466f9-d18b-4f0d-aa6f-c76190a6d2d2_104178a0eb5c4cf890361a64aa33dd2b_large.jpg",
  "MGT00374": "https://cdn.hstatic.net/products/200001046178/ed3e48f7-bd0f-4cb2-95f1-a6b14ac13ac7_81eb3cb55e7946acbf0ab33dbd454b99_large.jpg",
  "MGT01133": "https://cdn.hstatic.net/products/200001046178/1be03fda-b925-4991-9240-ac47596ab1b8_28e981a554074cfab2559122fc9d7a8c_large.jpg",
  "MGT01248": "https://cdn.hstatic.net/products/200001046178/e81aab81-fb31-4c8c-b05a-56e0505102a8_ac7aa0d916ca4180b35363949cd29a56_large.jpg",
  "QZ00601": "https://cdn.hstatic.net/products/200001046178/d541475d-e957-43d2-848c-d8274e5ca9a9_7ad0febb9a8c4732b79477e683871eaa_large.jpg",
  "QZ01002": "https://cdn.hstatic.net/products/200001046178/30446066-cc78-464b-b906-e2ce2a1ae61e_ef81e994c8ca4ba889e3cea6e33e83a7_large.jpg",
  "QZ00402": "https://cdn.hstatic.net/products/200001046178/1c2b3fa8-5699-4453-90f1-35b1dd1f2e16_26e3d5ede1af450a98453283726e1054_large.jpg",
  "QZ00102": "https://cdn.hstatic.net/products/200001046178/d00cca61-787c-4e10-a3de-7215b59e50a3_330abc76970e4d4b99dfed7baf45cf2b_large.jpg",
  "MGT01204": "https://cdn.hstatic.net/products/200001046178/69a2ad89-df8c-4f81-88c6-0e949c0a52ce_c70df5f6f7a0496aafa8fede0ea57488_large.jpg",
  "MGT01205": "https://cdn.hstatic.net/products/200001046178/c6d0018d-211f-495b-8def-1c64666abd3d_5d9f4a20fd174246ab4370df7a4dbfcb_large.jpg",
  "MGT01169": "https://cdn.hstatic.net/products/200001046178/8ffbb417-cc45-40a8-a228-48f4fccfe2e8_99b663be3b324e858f84251166344434_large.jpg",
  "MGT01212": "https://cdn.hstatic.net/products/200001046178/93b60d77-9837-4d18-8423-3ecce59a6900_2afea2000f5b4b9a8317071608405676_large.jpg",
  "MGT01217": "https://cdn.hstatic.net/products/200001046178/0a821963-f649-4b77-9c3d-53c0d8f81d7d_5123b4be1d8e4ec3b231fa109a374fd7_large.jpg",
  "MGT01182": "https://cdn.hstatic.net/products/200001046178/a44d6759-903b-4800-99ad-0cefc2187f15_a3237f1b52ea435cbef24e3245d3df51_large.jpg",
  "MT00581": "https://cdn.hstatic.net/products/200001046178/a539ac45-51af-4739-8993-e7e4bb20770d_fc57e0cba31d4fb9b4af6b9ffa35475f_large.jpg",
  "MGT00528": "https://cdn.hstatic.net/products/200001046178/01325d44-e479-467e-bdf2-53f97d0ab33d_e9cfe0d936414449b0e191b8e207f905_large.jpg",
  "MGT01143": "https://cdn.hstatic.net/products/200001046178/bdbcbc66-4711-4b2f-9aba-d14d0c3ebaf5_12a784d589804fe6a889f172fc4e53af_large.jpg",
  "QZ00101": "https://cdn.hstatic.net/products/200001046178/cb8a3c3a-86ec-4384-9e24-68f9f576f4d1_70cd27de9a5849ffb927e860317077c3_large.jpg",
  "MGT01149": "https://cdn.hstatic.net/products/200001046178/9e1daa77-f211-472a-9dd4-b6f0cd632721_2bd9fe7a827548ecac0ec03c8eedd602_large.jpg"
};

// Cập nhật kho ảnh IMG và GALLERY bằng ảnh lấy từ Aera
// Không ghi đè bộ ảnh nhiều tấm đã có (GALLERY) bằng 1 ảnh đơn
Object.entries(AERA_IMAGE_BY_CODE).forEach(([code, url]) => {
  if (!IMG[code]) IMG[code] = url;
  // Có sẵn ảnh cũ thì giữ làm ảnh chính, ảnh Aera làm ảnh phụ (ảnh phụ lỗi sẽ tự bị ẩn ở trang chi tiết)
  if (!GALLERY[code]) GALLERY[code] = IMG[code] && IMG[code] !== url ? [IMG[code], url] : [url];
});

// QUAN TRỌNG: lọc lại SAU TẤT CẢ các lần Object.assign(IMG, ...)
// Trước đây bộ lọc chạy quá sớm nên các link nghi giả được thêm lại phía sau.
Object.keys(IMG).forEach((code) => {
  if (FAKE.test(IMG[code])) delete IMG[code];
});
Object.keys(GALLERY).forEach((code) => {
  if (GALLERY[code].some((url) => FAKE.test(url))) delete GALLERY[code];
});

// ẢNH THẬT THU TỪ AERA (file mini-gt-images.js do harvest-aera-images.js tạo ra) -> ƯU TIÊN CAO NHẤT
const HARVEST = window.MINI_GT_IMAGES || {};
Object.keys(HARVEST).forEach((code) => {
  if (Array.isArray(HARVEST[code]) && HARVEST[code].length) GALLERY[code] = HARVEST[code];
});

// Chuẩn hóa mã xe, kể cả mã có hậu tố -CARD
const normalizeProductCode = (value) =>
  String(value || "").trim().toUpperCase().replace(/-CARD$/, "");

// CẬP NHẬT ẢNH CHO TẤT CẢ SẢN PHẨM ĐÃ CÓ
window.AKA_PRODUCTS.forEach((product) => {
  const code = normalizeProductCode(
    product.code || product.sku || product.productCode
  );

  // Lấy bộ ảnh đầy đủ nếu có, không thì 1 ảnh đơn
  const gal =
    GALLERY[code] ||
    (AERA_IMAGE_BY_CODE[code] && [AERA_IMAGE_BY_CODE[code]]) ||
    (IMG[code] && [IMG[code]]);

  // Chỉ cập nhật khi sản phẩm chưa có nhiều ảnh (tránh làm mất ảnh phụ sẵn có)
  if (gal && !gal.some((u) => FAKE.test(u)) && (!product.images || product.images.length <= 1)) {
    product.image = gal[0];
    product.images = gal;
  }
});

  const slug = (s) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const money = (n) => n.toLocaleString("vi-VN") + "đ";
  const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
  const norm = (s) => s.replace(/\s+/g, " ").trim().toLowerCase();

  const have = new Set(window.AKA_PRODUCTS.map((p) => norm(p.name)));
  const haveCode = new Set(window.AKA_PRODUCTS.map((p) => p.code));
  const added = [];

  ROWS.forEach(([code, name, price, old, boxcard, img]) => {
    if (have.has(norm(name)) || (code && haveCode.has(code))) return;
    const cleanCode = code ? code.replace(/-CARD$/, "").trim() : "";
    const gal = GALLERY[code] || GALLERY[cleanCode];
    const p = {
      id: slug(name).slice(0, 80),
      code: code,
      name: name,
      brand: "MINI GT",
      cat: "xe",
      scale: "1:64",
      price: price,
      old: old,
      images: gal ? gal.slice() : [img || IMG[code] || IMG[cleanCode] || PLACEHOLDER],
      image: gal ? gal[0] : (img || IMG[code] || IMG[cleanCode] || PLACEHOLDER),
      desc: [
        "Thương hiệu: MINI GT.",
        "Mẫu: " + name + (code ? " – " + code : "") + ".",
        "Tỉ lệ 1:64 – xe mô hình dành cho người sưu tầm.",
        "Sản phẩm chính hãng, đóng gói cẩn thận trước khi giao.",
      ],
    };
    if (boxcard) p.types = BOXCARD;
    window.AKA_PRODUCTS.push(p);
    added.push(p);
  });

  // Tự động vẽ thẻ sản phẩm vào #product-grid
  const grid = document.getElementById("product-grid");
  if (grid) {
    const html = added.map((p) => {
      const off = p.old > p.price ? Math.round((1 - p.price / p.old) * 100) : 0;
      return `
      <div class="product-card" data-cat="${p.cat}" data-brand="${p.brand}" data-price="${p.price}"${p.old ? ` data-old="${p.old}"` : ""}>
        <div class="product-image">
          ${off ? `<span class="sale">-${off}%</span>` : ""}
          <img src="${p.images[0]}" alt="${esc(p.name)}" loading="lazy" onerror="this.onerror=null;this.src='${PLACEHOLDER}'">
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