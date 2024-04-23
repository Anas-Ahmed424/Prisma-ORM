import prisma from "../DB/db.config.js";
import {jwtTokens} from '../utils/jwt-helpers.js';



export const loginUser = async (req, res) => {
    console.log("---> login user")


    // try{
    const {email } = req.body;



    const findUser = await prisma.user.findUnique({
        where:{
            email:email
        }
    })

    if(findUser) {


        // return res.json({status:400, message:"User logged in"})
        console.log("---> inside finduser")
        console.log("---> inside tokens")
        console.log(findUser)
        let tokens = jwtTokens(findUser);

        res.cookie('refresh_token',tokens.refreshToken,{httpOnly:true});
        res.json(tokens);


}
}