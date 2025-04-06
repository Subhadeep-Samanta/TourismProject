import express from "express"
import dotenv from "dotenv"
import connectDB from "../dbconnection/db.js"
dotenv.config()
connectDB()
const app=express()

app.get("/",(req,res)=>{
    res.send("hello ....")
})
const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(`server in running on port http://localhost:${PORT}`);
    
})