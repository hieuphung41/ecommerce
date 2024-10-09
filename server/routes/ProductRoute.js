import {
  addProduct,
  getAllProducts,
  removeProduct,
  getProductById,
} from "../controllers/ProductController.js";
import express from "express";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRoute = express.Router();

productRoute.post(
  "/add",
  adminAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);
productRoute.get("/getAll", getAllProducts);
productRoute.delete("/remove", adminAuth, removeProduct);
productRoute.get("/get", getProductById);

export default productRoute;
