import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import {GoalgetPost,goalUpdateAntDeleteId} from "./routes/getRouter.js"

dotenv.config();

const app = express()

const port = process.env.PORT 

app.use(cors())
app.use(express.json())

app.use(GoalgetPost);
app.use(goalUpdateAntDeleteId);





app.listen(port, ()=>{
    console.log(`server is running at ${port}`);
})