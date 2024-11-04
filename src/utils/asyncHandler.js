const asyncHandler=(requestHandler)=>{
  return (req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
  }
}


// const newAsyncHandler=()=>async(req,res,next)=>{
//   try {
    
//   } catch (error) {
//     res.status(error.code||500).json({
//       message:'Failed',
//       notify:`Error: ${error.message}`
//     })
//   }
// }


export {asyncHandler}