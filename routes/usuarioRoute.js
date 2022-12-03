import express from "express";
import usuarioController from "../controllers/usuarioController.js";

const { createUser, login, getUser, verifyAuth, putUser } = usuarioController;

const router = express.Router();

router.post("/api/create", createUser);
router.post("/api/login", login);
router.post("/api/verify", verifyAuth);
router.get("/api/user/:id", getUser);
router.put("/api/user/:id", putUser);

export default router;
