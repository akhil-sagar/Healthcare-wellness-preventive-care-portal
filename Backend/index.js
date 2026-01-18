import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './routers/auth.router.js'
import bodyParser from 'body-parser';
dotenv.config();
const app=express();

app.get("/", (req, res) => {
  res.send("Hello from GET request");
});

app.use(bodyParser.urlencoded())

app.use(bodyParser.json())
app.listen(3000,()=>{
    console.log("server is running at port 3000");
})