const mongoose = require('mongoose')
const commentSchema = new mongoose.Schema({
    blogComment : {
        type : String,
        required: true
    },
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    blogId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'blog'
    },
    isActive : {
        type : Boolean,
        required: true,
        default: true
    }
})
commentSchema.set('timestamps', true)
module.exports = mongoose.model('comment', commentSchema)