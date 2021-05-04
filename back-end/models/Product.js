import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
    name : {
        type : String  ,
        required : true
    } , 
    description : {
        type: String , 
        required : true
    } , 
    price :  {
        type : Number , 
        required : true
    } , 

    countInStock : {
        type : Number , 
        required : true
    } , 
    imagePath : {
        type : String , 
        required : true
    }

})

const Product = mongoose.model('product' , ProductSchema)

export default Product