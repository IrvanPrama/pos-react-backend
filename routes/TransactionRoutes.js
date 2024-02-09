import express from "express";
import {
  getTransactions,
  addTransactions,
  getTotalStokByProductId,
  getTotalStokByProductId02,
  getTotalStokByProductId03,
  getTotalQtyByProductId,
  getTotalQtyByProductId02,
  getTotalQtyByProductId03,
  destroyData,
  handleUpdateStatus,
  filterTransactions,
  // Variable untuk mengambil total transaksi
  getTotalTransactions,
} from "../controllers/TransactionControllers.js";

const router = express.Router();

// Rute untuk mendapatkan seluruh transaksi
router.get("/transactions", getTransactions);
router.get("/transactiontotalStok", getTotalStokByProductId);
router.get("/transactiontotalStok/02", getTotalStokByProductId02);
router.get("/transactiontotalStok/03", getTotalStokByProductId03);
router.get("/transactiontotalQty", getTotalQtyByProductId);
router.get("/transactiontotalQty/02", getTotalQtyByProductId02);
router.get("/transactiontotalQty/03", getTotalQtyByProductId03);

// Rute untuk mengambil total transaksi
router.get("/totaltransactions", getTotalTransactions);

router.post("/transaction/add", addTransactions);
router.post("/packet/take", addTransactions);
router.delete("/destroy/data/:id", destroyData);
router.patch("/transaction/status/:id", handleUpdateStatus);
router.get("/transactions/filter", filterTransactions);

export default router;
