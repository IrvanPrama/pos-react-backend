//import kebutuhan
import express from "express";

//2. masukan controller untuk mendapatkan mengelola Product
import {
  getProducts,
  createProduct,
  destroyData,
} from "../controllers/ProductControllers.js";
import { verifyUser } from "../middleware/AuthUser.js";

//definisikan router
const router = express.Router();

router.get("/product", getProducts);
router.post("/product/send", createProduct);
router.delete("/product/destroy/:id", destroyData);

export default router;
