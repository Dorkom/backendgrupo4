import express from "express";
import categoryController from "../controllers/categoriaController.js";

const { createCategory, getCategories } = categoryController;

const router = express.Router();

router.post("/api/categoria", createCategory);
router.get("/api/categorias", getCategories);

export default router;
