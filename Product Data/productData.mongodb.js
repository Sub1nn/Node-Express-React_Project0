use("Node-API");

db.products.insertMany([
  {
    Name: "Macbook-Pro 14 M3",
    Company: "Apple",
    Price: 2500,
    Quantity: 15,
    Image:
      "https://www.gigantti.fi/image/dv_web_D1800010021736232/712432/macbook-pro-14-m3-pro-2023-18512-gb-tahtimusta--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    Name: "MSI Katana 15 i7-13H",
    Company: "MSI",
    Price: 1700,
    Quantity: 25,
    Image:
      "https://www.gigantti.fi/image/dv_web_D1800010021661162/650364/msi-katana-15-i7-13h1610004060-156-pelikannettava--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    Name: "Acer Swift Edge 16 R7-7",
    Company: "Acer",
    Price: 1200,
    Quantity: 40,
    Image:
      "https://www.gigantti.fi/image/dv_web_D1800010021619203/616164/acer-swift-edge-16-r7-7161024oled-kannettava--pdp_zoom-3000--pdp_main-540.jpg",
  },
  {
    Name: "Lenovo ThinkPad Z16 Gen1 R7",
    Company: "MSI",
    Price: 3100,
    Quantity: 20,
    Image:
      "https://www.gigantti.fi/image/dv_web_D1800010021080086/473769/lenovo-thinkpad-z16-gen1-16-r716512-gb-kannettava--pdp_zoom-3000--pdp_main-540.jpg",
  },
]);

// db.products.find();
