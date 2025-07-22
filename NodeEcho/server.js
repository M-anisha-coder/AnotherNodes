import express from 'express';
import dotenv from 'dotenv';
//import {DB} from './DB/db.js';
const app =express();
dotenv.config();
const port=process.env.PORT || 3000;

// export-import example
// import {AuthorName,createFile} from './Utilities/FileSystem.js';
// var Name =AuthorName;
// createFile("Hello "+ Name);





app.get("/api/v1/",(req,res)=>{
    res.send("TODO-LIST WorkShop");
});

app.get("/api/v1/TodoList",(req,res)=>{
    var todo={
        Title:"Docker Workshop",
        Content :"Learn building about images.",
        keyword:["docker","Images","Containers"]
    }
    res.json(todo);
});

app.listen(port,()=>{
    console.log(`server is running at https://localhost:${port}/api/v1`);
});


