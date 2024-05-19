import jwttoken from "jwtwebtoken"
import dotenv from "dotenv"


dotenv.config();
console.log(process)


const auth = (req,res,next)=>{
    const token = req.header('x-auth-token');

    //verify the presence of token
    if(!token){
        return res.status(401).json({msg:"No token found, authorization denied!"});
    }

    try {
        const decodedToken = jwttoken.verify(token, process.env.JWT_SECRET)
        req.body.email = decodedToken.email;
        req.body.password = decodedToken.password;
        next();
    } catch (error) {
        res.status(404).json({msg: "Sorry, there was an error: "+ error});
    }
}

export default auth;