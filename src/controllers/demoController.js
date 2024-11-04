import { ApiResponse } from "../utils/ApiResponse.js";
import {asyncHandler} from "../utils/asyncHandler.js";

const registerUser=asyncHandler(async(req,res)=>{
  console.log('PING CONTROLLER');
  
  const data="qwerty"
  return res.status(200).json(new ApiResponse("",200,"API Call Successful",data))
})

export {registerUser}