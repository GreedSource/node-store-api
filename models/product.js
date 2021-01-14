const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
    },
    description: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    reviews: [{
        text: String,
        postedBy: {
            type: ObjectId,
            ref: 'User'
        }
    }],
    rating: [{
        stars: Number,
        postedBy: {
            type: ObjectId,
            ref: 'User'
        }
    }],
    sellBy: {
        type: ObjectId,
        ref: 'User'
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    }
})

module.exports = mongoose.model('Product', productSchema)