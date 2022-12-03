import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import usuarioRoutes from "./routes/usuarioRoute.js";
import categoriaRoutes from "./routes/categoriaRoute.js";
import productoRoutes from "./routes/productoRoute.js";
import orderRoutes from "./routes/orderRoute.js";
import commentarioRoutes from "./routes/comentarioRoute.js";
import prearmadoRoutes from "./routes/prearmadoRoute.js";

var app = express();

app.use(cors());

app.use(bodyParser.json());

app.use("/", usuarioRoutes);
app.use("/", categoriaRoutes);
app.use("/", productoRoutes);
app.use("/", orderRoutes);
app.use("/", commentarioRoutes);
app.use("/", prearmadoRoutes);

export default app;
