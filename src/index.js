// require('dotenv').config({path:'./.env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
})

connectDB()
    //async operations returns a promise -> in db/index.js
    .then(() => {
        app.on("error", (error) => {
            console.log("ERR:", error);
            throw error
        })

        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running at port ${process.env.PORT}`);
        })//After connecting to database -> run the server in specified port.
    })
    .catch((err) => {
        console.log("MONGO DB Connection Failed !!!", err);
    })

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