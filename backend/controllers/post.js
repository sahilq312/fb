import Post from "../models/Post";
import User from "../models/User";
import express from 'express';
import verifytoken from '../middleware/verifyToken'
const postController = express.Router();

postController.post("/create", verifytoken, async(req,res)=> {

})
postController.delete("/delete", verifytoken, async(req,res)=> {
    
})
postController.post("/like", verifytoken, async(req,res)=> {
    
})
postController.post("/comment", verifytoken, async(req,res)=> {
    
})
export default postController;