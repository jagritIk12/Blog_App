const commentSchema = require("../models/commentSchema")

//add comment API
const Addcomment = async (req, res) => {
    try {
      let body = { ...req.body, userId: req.params.Uid, blogId: req.params.Uid };
      const commentData = await new commentSchema(body);
      await commentData.populate({
        path: "userId",
        select: "userName",
      });
      let comment = await commentData.save();
      res.status(201).json({
        success: "success",
        message: "Comment added successfully",
        addedComment: comment,
      });
    } catch (err) {
      res.status(400).json({
        success: "failure",
        message: "Error occure " + err,
      });
    }
  };

module.exports = {
    Addcomment
}