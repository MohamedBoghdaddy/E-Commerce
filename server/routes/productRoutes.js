// server/routes/productRoutes.js
import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

// Get all products
router.get("/", getProducts);

// Get a single product by ID
router.get("/:id", getProductById);

// Create a new product (admin only)
router.post("/", createProduct);

// Delete a product (admin only)
router.delete("/:id", deleteProduct);

export default router;
