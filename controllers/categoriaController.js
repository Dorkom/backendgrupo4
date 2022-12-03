import Categoria from "../models/Categoria.js";

const createCategory = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    const [categoria, created] = await Categoria.findOrCreate({
      where: { name },
      defaults: { description },
    });
    if (!created) {
      res.json({ msg: "Already exists", categoria });
    } else {
      res.json({ msg: "Created successfully", categoria });
    }
  } catch (error) {
    next(error);
  }
};

const getCategories = async (req, res, next) => {
  try {
    const resp = await Categoria.findAll();
    res.status(200).json(resp);
  } catch (error) {
    next(error);
  }
};

const categoryController = {
  createCategory,
  getCategories,
};

export default categoryController;
