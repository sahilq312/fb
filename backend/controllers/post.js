import Post from "../models/Post.js";
import User from "../models/User.js";
import express from 'express';
import verifytoken from '../middleware/verifyToken.js'
const postController = express.Router();

postController.get("/posts", verifytoken, async (req, res) => {
    try {
      const posts = await Post.find().populate('owner');
      res.status(200).json(posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
      res.status(500).json({ error: "Failed to fetch posts" });
    }
  });
  
postController.post("/create", verifytoken , async(req,res)=> {
    //caption, owner, image
    const id = req.user
    const _id = id._id
    try {
        const post = new Post({
            caption: req.body.caption,
            owner: _id,
          });
          const createPost = await Post.create(post)
          const user = await User.findById(_id)
          user.posts.unshift(createPost._id)
          await user.save()
          res.status(200).json(createPost)
    } catch (error) {
        res.status(500).json(error)
    }
})
postController.delete("/delete/:id", verifytoken, async(req,res)=> {
    
})
postController.post("/like/:id", verifytoken, async(req,res)=> {
    
})
postController.post("/comment/:id", verifytoken, async(req,res)=> {
    
})
export default postController;