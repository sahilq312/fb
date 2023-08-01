import Post from "../models/Post.js";
import User from "../models/User.js";
import express from 'express';
import verifytoken from '../middleware/verifyToken.js'
const postController = express.Router();

postController.get("/posts", verifytoken, async(req,res)=> {
    const userId = req.user
    try {
        //console.log(userId);
        const posts = await Post.find();
        res.status(200).json(posts)
    } catch (error) {
        
    }
})
postController.post("/create", verifytoken , async(req,res)=> {
    //caption, owner, image
    const id = req.user
    const _id = id._id
    try {
        const post = new Post({
            caption: req.body.caption,
            owner: _id,
          });
          const createPost = await post.save()
          const user = await User.findById(_id)
          user.posts.unshift(post._id)
          await user.save()
          res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
})
postController.delete("/delete", verifytoken, async(req,res)=> {
    
})
postController.post("/like", verifytoken, async(req,res)=> {
    
})
postController.post("/comment", verifytoken, async(req,res)=> {
    
})
export default postController;