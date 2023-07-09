import mongoose from "mongoose";

const userSchema = mongoose.Schema({
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
        minLength:[8,"Your Password Should be more than 8 characters"]
    }
})

export default mongoose.model("User",userSchema)