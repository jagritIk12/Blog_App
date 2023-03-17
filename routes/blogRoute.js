const express = require('express')
const router = express.Router()
const blogController = require("../controller/blogController")
const validation = require("../vlidation/blog/blogValidation")
const {upload} = require("../middlewear/imageStorage")

router.post("/add/:id", upload.single("blogImage"),validation.createblogValidation, blogController.creatBlog)
router.post("/list", blogController.blogList)
router.get("/details/:id", blogController.Blogdetails)
router.get("/likes/:id",blogController.blogLikes)
router.get("/search", blogController.blogSearch)
router.patch("/edit/:id", blogController.editBlog)
router.delete("/delete/:id", blogController.deleteBlog)
router.get("/blog/:id", blogController.blogFound)

module.exports = router
                                                     