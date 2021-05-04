import mongoose from 'mongoose'
import express from 'express'
import env from 'dotenv'
import connectToTheDB from './config/db.js'
import AllAPIS from './API-routes/mainAPIs.js'

env.config()
const app = express()

const port = process.env.PORT || 3001

connectToTheDB()


app.use('/' , AllAPIS)

app.listen(port , () => {
    console.log('The app is running on port ' , port)
})



