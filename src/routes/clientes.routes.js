import { Router } from "express";
import { methodHTTP as clientesController } from "../controllers/clientes.controllers.js";

const router = Router();

router.post("/", clientesController.postClientes);

export default router;
