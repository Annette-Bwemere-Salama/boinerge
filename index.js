import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express()

const port = process.env.PORT


app.get('/', (req, res) => {
    return res.send("Hello, Annette")
})

app.listen(port, () => {
    console.log(`server is running at ${port}`);
})