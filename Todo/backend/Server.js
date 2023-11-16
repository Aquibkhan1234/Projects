import express from "express";

import dotenv from  "dotenv";

dotenv.config();
import routes from "./routes/ToDoRoutes.js";
import connectDB from "./db/connectDB.js"
import cors from "cors";
const app= express();

const URL = process.env.URL
const PORT = process.env.PORT || 5000;

connectDB(URL)

app.use(express.json());
app.use(cors());

app.use('/api', routes);

app.listen(PORT, ()=> {
    console.log(`Listening to the ${PORT}...`)
});

 