import express from "express";
//1 import cors body pharser
import UserRoute from "../backend/routes/UserRoutes.js";
import ProductMenuRoute from "../backend/routes/ProductMenuRoutes.js";
import ProductRoute from "../backend/routes/ProductRoutes.js";
import TransactionRoute from "../backend/routes/TransactionRoutes.js";
import PacketRoute from "../backend/routes/PacketRoutes.js";
import AuthRoute from "../backend/routes/AuthRoutes.js";
import multer from "multer";
//2 import db
//3 import session sequelizestore
import dotenv from "dotenv";
dotenv.config();

const app = express();
// 2 atur session

app.use(UserRoute);
app.use(ProductRoute);
app.use(ProductMenuRoute);

app.use(TransactionRoute);
app.use(PacketRoute);
app.use(AuthRoute);

app.use(express.json());
app.use(multer({ dest: "public/images" }).single("image"));
app.use("/public", express.static("public"));

//3 Sync Store

app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running...");
});
