import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/productController.js";

const router = express.Router();

// Página raiz
router.get("/", getProducts);

// Página de productos
router.post("/", createProduct);

// Actualizar productos mediante peticiones PUT
router.put("/:id", updateProduct);

// Borrar productos de la bbdd
router.delete("/:id", deleteProduct);

export default router;