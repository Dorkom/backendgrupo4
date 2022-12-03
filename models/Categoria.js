import { DataTypes } from "sequelize";

import sequelize from "../config/database.js";
import Producto from "./Producto.js";

const Categoria = sequelize.define("Categoria", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, { timestamps: false });

Categoria.hasMany(Producto, {
  foreignKey: "categoriaId",
});
Producto.belongsTo(Categoria);

export default Categoria;
