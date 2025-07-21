import express from 'express';
import dotenv from 'dotenv';
const app =express();
dotenv.config();
const port=process.env.PORT || 3000;

import {AuthorName,createFile} from './Utilities/FileSystem.js';
var Name =AuthorName;
createFile("Hello "+Name);

app.get("/",(req,res)=>{
    res.send("Starting NodeEcho with"+Name);
});


app.listen(port,()=>{
    console.log(`server is running at https://localhost:${port}`);
});


