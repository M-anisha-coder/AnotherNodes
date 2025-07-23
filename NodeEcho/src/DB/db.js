import mongoose from 'mongoose';
import { DBNAME } from '../constant.js';

if (!process.env.MONGODBURL ) {
    throw new Error("Missing MONGODBURL in environment variables");
}
if (!DBNAME ) {
    throw new Error("Missing DBNAME in Constant.js");
}

const DB = mongoose.connection;
DB.on('connected', () => console.log('✅ Connected to MongoDB server'));
DB.on('error', (err) => console.log('❌ MongoDB connection error:', err));
DB.on('disconnected', () => console.log('🔌 Disconnected from MongoDB server'));  

const connectDB = async () => {
    try {
        const connInstance= await mongoose.connect(`${process.env.MONGODBURL}/${DBNAME}`);
        console.log(`MongoDB Connected !! DB HOST : ${connInstance.connection.host}`);
    }
    catch (err) {
        console.error("Failed to connect to MongoDB:", err.message);
        process.exit(1);
    }
}

export default connectDB;
