import express from "express";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getProductImageController,
  getSingleProductController,
  productCountController,
  productFiltersController,
  productListController,
  updateProductController,
} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

// routes

// CREATE PRODUCT || POST
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

// UPDATE PRODUCT
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

// GET PRODUCTS || GET
router.get("/get-product", getProductController);

// GET SINGLE PRODUCT || GET
router.get("/get-product/:slug", getSingleProductController);

// GET PRODUCT IMAGE || GET
router.get("/product-image/:pid", getProductImageController);

// DELETE PRODUCT  || DELETE
router.delete("/delete-product/:pid", deleteProductController);

// FILTER PRODUCT || POST
router.post("/product-filters", productFiltersController);

// PRODUCT COUNT || GET
router.get("/product-count", productCountController);

// PRODUCT PER PAGE || GET
router.get("/product-list/:page", productListController);

export default router;
