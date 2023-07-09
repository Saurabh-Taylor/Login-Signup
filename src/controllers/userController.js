import User from "../models/userModel.js"




export const home = (req,res) =>{
    res.send("Welcome To PW Skills!")
}

export const register  = async(req,res)=>{
    try {

        const {name,email,password} = req.body

        if(!name || !email || !password){
            throw new Error("All input fields are necessary")
        }

        const user = await User.create({
            name,
            email,
            password  
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

export const login = async(req,res)=>{
    try {
        const {email,password} = req.body

        const user  = await User.findOne({email})

        if(!user){
            res.json({
                message:"No account associate with this email"
            })
        }

        if(password ===user.password){
            res.status(200).json({
                message:"User Login Successfully"
            })
        } else{
            res.json({
                message:"Password is Incorrect"
            })
        }

        

        

    } catch (error) {
        console.log(error)
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}


