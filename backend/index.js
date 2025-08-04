import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from "./routes/productRoute.js";
import path from "path";

// Creamos instancia de una app express y leemos el archivo .env
dotenv.config();
const app = express();

app.use(express.json());

app.use("/api/products",productRoutes);

const PORT = process.env.PORT || 5000; 

const __dirname = path.resolve();

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}

// Escuchamos el puerto 5000
app.listen(PORT, () => {
    connectDB(); // Llamamos a la función para conectarse a la bbdd mongoDB
    console.log("Server started at http://localhost:"+ PORT); 
});