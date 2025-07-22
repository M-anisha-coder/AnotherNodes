import mongoose from 'mongoose';
import {DBName} from '../constant.js'

const MongoDatabase =  async()=>{
 try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DBName}`);
    
 } catch (error) {
    console.log("Error : ",error);
 }
}