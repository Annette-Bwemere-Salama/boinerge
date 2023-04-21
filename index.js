import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const server = express()

const port = process.env.PORT


server.get('/', (req, res) => {
    return res.send("Hello, Annette")
})

server.listen(port, () => {
    console.log(`server is running at ${port}`);
})