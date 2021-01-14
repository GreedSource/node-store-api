const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Product = mongoose.model('Product')
const middleware = require('../middleware/auth')

router.post('/add', middleware, (req, res) => {
    const { name, stock, description, thumbnail } = req.body
    if (!name || !stock || !description || !thumbnail){
        res.status(422).json({error: 'please add all the fields'})
    }
    const product = new Product({
        name,
        stock,
        description,
        thumbnail,
        sellBy: req.decode
    })
    product.save()
    .then(result => {
        res.json({ message:result })
    })
    .catch(err => {
        console.log(err)
    })
})

router.delete('/delete/:productId', middleware, (req, res) => {
    Product.findOne({_id:req.params.productId})
    .populate('sellBy', '_id')
    .exec((err, product) => {
        if (err || !product){
            return res.status(422).json({error:err})
        }
        if (product.sellBy._id.toString() === req.decode._id.toString()){
            product.remove()
            .then(result => {
                res.json({'message': 'The product has been removed successfully!'})
            })
            .catch(err => {
                console.log(err)
            })
        }
    })
})


module.exports = router