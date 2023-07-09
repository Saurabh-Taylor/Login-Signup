import User from "../models/userModel.js"




export const home = (req,res) =>{
    res.send("Welcome To PW Skills!")
}

/* export const createUser  = async(req,res)=>{
    try {

        const {name,email,password} = req.body


        const user = await User.create({
            name,
            email    
        })

        res.status(201).json({
            success:true,
            message:"User Registered Successfully"
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}
*/

