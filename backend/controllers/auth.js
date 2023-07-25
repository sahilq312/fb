import 'dotenv/config.js'
import express from "express";
import User from "../models/User.js";
import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

const authController = express.Router();



authController.post("/register", async (req, res) => {
  const exist = await User.findOne({ email: req.body.email });
  if (exist) res.status(400).json({ message: "user alreay exist" });

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    email: req.body.email,
    password: hash,
  });

  try {
    const saveduser = await user.save();
    const token = jwt.sign({_id:user._id}, process.env.SECRET )
    res.header('auth-token', token).send(token)
  } catch (error) {}
});
authController.get("/login", async(req,res)=>{
    res.send("working")
})
export default authController;
