import mongoose,{Schema}  from "mongoose";
const VideoSchema=new Schema({
    videoFile:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    view:{
        type:Number,
        default:0

    },
    ispublished:{
        type:Boolean,
        default:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true});

export const Video= mongoose.model('Video',VideoSchema);