import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from "./routes/productRoute.js";

// Creamos instancia de una app express y leemos el archivo .env
dotenv.config();
const app = express();

app.use(express.json());

app.use("/api/products",productRoutes);

const PORT = process.env.PORT || 5000; 

// Escuchamos el puerto 5000
app.listen(PORT, () => {
    connectDB(); // Llamamos a la función para conectarse a la bbdd mongoDB
    console.log("Server started at http://localhost:"+ PORT); 
});