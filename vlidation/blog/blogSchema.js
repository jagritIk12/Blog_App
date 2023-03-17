const joi = require("joi")
const schema = {
    addBlog: joi.object({
        blogTitle: joi.string().max(20).required(),
        blogDescription: joi.string().max(100).required(),
        blogImage: joi.string(),
        blogLikes: joi.number()
    }).unknown(true)
}
module.exports = schema
