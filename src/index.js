// require('dotenv').config({path:'./.env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:'./.env'
})

connectDB()

/*
import express from "express"
const app = express()

    (async () => {
        try {
            await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
            //If any error occurs while connecting to database by express
            app.on("error", (error) => {
                console.log("ERR:", error);
                throw error
            })

            //if no error then listen on the specified port
            app.listen(process.env.PORT, () => {
                console.log(`App is listening on port ${process.env.PORT}`);
            })
        } catch (error) {
            console.error("ERROR:", error)
            throw err
        }
    })()
    */