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
    ["MGT00961", "Chase Included - Toyota Supra (A80) Top Secret GT-300 Top Secret Gold", 250000, 0, 1, ""]
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
Object.entries(AERA_IMAGE_BY_CODE).forEach(([code, url]) => {
  IMG[code] = url;
  GALLERY[code] = [url];
});

// QUAN TRỌNG: lọc lại SAU TẤT CẢ các lần Object.assign(IMG, ...)
// Trước đây bộ lọc chạy quá sớm nên các link nghi giả được thêm lại phía sau.
Object.keys(IMG).forEach((code) => {
  if (FAKE.test(IMG[code])) delete IMG[code];
});
Object.keys(GALLERY).forEach((code) => {
  if (GALLERY[code].some((url) => FAKE.test(url))) delete GALLERY[code];
});

// Chuẩn hóa mã xe, kể cả mã có hậu tố -CARD
const normalizeProductCode = (value) =>
  String(value || "").trim().toUpperCase().replace(/-CARD$/, "");

// CẬP NHẬT ẢNH CHO TẤT CẢ SẢN PHẨM ĐÃ CÓ
window.AKA_PRODUCTS.forEach((product) => {
  const code = normalizeProductCode(
    product.code || product.sku || product.productCode
  );

  // Tìm ảnh trong cả 3 kho ảnh
  const image =
    AERA_IMAGE_BY_CODE[code] ||
    (GALLERY[code] && GALLERY[code][0]) ||
    IMG[code];

  // Có ảnh thì cập nhật sản phẩm
  if (image && !FAKE.test(image)) {
    product.image = image;
    product.images = [image];
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
    const aeraImage = AERA_IMAGE_BY_CODE[cleanCode] || AERA_IMAGE_BY_CODE[code];
    const p = {
      id: slug(name).slice(0, 80),
      code: code,
      name: name,
      brand: "MINI GT",
      cat: "xe",
      scale: "1:64",
      price: price,
      old: old,
      images: aeraImage ? [aeraImage] : (GALLERY[code] || [img || IMG[code] || IMG[cleanCode] || PLACEHOLDER]),
      image: aeraImage || (GALLERY[code] && GALLERY[code][0]) || img || IMG[code] || IMG[cleanCode] || PLACEHOLDER,
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