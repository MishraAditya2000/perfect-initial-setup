import mongoose from "mongoose";



async function connectDatabase(){
  try {
    console.log(`${process.env.MONGO_DB_URL}/${DB_NAME}`);
    const connectionInstance=await mongoose.connect(`${process.env.MONGO_DB_URL}/${process.env.DB_NAME}`)
    /*console.log(connectionInstance);*/
    console.log(`\n Mongo DB Connected!! DB HOST`);
    
  } catch (error) {
    console.log("ERROR! :",error);
    process.exit(1)
  }
}

export default connectDatabase;

// ;(async()=>{
//   try {
//     await mongoose.connect(`${process.env.MONGO_DB_URL}/${DB_NAME}`)
//   } catch (error) {
//     console.log(error)
//     throw error
//   }
// })()