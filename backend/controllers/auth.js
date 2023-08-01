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
    name : req.body.name,
    email: req.body.email,
    password: hash,
  });

  try {
    const saveduser = await user.save();
    const token = jwt.sign({_id:user._id}, process.env.SECRET )
    res.status(200).json(token)
  } catch (error) {
    console.log(error);
  }
});
authController.post("/login", async(req,res)=>{
  try {
    const user = await User.findOne({email: req.body.email})
    if(!user)return res.status(400).json('email is wrong')

    const validpass = await bcrypt.compare(req.body.password, user.password)
    if(!validpass)return res.status(400).json('invalid password')

    //res.status(200).json({_id:user._id})
    const token = jwt.sign({_id:user._id}, process.env.SECRET)
    res.status(200).header('auth-token', token).json({token})
  } catch (error) {
    console.log(error)
    res.status(500).send('internal server error')
  }
})
export default authController;
