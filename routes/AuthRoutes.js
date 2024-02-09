// routers/authRouter.js
import express from "express";
import { login, logout, Me } from "../controllers/AuthControllers.js";

const router = express.Router();
// Step 14, auth login
// Step 15, ada di AuthController.js
router.get("/me", Me);
router.post("/login", login);
router.delete("/logout", logout);

export default router;
