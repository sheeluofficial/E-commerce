const express = require("express")
const app = express()

// route imports 

const  product = require("./src/routes/product.route.js")

app.use("/api/v1",product)


module.exports = app