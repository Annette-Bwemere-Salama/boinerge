import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import {Goalget,goalPost,goalPut,Goaldelete,} from "./routes/getRouter.js"

dotenv.config();

const app = express()

const port = process.env.PORT 

app.use(cors())
app.use(express.json())

app.use(Goalget);
app.use(goalPost);
app.use(goalPut);
app.use(Goaldelete);




app.listen(port, ()=>{
    console.log(`server is running at ${port}`);
})