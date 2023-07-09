import dotenv from "dotenv"
dotenv.config();

import express from "express"
import connectToDb from "./config/db.js";
import  userRoutes from "./routes/userRoutes.js"
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
// init connect to db
connectToDb()

app.use("/",userRoutes)



export default app