import mongoose from "mongoose";

const connectToDb = async()=>{
    
        mongoose.connect(process.env.MONGO_URI)
        .then((conn)=>{
            console.log(`Db is connected ${conn.connection.host}`);
        })
        .catch((error)=>{
            console.log(error.message);
            process.exit(1)
        })
}

export default connectToDb