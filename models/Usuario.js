import { DataTypes } from "sequelize";

import sequelize from "../config/database.js";
import Order from "./Order.js";

const Usuario = sequelize.define("Usuario", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
  country: {
    type: DataTypes.STRING,
  },
  cp: {
    type: DataTypes.INTEGER,
  },
  phone: {
    type: DataTypes.INTEGER,
  },
} , { timestamps: false });

Usuario.hasMany(Order, {
  foreignKey: "UsuarioId",
});
Order.belongsTo(Usuario);

export default Usuario;
