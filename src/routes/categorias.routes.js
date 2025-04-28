import { Router } from "express";
import { methodHTTP as categoriasController } from "../controllers/categorias.controllers.js";

const router = Router();

router.delete("/:id", categoriasController.deleteCategoria);

export default router;
