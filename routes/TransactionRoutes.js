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
  getTotalTransactions,
  updateTransaction,
  getTransactionsByUserId,
  getTransactionByUserId,
  getTransactionById,
} from "../controllers/TransactionControllers.js";

import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

// Rute untuk mendapatkan seluruh transaksi
router.get("/transaction", verifyUser, getTransactions);
router.get("/transactiontotalStok", verifyUser, getTotalStokByProductId);
router.get("/transactiontotalStok/02", verifyUser, getTotalStokByProductId02);
router.get("/transactiontotalStok/03", verifyUser, getTotalStokByProductId03);
router.get("/transactiontotalQty", verifyUser, getTotalQtyByProductId);
router.get("/transactiontotalQty/02", verifyUser, getTotalQtyByProductId02);
router.get("/transactiontotalQty/03", verifyUser, getTotalQtyByProductId03);

// Rute untuk mengambil total transaksi
router.get("/totaltransactions", getTotalTransactions);

router.post("/transaction/add", addTransactions);
router.post("/packet/take", addTransactions);
router.delete("/destroy/data/:tr_id", destroyData);
router.patch("/transaction/status/:id", handleUpdateStatus);
router.get("/transaction/:id", getTransactionById);
router.get("/transaction/:user_id", getTransactionByUserId);
router.get("/transactions/:user_id", getTransactionsByUserId);
router.patch("/transaction/update/:id", updateTransaction);
router.get("/transactions/filter", filterTransactions);

export default router;
