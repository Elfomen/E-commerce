import mongoose from 'mongoose'

import Product from './models/Product.js'

import connectToDataBase from './config/db.js'

import data from './data/products.js'

connectToDataBase()

const insertData = async () => {
    try {
        await Product.deleteMany({})
        await Product.insertMany(data)
        console.log('All the data has been registered successfully')
    } catch (error) {
        console.log('Impossible toinsert the datat in the database' , error.message)
    }
}

insertData()