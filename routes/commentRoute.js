const express = require('express')
const router = express.Router()
const commentController = require("../controller/commentController")


router.post("/addComment/:Uid/:Bid", commentController.Addcomment)

module.exports = router