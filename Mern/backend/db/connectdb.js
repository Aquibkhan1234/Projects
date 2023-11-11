import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDB = async(URI) => {
    try{
    const DB_OPTIONS={
        dbName : "merndb",
    }
    await mongoose.connect(URI, DB_OPTIONS);
    console.log("Connected Successfullty")
}catch(error){
    console.log(error)  
  }

}

   export default connectDB;