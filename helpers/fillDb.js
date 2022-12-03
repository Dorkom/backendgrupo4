import Allcategorias from "../mockups/categorias.json" assert { type: "json" };
import Allproductos from "../mockups/productos.json" assert { type: "json" };
import axios from "axios";

const { categorias } = Allcategorias;
const { productos } = Allproductos;
export const loadMockCategorias = async () => {
  try {
    for (let i = 0; i < categorias.length; i++) {
      const data = categorias[i];
      await axios.post(`${process.env.URL_BASE}/api/categoria`, data);
    }
  } catch (error) {
    console.log(error);
  }
};

export const loadMockProductos = async () => {
  try {
    for (let i = 0; i < productos.length; i++) {
      const data = productos[i];
      await axios.post(`${process.env.URL_BASE}/api/producto`, data);
    }
  } catch (error) {
    console.log(error);
  }
};
