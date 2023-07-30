import express from "express";
import mongoose from "mongoose";
import User from "../models/User.js";
import verifytoken from "../middleware/verifyToken.js";
const userController = express.Router();

userController.get("/profile", verifytoken, async (req, res) => {
  const id = req.user
  const _id = id._id
  try {
    const user = await User.findById(_id);
    if (user) {
      res.status(200).json(user)
    }else{
      res.status(404).json("No such User");
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
export default userController;
