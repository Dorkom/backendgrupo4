import app from "./app.js";
import sequelize from "./config/database.js";
import { loadMockCategorias, loadMockProductos } from "./helpers/fillDb.js";

import Categoria from "./models/Categoria.js";
import Producto from "./models/Producto.js";
import User from "./models/Usuario.js";
import dotenv from "dotenv";
import Order from "./models/Order.js";

dotenv.config();

async function main() {
  try {
    const init = process.argv[2];

    if (init) await sequelize.sync({ force: true });
    else await sequelize.sync({ force: false });
    User.sync();
    Producto.sync();
    Categoria.sync();

    console.log("Connection successful");

    var PORT = process.env.PORT || 3001;

    app.listen(PORT, async () => {
      await loadMockCategorias();
      await loadMockProductos();
      console.log("App Iniciada en puerto " + PORT);
    });
  } catch (error) {
    console.error("Connection error", error);
  }
}

main();
