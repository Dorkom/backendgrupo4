import Detail from "../models/Detail.js";
import Order from "../models/Order.js";
import Producto from "../models/Producto.js";
import Usuario from "../models/Usuario.js";

const postOrder = async (req, res) => {
  try {
    let detail;
    const { UsuarioId, total, products } = req.body;
    const order = await Order.create({ UsuarioId, total });

    products.forEach(async (element) => {
      const productItem = await Producto.findOne({
        where: { description: element.description },
      });
      const { id, name, description, price, url } = productItem;
      detail = await Detail.create({
        ProductoId: id,
        name,
        description,
        price,
        OrderId: order.id,
        url,
      });
      detail.save();
    });
    res.status(201).json({ Detail });
  } catch (error) {
    console.log(error);
  }
};

const getDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const orders = await Order.findAll({ where: { UsuarioId: id } });
    const orderIds = orders.map((order) => order.id);

    const details = await Detail.findAll({ where: { OrderId: orderIds } });
    res.status(200).json(details);
  } catch (error) {
    console.log(error);
  }
};

const orderController = {
  postOrder,
  getDetail,
};

export default orderController;
