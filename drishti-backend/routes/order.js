// routes/orderRoutes.js
import express from "express";
import { createOrUpdateOrder, getOrders, deleteOrder, updateOrderStatus } from "../controllers/orderController.js";

const router = express.Router();
router.post("/", createOrUpdateOrder);
router.get("/", getOrders); // ✅ get all orders
router.delete("/:id", deleteOrder);
router.put("/:id/status", updateOrderStatus); // ✅ update status




export default router;
