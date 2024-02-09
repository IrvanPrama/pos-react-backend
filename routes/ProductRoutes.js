//import kebutuhan
import express from "express";
import { redirectLogin } from "../controllers/RedirectLogin.js";

//2. masukan controller untuk mendapatkan mengelola Product
import {
  getProducts,
  createProduct,
  destroyData,
} from "../controllers/ProductControllers.js";

//definisikan router
const router = express.Router();

router.get("/login", redirectLogin, (req, res) => {});
// 1. buat rute untuk mengarahkan ke fungsi getProducts padacontroller
router.get("/product", getProducts);
router.post("/product/send", createProduct);
router.delete("/product/destroy/:id", destroyData);
//tampilkan data yang diproses
export default router;
