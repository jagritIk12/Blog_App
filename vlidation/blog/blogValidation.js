// const company = require("../company/companySchema")
const blog = require("../blog/blogSchema")
const createblogValidation = async (req,res,next) => {
    const value = await blog.addBlog.validate(req.body, {
        abortEarly : false,
    })
    if (value.error) {
        res.status(500).send({
            success: 0,
            Message: value.error.details[0].message,
        })
    }
    else {
        next()
    }
}

module.exports = {
    createblogValidation
}