import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const app = express();
const PORT = 3000;


mongoose
    .connect(
        process.env.MONGO
        )
    .then(() => { 
        console.log("mongodb is connected");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        });
    })
    .catch((error) => {
        console.log(error);
    });