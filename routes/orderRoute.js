import express from "express";
import orderController from "../controllers/orderController.js";

const { postOrder ,getDetail} = orderController;

const router = express.Router();

router.get("/api/order/:id", getDetail);
router.post("/api/order", postOrder);

export default router;
