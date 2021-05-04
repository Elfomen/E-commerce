import Product from '../models/Product.js'

const ProductC = {
    getAllProducts : async (req , res) => {
        try {
            await Product.find({}).then(products => {
                res.json(products)
            })
    
            console.log("Products retrieved sucessfully")
        } catch (error) {
            console.log("Impossible retrieving products from database" , error.message)
        }
        
    } , 

    getOneProductFromID :async (req , res) => {
        try {
            await Product.findById({ _id : req.params.id }).then(product => {
                res.json(product)
            })
            console.log('Successfully retrieved one product from the database')
        } catch (error) {
            console.log("Impossible retrieving product" , error.message)
        }
    }
}

export default ProductC