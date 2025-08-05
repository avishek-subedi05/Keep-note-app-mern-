import express from 'express';
import dotenv, { config } from "dotenv";
const app=express();

import noteRoutes from "./routes/notesRoutes.js";
import {connectDB} from"./config/db.js"
import cors from 'cors'; 

const PORT=process.env.PORT || 3000;

//middleware to convert the data send by user from frontend to a json format #(at least i think so)
app.use(express.json());  // Parses JSON bodies
app.use(express.urlencoded({extended:true}));

//// to allow the data fetching from frontend 
app.use(cors({
  origin: 'http://localhost:5173', // Your React app's URL
            
}));


dotenv.config();

app.use("/api/notes" ,noteRoutes);

connectDB().then(()=>{

    app.listen(PORT,()=>{
        console.log(`Server is running in port ${process.env.PORT} `);
    
    });
})

