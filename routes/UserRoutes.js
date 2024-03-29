import express from "express";
import multer from "multer";
import { redirectLogin } from "../controllers/RedirectLogin.js";

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

app.use("/users", redirectLogin);

// Rute untuk meng-upload gambar pengguna
router.post("/upload/profile/:id", upload.single("image"));

// Tentukan rute-rute Anda
router.get("/users", getUsers);
router.get("/user/edit/:id", getUserById);
router.patch("/user/update/:id", updateUser); // Menggunakan Multer untuk pengunggahan
router.post("/user/add", addUser);
router.delete("/delete/users/:id", destroyUser);

// Export router untuk digunakan di dalam aplikasi utama Anda
export default router;
