//importing packages
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

//declaring mongodb url
const mongoDBURL= process.env.MONGODBURL;

// connecting with mongodb
mongoose.connect(mongoDBURL,{
    useNewUrlParser :true,
    useUnifiedTopology:true
});

//defining mongodb object & events
const DB = mongoose.connection;
DB.on('connected', () => console.log('Connected to MongoDB server'));
DB.on('error', () => console.log('Error in connecting to database server'));
DB.on('disconnected', () => console.log('Disconnected to MongoDB server'));
DB.on('reconnected', () => console.log('reconnected to MongoDB server'));
DB.on('disconnecting', () => console.log('Disconnecting to MongoDB server'));

// exporting the object
export {
DB
}