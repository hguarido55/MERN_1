import mongoose from "mongoose";

const productSchema = new mongoose.Schema({ // Definimos la estructura de cada documento de los productos
    name:{type: String, required: true},
    price:{type: Number, required: true},
    image:{type: String, required: true},
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema); // Creamos la colección Product con la estructura de productSchema

export default Product; // Habilitamos el uso de Product en otros archivos