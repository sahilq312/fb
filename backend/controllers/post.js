import Post from "../models/Post.js";
import User from "../models/User.js";
import express from 'express';
import verifytoken from '../middleware/verifyToken.js'
const postController = express.Router();


const posts = [
    {
        id: 1,
        caption: "suiii",
        owner: 'user1'
    },
    {
        id: 2,
        caption: "suiii",
        owner: 'user1',
    },
]


postController.get("/posts",verifytoken, async(req,res)=> {
    
    res.send(posts)
})
postController.post("/create", verifytoken, async(req,res)=> {

})
postController.delete("/delete", verifytoken, async(req,res)=> {
    
})
postController.post("/like", verifytoken, async(req,res)=> {
    
})
postController.post("/comment", verifytoken, async(req,res)=> {
    
})
export default postController;