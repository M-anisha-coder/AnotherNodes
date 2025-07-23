//------Method 1 Use DB.js File and import it
import './config.js';  // Load environment variables first
import app from './app.js';
import connectDB from "./DB/db.js";
const port = process.env.PORT || 3000;
connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`server is running at Port : ${port}`);
        });
        app.on('error', (err) => {
            console.error("Server is not able to connect with database error :", err);
        });
    })
    .catch((err) => {
        console.error("Failed to connect :", err.message);
    })

//--------------------------------------------------------------------------------------
//------Method 2 To connecting with DB----------------------------------------------

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
//---------------------------------------------------------------------------------


