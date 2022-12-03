import express from "express";
import productoController from "../controllers/productoController.js";

const {
  createProducto,
  getProductByCategory,
  getProductByName,
  getProducts,
  getProductById,
} = productoController;

const router = express.Router();

router.post("/api/producto", createProducto);
router.get("/api/producto/", getProducts);
router.get("/api/productos/:categoriaId", getProductByCategory);
router.get("/api/producto/:name", getProductByName);
router.get("/api/productoById/:id", getProductById);

export default router;
