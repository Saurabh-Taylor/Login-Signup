import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
    type:String,
    required:[true,"Name is Required"],
    maxLength:[20,"Not more than 20 characters"],
    trim:true,
    minLength:[1,"Your name Should be more than 1 characters"]
    },
    email:{
        type:String,
        required:[true,"Email is Required"],
        unique:true,

    },
    password:{
        type:String,
        required:[true,"Password is Required"],
        minLength: [6, "Password should be at least 6 characters long"],
        maxLength: [20, "Password should not exceed 20 characters"],
    }
})

export default mongoose.model("User",userSchema)