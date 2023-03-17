const express = require('express')
const router = express.Router()
const userRoutes = require('../routes/userRoute')
const blogRoutes = require('../routes/blogRoute')
const commentRoutes = require('../routes/commentRoute')

router.use("/user",userRoutes)
router.use("/blog", blogRoutes)
router.use("/comment",commentRoutes)

module.exports = router




