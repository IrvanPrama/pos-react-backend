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
// import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

// Rute untuk mendapatkan seluruh transaksi
router.get("/packettransactions", getPackets);
router.get("/packet/added", addedPackets);
router.get("/packet/taked", takedPackets);
router.get("/packet/take/:id", takePacket);
router.get("/packet/edit/:id", takePacket);
router.post("/packet/add", addPacket);
router.patch("/packet/update/:id", updatePacket);
router.delete("/delete/packet/:id", destroyData);

export default router;
