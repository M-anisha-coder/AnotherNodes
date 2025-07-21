import express from 'express';
import dotenv from 'dotenv';
const app =express();
dotenv.config();
const port=process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Starting NodeEcho");
});

app.listen(port,()=>{
    console.log(`server is running at https://localhost:${port}`);
});