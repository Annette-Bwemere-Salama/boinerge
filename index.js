import express from 'express';
import dotenv from 'dotenv';
import  {goalRoutes} from "./routes/goalRoutes";

dotenv.config();

const app = express()

const port = process.env.PORT || 1200

app.use(express.json())

app.post('/api/goals', goalRoutes);

app.listen(port, ()=>{
    console.log(`server is running at ${port}`);
})