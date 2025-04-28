import express from "express";
import empleadosRoutes from "./routes/empleados.routes.js";

const app = express();

app.set("port", 5000);

app.use(express.json());

app.use("/api/empleados", empleadosRoutes)

export default app;