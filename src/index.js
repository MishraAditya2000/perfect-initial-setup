import { app } from "./app.js";
import connectDatabase from "./db/index.js";
import dotenv from "dotenv";


dotenv.config({
  path:"./.env"
})

connectDatabase().then(()=>{
  app.listen(process.env.PORT||8080)
  console.log("Server Running at:",process.env.PORT);
}).catch(()=>{
  console.log("Mongo DB Connection Failed !!");
})