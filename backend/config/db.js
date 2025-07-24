import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }
    catch(error){
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

/*
export permite usar esta función en otros archivos
async permite usar await, utilizado para indicar que puede tomar tiempo y que se espera una respuesta antes de seguir
*/