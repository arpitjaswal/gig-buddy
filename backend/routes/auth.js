import express from "express"



const router = express.Router();

router.post("/loginCheck", async (req, res) =>{
    const {email, password} = req.body;
console.log(req)
    res.json({status:"authorized"})

})

