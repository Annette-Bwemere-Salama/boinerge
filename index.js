import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const server = express()

const port = process.env.PORT


server.get('/', (req, res) => {
    
    return res.send('{"name": "Hero", "isLearning": true, "level": "apprentice"}');
})


server.use((req, res, next) => {
    console.log(`Received ${req.method} request!`);
    next()
})
server.listen(port, () => {
    console.log(`server is running at ${port}`);
})