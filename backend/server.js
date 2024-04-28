import express from "express";
import dotenv from "dotenv";




const app = express();

dotenv.config();

const PORT = process.env.PORT || 2345;

app.get("/",(req,res)=>{
    res.send("crazy")
})


app.listen(PORT,()=>{
    console.log(`the server is running at port ${PORT}`)
})