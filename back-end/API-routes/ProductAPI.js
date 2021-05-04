import ProductController from '../controller/ProductController.js'

import express from 'express'
const router= express.Router()

router.get('/' , ProductController.getAllProducts)

router.get('/:id' , ProductController.getOneProductFromID)

export default router