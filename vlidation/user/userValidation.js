const user = require("../user/userSchema")

module.exports = {
    registerUserValidation: async (req, res, next) => {
        const value = await user.registerUser.validate(req.body, {
            abortEarly: false,
        })
        if (value.error) {
            res.status(400).json({
                success: 0,
                message: value.error.details[0].message,
            })
        }
        else {
            next()
        }
    },
    loginUserValidation: async (req, res, next) => {
        const value = await user.loginUser.validate(req.body, {
            abortEarly: false,
        })
        if (value.error) {
            res.status(400).json({
                success: 0,
                message: value.error.details[0].message,
            })
        }
        else {
            next()
        }
    }
}
