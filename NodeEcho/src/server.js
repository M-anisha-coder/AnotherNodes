import './config.js';
// import express from 'express';
// const app = express();
// const port = process.env.PORT || 3000;

//------Method 1 Use DB.js File and import it
import connectDB from"./DB/db.js";
connectDB();

//------Method 2 To connecting with DB-------------------

// if (!process.env.MONGODBURL) {
//     throw new Error("Missing MONGODBURL in environment variables");
// }
// const DB = mongoose.connection;
// DB.on('connected', () => console.log('✅ Connected to MongoDB server'));
// DB.on('error', (err) => console.log('❌ MongoDB connection error:', err));
// DB.on('disconnected', () => console.log('🔌 Disconnected from MongoDB server'));    
// (async () => {
//     try {
//         //Connecting with mongodb
//         await mongoose.connect(`${process.env.MONGODBURL}/${DBNAME}`);

//         app.on("error", (err) => {
//             console.error("Server is not able to connect with database error :", err);
//         });

//         app.listen(port, () => {
//             console.log(`server is running at https://localhost:${port}/api/v1`);
//         });
//     }
//     catch (err) {
//         console.error("Failed to connect to MongoDB:", err.message);
//         process.exit(1);
//     }

// })();
//-----------------











































// app.get("/api/v1/",(req,res)=>{
//     res.send("TODO-LIST WorkShop");
// });

// app.get("/api/v1/TodoList",(req,res)=>{
//     var todo={
//         Title:"Docker Workshop",
//         Content :"Learn building about images.",
//         keyword:["docker","Images","Containers"]
//     }
//     res.json(todo);
// });

// app.listen(port,()=>{
//     console.log(`server is running at https://localhost:${port}/api/v1`);
// });


