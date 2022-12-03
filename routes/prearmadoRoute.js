import express from "express";
import prearmadoController from "../controllers/prearmadoController.js";

const { postArmado, getPreArmadoById } = prearmadoController;

const router = express.Router();

router.post("/api/armado", postArmado);
router.get("/api/armado/:id", getPreArmadoById);

export default router;
