// Higher-order functions are functions that can take other functions as arguments and/or return functions as results.
//const asyncHandler =()=>{ async()=>{}}
//---------Method 1 promises---------

const asyncHandler =(requestHandler)=>(req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err));
}

//-------Method 2 try catch------------ 
// const asyncHandler = (requestHandler)=> async(req,res,next)=>{
//     try {
//         await requestHandler(req,res,next)
//     } catch (error) {
//         res.status(error.status||500).json({
//             success :false,
//             message :error.message
//         })
//     }
// }
//------------------------------------------------

export {asyncHandler};