 import express from "express";
 import { PORT, mongoDBURL } from "./config.js";
 import connectDB from "./db/connectdb.js";
 import { Book } from "./models/bookModels.js";
 import bookRoute from './routes/booksRoute.js';
 import cors from "cors";
 const app = express();

 app.use(cors());
 app.use(express.json())
 
 const URL  = mongoDBURL;
 connectDB(URL);
 


 app.use("/books", bookRoute);

 app.listen(PORT, () => {
    console.log("App is listening to the port")
 });