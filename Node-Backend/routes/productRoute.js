import { Router } from "express";
const router = Router();
import {
  getProducts,
  getProduct,
  postProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController";

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

export default router;
