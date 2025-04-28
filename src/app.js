import express from "express";
import empleadosRoutes from "./routes/empleados.routes.js";
import clientesRoutes from "./routes/clientes.routes.js";

const app = express();

app.set("port", 5000);

app.use(express.json());

app.use("/api/empleados", empleadosRoutes)
app.use("/api/clientes", clientesRoutes)

export default app;