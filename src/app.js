import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//When any form is filled -> Data is collected through JSON format.
app.use(express.json({ limit: "16kb" }));

//When we get data through URL
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

//Below code is used to keep images/favicon temporary in local server and it will be stored in public folder.
app.use(express.static("public"));

//To config cookies in user browser in a safe way
app.use(cookieParser())

export { app }