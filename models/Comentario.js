import { DataTypes } from "sequelize";

import sequelize from "../config/database.js";
import Producto from "./Producto.js";
import Usuario from "./Usuario.js";

const Comentario = sequelize.define(
  "Comentario",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    rate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    comentario: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    nameUser: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

Usuario.hasMany(Comentario, {
  foreignKey: "usuarioId",
});
Comentario.belongsTo(Usuario);

export default Comentario;
