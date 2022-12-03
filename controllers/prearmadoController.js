import Prearmado from "../models/Prearmado.js";
import Producto from "../models/Producto.js";
import PrearmadoDetail from "../models/PrearmadoDetail.js";

const postArmado = async (req, res) => {
  try {
    const { name, products } = req.body;
    let detail;

    const armado = await Prearmado.create({ name });
    products.forEach(async (element) => {
      const productItem = await Producto.findOne({
        where: { description: element.description },
      });
      const { id, name, description, price, url } = productItem;
      detail = await PrearmadoDetail.create({
        ProductoId: id,
        name,
        description,
        price,
        PrearmadoId: armado.id,
        url,
      });
      detail.save();
    });
    res.status(201).json({ PrearmadoDetail });
  } catch (error) {
    console.log(error);
  }
};

const getPreArmadoById = async (req, res) => {
  try {
    const { id } = req.params;
    const armado = await Prearmado.findByPk(id);
    const armadoDetail = await PrearmadoDetail.findAll({
      where: { PrearmadoId: id },
    });
    res.status(200).json({ armado, armadoDetail });
  } catch (error) {
    console.log(error);
  }
};

const prearmadoController = {
  postArmado,
  getPreArmadoById,
};

export default prearmadoController;
