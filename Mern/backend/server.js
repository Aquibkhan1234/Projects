import express from 'express';
const app = express();
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || "3000"

import userRoute from "./routes/userRoute.js";

import connectDB from "./db/connectdb.js";

import cors from "cors";

   const URI = process.env.URI;

   app.use(express.json());
   app.use(cors());  

   connectDB(URI); 

  app.use(userRoute)

app.listen(port , ()=> {
    console.log(`Server is listening to the port ${port}`)
});
