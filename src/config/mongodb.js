import mongoose from 'mongoose'

const connectDb = async () =>{
    mongoose.connection.on('connected',()=>{
        console.log("connection established");
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/spotify`)
}

export default connectDb