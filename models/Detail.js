import { DataTypes } from "sequelize";

import sequelize from "../config/database.js";
import Order from "./Order.js";
import Producto from "./Producto.js";

const Detail = sequelize.define("Detail", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

    name : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price : {
        type: DataTypes.REAL,
        allowNull: false,
    },
    description : {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    url:{
        type: DataTypes.STRING,
        allowNull: false,
    }
    
});


Order.belongsToMany(Producto, {through: Detail});
Producto.belongsToMany(Order, {through: Detail});

export default Detail