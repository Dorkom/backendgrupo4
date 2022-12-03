import Producto from "../models/Producto.js";
import { Op } from "sequelize";

const createProducto = async (req, res, next) => {
  try {
    const { name, price, description, url, categoriaId } = req.body;
    const [producto, created] = await Producto.findOrCreate({
      where: { description },
      defaults: { name, description, price, url, categoriaId },
    });
    if (!created) {
      res.json({ msg: "Already exists", producto });
    } else {
      res.json({ msg: "Created successfully", producto });
    }
  } catch (error) {
    next(error);
  }
};

const getProducts = async (req, res, next) => {
  try {
    const productos = await Producto.findAll();
    res.json(productos);
  } catch (error) {
    next(error);
  }
};

const getProductByCategory = async (req, res, next) => {
  try {
    const { categoriaId } = req.params;
    const productos = await Producto.findAll({
      where: { categoriaId },
    });
    res.json(productos);
  } catch (error) {
    next(error);
  }
};

const getProductByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const producto = await Producto.findAll({
      where: { name: { [Op.iLike]: `%${name}%` } },
    });
    res.json(producto);
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findByPk(id);
    res.json(producto);
  } catch (error) {
    next(error);
  }
};

const productoController = {
  createProducto,
  getProducts,
  getProductByCategory,
  getProductByName,
  getProductById,
};

export default productoController;
