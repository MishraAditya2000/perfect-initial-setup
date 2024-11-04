import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


/*Routes */
import demoRouter from '../src/routes/demo.routes.js'

const app=express()

app.use(cors({
  origin:process.env.ALLOWED_ORIGIN,
  credentials:true
}))

app.use(express.json({limit:'18mb'}))
app.use(express.urlencoded({extended:true,limit:'16kb'}))
app.use(express.static("public"))
app.use(cookieParser())

app.use('/demo',demoRouter)

export {app}