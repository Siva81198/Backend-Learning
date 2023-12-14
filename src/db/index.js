import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDB = async () => {
    try {
        //mongoose gives a response and we can store them in a variable.
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB Host:${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB CONNECTION FAILED:", error);
        process.exit(1);//Learn more about it
    }
}

export default connectDB;