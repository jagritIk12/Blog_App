
const blogSchema = require("../models/blogSchema")
const userSchema = require("../models/userSchema")
const commentSchema = require("../models/commentSchema")

//Add BLOG AP
const creatBlog = async (req, res) => {
  const blogData = await new blogSchema(req.body);
  blogData.userId = req.params.id;
  try {
    //const filePath = `uploads${req.file.filename}`;
    //blogData.blogImage = filePath;
    await blogData.save();
    res.status(201).json({
      success: "success",
      message: "Blog published successfully",
      blogDetails: blogData
    });
  } catch (err) {
    res.status(400).json({
      success: "failure",
      message: "Error occure " + err.message,
    });
  }
};

//BLOG LIST API
const blogList = async (req, res) => {
  try {

    const blogData = await blogSchema.find()
    res.status(200).json({
      success: "success",
      message: "blog  list has  displayed successfully",
      blogDetails: blogData
    })
  }
  catch (err) {
    res.json({
      success: "failure",
      message: "erro occured" + err.message
    })

  }
}

// Blog details API
const Blogdetails = async (req, res) => {
  try {
    //const blogData = await blogSchema.findById(req.params.id)
    const blog = await commentSchema.findOne({blogId: req.params.id})
    .populate({
      path: "userId",
      select: "userName profilepic"
    })
    .populate({
      path: "blogId"
    })
    res.status(200).json({
      success: "success",
      message: "blog details founded successfully",
      data: blog
    })
  }
  catch (err) {
    res.status(401).json({
      success: "failure",
      message: "error occured" + err.message
    })

  }

}

//Blog likes API
const blogLikes = async (req, res) => {
  try {
    const { blogLikes } = req.body
    const likes = await blogSchema.findById(req.params.id)

    if (likes != null) {
      if (blogLikes == true) {
        await likes.updateOne( { blogLikes: ++likes.blogLikes } );
        res.status(200).json({
          success: "success",
          message: "you liked the blog",
          likedBlog: likes.blogLikes,
        })
        console.log(1)
      } else {
        await likes.updateOne( { blogLikes: --likes.blogLikes } );
        res.status(202).json({
          success: "failure",
          message: "you unliked a blog",
          unlikedblog: likes.blogLikes
        })
      }
    }
    else {
      res.status(404).json({
        success: "failure",
        message: "you unliked a blog",
        unlikedblog: likes.blogLikes
      })
    }
  }
  catch (err) {
    res.status(400).json({
      success: "failure",
      message: "error occured" + err.message
    })

  }
}
// blog search API
const blogSearch  = async (req,res) => {
  try{
    const {blogTitle}=req.body
    const query={blogTitle:{$regex:blogTitle,$options:"i"}}
    let searchBlog= await blogSchema.find(query);
    res.status(200).json({
      success: "success",
      message: "blog has  searched successful",
      results: searchBlog // send the search results
    })
  }
  catch(err){
    res.status(403).json({
      success: "failure",
      message: "error occurred" + err.message
    })
  }
}
// edit blog API
const editBlog = async (req,res) => {
  try{
    const blogData = await blogSchema.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({
      success: "success",
      message: "blog has updated successfully",
      //data: blogData
    })
  }
  catch(err){
    res.json({
      success: "failure",
      message: "error occurred" + err.message
    })

  }
}

//blog delte API
const deleteBlog = async (req,res) => {
  try{
  const blogData = await blogSchema.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: "success",
    message: "blog has deleted successfully",
   })
  }  
  catch(err){
    res.json({
      success: "failure",
      message: "error occured" + err.message
    })
    
  }
  
}

// HOW MUCH blog an user has created API 

const blogFound = async (req,res) => {
  const{id} = req.params
  try{
    const blog  = await blogSchema.find({userId: id})
    .populate({
      path: "userId",
      select: "userName" 
    })
    res.status(200).json({
      success: "success",
      message: "blog found",
      data: blog
    })
  }
  catch(err)
  {
    res.json({
      success: "failure",
      message: "error occured" + err.message
    })

  }
}


module.exports = {
  creatBlog,
  blogList,
  Blogdetails,
  blogLikes,
  blogSearch,
  editBlog,
  deleteBlog,
  blogFound
}