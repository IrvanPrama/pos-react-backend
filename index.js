import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import UserRoute from "../backend/routes/UserRoutes.js";
import ProductMenuRoute from "../backend/routes/ProductMenuRoutes.js";
import ProductRoute from "../backend/routes/ProductRoutes.js";
import TransactionRoute from "../backend/routes/TransactionRoutes.js";
import PacketRoute from "../backend/routes/PacketRoutes.js";
import AuthRoute from "../backend/routes/AuthRoutes.js";
import multer from "multer";
import session from "express-session";
// import SequelizeStore from "connect-session-sequelize";
// import db from "./config/Database.js";
import dotenv from "dotenv";
dotenv.config();

// Definisikan route dan penanganannya di sini
const app = express();

// const sessionStore = SequelizeStore(session.Store);

// const store = new sessionStore({
//   db: db,
// });

// Gunakan express-session middleware
app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    // store: store,
    cookie: {
      secure: "auto",
    },
  })
);

app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(UserRoute);
app.use(ProductRoute);
app.use(ProductMenuRoute);

app.use(TransactionRoute);
app.use(PacketRoute);
app.use(AuthRoute);

// Middleware untuk memproses JSON dan URL-encoded data
app.use(express.json());

app.use(multer({ dest: "public/images" }).single("image"));
// Mengizinkan akses ke folder public di backend
app.use("/public", express.static("public"));

// Menjalankan server
app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running...");
});
