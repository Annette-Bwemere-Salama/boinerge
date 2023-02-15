import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import  {getGoals, postGoals, putGoals, deleteGoals} from "./routes/goalRoutes";

dotenv.config();

const app = express()

const port = process.env.PORT 

app.use(cors())
app.use(express.json())

app.get('/api/goals', getGoals);
app.post('/api/goals', postGoals);
app.put('/api/goals/:id', putGoals);
app.delete('/api/goals/:id', deleteGoals)


app.listen(port, ()=>{
    console.log(`server is running at ${port}`);
})