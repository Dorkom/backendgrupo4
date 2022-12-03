import { DataTypes } from "sequelize";

import sequelize from "../config/database.js";
import Producto from "./Producto.js";


const Order = sequelize.define(
  "Order",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: true }
);


export default Order;
