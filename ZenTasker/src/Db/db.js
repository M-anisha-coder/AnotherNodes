import mongoose from 'mongoose';
import {DBName} from '../constant.js'

if (!process.env.MONGODB_URI ) {
    throw new Error("Missing MONGODBURL in environment variables");
}
if (!DBName ) {
    throw new Error("Missing DBNAME in Constant.js");
}
const DB =mongoose.connection;
DB.on('connected', () => console.log('✅ Connected to MongoDB server'));
DB.on('error', (err) => console.log('❌ MongoDB connection error:', err));
DB.on('disconnected', () => console.log('🔌 Disconnected from MongoDB server'));  

const MongoDBconnection =  async()=>{
 try {
   const connInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DBName}`);
   console.log(`MongoDB Connected !! DB HOST : ${connInstance.connection.host}`);
    
 } catch (error) {
        console.error("Failed to connect to MongoDB:", err.message);
        process.exit(1);
 }
}

export default MongoDBconnection;