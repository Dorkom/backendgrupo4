import Comentario from "../models/Comentario.js";
import Usuario from "../models/Usuario.js";

const createComment = async (req, res, next) => {
  try {
    const { rate, comentario, usuarioId } = req.body;

    const user = await Usuario.findOne({
      where: {
        id: usuarioId,
      },
    });

    const { id, name } = user;

    const newComment = await Comentario.create({
      rate,
      comentario,
      usuarioId: id,
      nameUser: name,
    });

    res.status(201).json({
      message: "Comentario creado correctamente",
      newComment,
    });
  } catch (error) {
    next(error);
  }
};

const getComentarios = async (req, res, next) => {
  try {
    const comentarios = await Comentario.findAll();
    res.status(200).json({
      message: "Comentarios obtenidos correctamente",
      comentarios,
    });
  } catch (error) {
    next(error);
  }
};

const comentarioController = {
  createComment,
  getComentarios,
};

export default comentarioController;
