//import kebutuhan
import express from "express";

//2. masukan controller untuk mendapatkan mengelola Product
import {
  getProducts,
  createProduct,
  destroyData,
  updateProduct,
} from "../controllers/ProductControllers.js";
import { verifyUser } from "../middleware/AuthUser.js";

//definisikan router
const router = express.Router();

router.get("/product", verifyUser, getProducts);
router.post("/product/send", verifyUser, createProduct);
router.patch("/product/update/:id", verifyUser, updateProduct);
router.delete("/product/destroy/:id", verifyUser, destroyData);

export default router;
