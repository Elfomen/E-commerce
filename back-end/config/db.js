import env from 'dotenv'
import mongoose from 'mongoose'
env.config()

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost/commerce" , {
            useNewUrlParser : true , 
            useCreateIndex : true , 
            useUnifiedTopology : true
        })

        console.log("Successfully connected to the database")
    } catch (error) {
        console.error(error.message)
        process.exit(1)
    }
}


export default connectDB