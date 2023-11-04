import mongoose from "mongoose";
const connectDB =async(URL)=> {
    try{
        const DB_OPTIONS ={
            dbName : "Books-Collection",
        }
        await mongoose.connect(URL, DB_OPTIONS);
        console.log("Connected Successfullt to DB...")
    }catch(error){
        console.log(error);
    }
}

 export default connectDB;