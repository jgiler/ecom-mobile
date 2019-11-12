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

router.post('/add', async (req,res) => {
    let body = req.body
    try {const add = await Product.create(body)
        res.send(add)}
        catch {
            console.log('failed post product')
        }
})

module.exports = router