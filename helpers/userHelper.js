import Usuario from "../models/Usuario.js";
import jwt from "jsonwebtoken";

const create = async (usuario) => {
  try {
    const newCourse = await Usuario.create(usuario);

    return newCourse;
  } catch (error) {
    console.error(error);

    return null;
  }
};

const findUser = async (search, id, notPassword) => {
  try {
    return await Usuario.findOne({
      where: {
        [search]: id,
      },

      attributes: notPassword && { exclude: ["password"] },
    });
  } catch (error) {
    console.error(error);
    return null;
  }
};

const usuarioHelper = { create, findUser };
export default usuarioHelper;
