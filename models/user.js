const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required : true
    },
    password: {
        type: String,
        required : true
    },
    seller: {
        type: Boolean,
        required: true,
        default: false
    },
    pic: {
        type: String,
        required : true,
        default: 'https://res.cloudinary.com/greedsource/image/upload/v1610245677/bpnospb1wlvwlf6xqlak.jpg'
    }
})

module.exports = mongoose.model('User', userSchema)