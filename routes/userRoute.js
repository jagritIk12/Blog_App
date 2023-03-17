const express = require('express')
const router = express.Router()
const userController = require("../controller/userController")
const validation = require("../vlidation/user/userValidation")
const middlewear = require("../middlewear/auth_middleware")
const {upload} = require("../middlewear/imageStorage")

router.post("/signup", upload.single("profilepic"), validation.registerUserValidation, userController.signUp)
router.post("/login", validation.loginUserValidation, userController.userLogin)
router.post("/reset-password",userController.passwordResetemail)
router.post("/forgate/:id/:token", userController.forgatePassword)

module.exports = router
