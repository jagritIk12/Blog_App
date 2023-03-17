const jwt = require("jsonwebtoken")
const User = require('../models/userSchema')

const checkUserAuth = async (req, res, next) => {

  const { authorization } = req.headers
  let token
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      token = authorization.split(" ")[1]
      const { userID } = jwt.verify(token, process.env.JWT_SECRET_KEY)
      req.user = await User.findById(userID).select("-password")
      next()
    }
    catch (err) {
      res.status(401).send({
        success: "failed",
        message: "Unauthorized user " + err.message
      })
    }
  }

  if (!token) {
    res.status(401).send({
      success: "success",
      message: "Unauthorized user no token"
    })
  }

}

module.exports = { checkUserAuth }