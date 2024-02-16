import express from "express";
import {
  getPackets,
  addPacket,
  takePacket,
  destroyData,
  addedPackets,
  takedPackets,
  updatePacket,
} from "../controllers/PacketControllers.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

// Rute untuk mendapatkan seluruh transaksi
router.get("/packettransactions", verifyUser, adminOnly, getPackets);
router.get("/packet/added", verifyUser, adminOnly, addedPackets);
router.get("/packet/taked", verifyUser, adminOnly, takedPackets);
router.get("/packet/take/:id", verifyUser, adminOnly, takePacket);
router.get("/packet/edit/:id", verifyUser, adminOnly, takePacket);
router.post("/packet/add", verifyUser, adminOnly, addPacket);
router.patch("/packet/update/:id", verifyUser, adminOnly, updatePacket);
router.delete("/delete/packet/:id", verifyUser, adminOnly, destroyData);

export default router;
