import ProductAPI from './ProductAPI.js'

import express from 'express'

const router = express.Router()

router.use('/product' , ProductAPI)

export default router