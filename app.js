require("dotenv").config()
require('./models/index')
const express = require('express')
const app = express()
const port = process.env.PORT
const bodyParser = require("body-parser")

const routes = require('./routes/index')
app.use(bodyParser.json())

//routes
app.use('/api/auth', routes.Auth)
app.use('/api/product', routes.Product)

app.listen(port, () => {
    console.log(`Server is running in port: ${port}`)
})