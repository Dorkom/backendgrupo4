import { DataTypes } from "sequelize";

import sequelize from "../config/database.js";
import Prearmado from "./Prearmado.js";
import Producto from "./Producto.js";

const PrearmadoDetail = sequelize.define("PrearmadoDetail", {
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
});

Prearmado.belongsToMany(Producto, { through: PrearmadoDetail });
Producto.belongsToMany(Prearmado, { through: PrearmadoDetail });

export default PrearmadoDetail;
