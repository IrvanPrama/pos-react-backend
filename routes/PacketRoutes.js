import express from "express";
import {
  getPackets,
  addPacket,
  takePacket,
  destroyData,
  addedPackets,
  takedPackets,
  updatePacket,
  getPacketById,
} from "../controllers/PacketControllers.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

// Rute untuk mendapatkan seluruh transaksi
router.get("/packettransactions", verifyUser, getPackets);
router.get("/packet/added", verifyUser, addedPackets);
router.get("/packet/taked", verifyUser, takedPackets);
router.get("/packet/take/:id", verifyUser, takePacket);
router.get("/packet/edit/:id", getPacketById);
router.post("/packet/add", verifyUser, addPacket);
router.patch("/packet/update/:id", updatePacket);
router.delete("/delete/packet/:tr_id", verifyUser, destroyData);

export default router;
