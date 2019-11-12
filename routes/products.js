const router = require('express').Router()
let Product = require('../models/product.model')

router.get('/', async (req,res) => {
    try {const products = await Product.find({})
    console.log(products)
    res.send(products)}
    catch {
        console.log('get products failed')
    }
})

module.exports = router