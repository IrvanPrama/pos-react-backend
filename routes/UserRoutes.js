import express from "express";
import multer from "multer";
const router = express.Router();

// Import controller untuk mengelola rute
import {
  getUsers,
  addUser,
  destroyUser,
  getUserById,
  updateUser,
  uploadProfile,
} from "../controllers/UserControllers.js";

import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

// Konfigurasi Multer untuk meng-handle upload gambar
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/"); // Folder penyimpanan sementara
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Nama file unik
  },
});
const upload = multer({ storage: storage });

const app = express();

// Rute untuk meng-upload gambar pengguna
router.post("/upload/profile/:id", upload.single("image"));

// Tentukan rute-rute Anda
router.get("/users", verifyUser, adminOnly, getUsers);
router.get("/user/edit/:id", verifyUser, adminOnly, getUserById);
router.post("/upload/profile/:id", uploadProfile);
router.patch("/user/update/:id", verifyUser, adminOnly, updateUser); // Menggunakan Multer untuk pengunggahan
router.post("/user/add", addUser);
router.delete("/delete/users/:id", verifyUser, adminOnly, destroyUser);

// Export router untuk digunakan di dalam aplikasi utama Anda
export default router;
