import { DataTypes } from "sequelize";

import sequelize from "../config/database.js";
import Order from "./Order.js";

const Producto = sequelize.define("Producto", {
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
  price: {
    type: DataTypes.REAL,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
} , { timestamps: false });

export default Producto;
