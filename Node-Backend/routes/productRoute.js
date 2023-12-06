const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");
const {
  getProducts,
  getProduct,
  postProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

//get the product
router.get("/", getProducts);

//get the product by the product Id
router.get("/:id", getProduct);

//post method for saving the data into the database
router.post("/", postProduct);

// update a product
router.put("/:id", updateProduct);

// delete a product

router.delete("/:id", deleteProduct);

module.exports = router;
