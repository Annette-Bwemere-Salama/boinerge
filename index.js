import express from 'express';
import dotenv from 'dotenv';
import { dbConnexion } from './db';
dotenv.config();

// dbConnexion()
const server = express()

const port = process.env.PORT


server.get('/', (req, res) => {
    
    return res.send('{"name": "Hero", "isLearning": true, "level": "apprentice"}');
})

server.get("/login", (req, res, next) => {
    return res.send("Login Annette")
})

server.get("/register", (req, res, next) => {
    return res.send("register Annette")
})


server.use((req, res, next) => {
    console.log(`Received ${req.method} request!`);
    next()
})

dbConnexion()
server.listen(port, () => {
    console.log(`server is running at ${port}`);
})