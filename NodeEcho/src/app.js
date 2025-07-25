import express from 'express';
import cors from 'cors'; //cross origin resource sharing
import cookieParser from 'cookie-parser';
const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}));

app.use(express.json({limit:"10kb"}));

app.use(express.urlencoded({extended:true,limit :"10kb"}));
app.use(cookieParser());
app.use(express.static('public'));






export default app;