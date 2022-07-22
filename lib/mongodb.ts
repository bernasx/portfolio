import mongoose from "mongoose"


const MONGODB_URI  = process.env.MONGODB_URI as string;

const connectDB = async () => {
    if (mongoose.connection.readyState != 0){
      return;
    }
    const conn = await mongoose
      .connect(MONGODB_URI as string)
      .catch(err => console.log(err))
    console.log("Mongoose Connection Established")
    
    return conn
  }

  export default connectDB;