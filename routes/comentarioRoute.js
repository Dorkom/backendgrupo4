import express from "express";
import comentarioController from "../controllers/comentarioController.js";

const { createComment, getComentarios } = comentarioController;

const router = express.Router();

router.get("/api/comment", getComentarios);
router.post("/api/comment", createComment);

export default router;
