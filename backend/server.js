import express from "express";
import dotenv from "dotenv";




const app = express();

dotenv.config();

const PORT = process.env.PORT || 1234;

app.get("/",(req,res)=>{
    res.sendFile("/Users/arpitjaswal/Desktop/gig-buddy/backend/assets/sm_abj_crowdInteraction.jpg")
})


app.listen(PORT,()=>{
    console.log(`the server is running at port ${PORT}`)
})