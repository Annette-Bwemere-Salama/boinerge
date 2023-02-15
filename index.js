import express from 'express';
// import cors from "cors"
// import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config();

const app = express()

const port = process.env.PORT
// app.use(cors())
app.use(express.json())
    
const server = app.listen(port, ()=>{
    console.log(`server is running at ${port}`);
})