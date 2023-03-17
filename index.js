const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const bodyParser = require('body-parser')
const route = require('./routes/mainRoutes')
require('./models/config')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/", route)


const server = app.listen(process.env.PORT, () => {
    console.log(`server is running on port no:${process.env.PORT}`);
})
module.exports = server;