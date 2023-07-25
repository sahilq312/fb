import 'dotenv/config.js'
import express from 'express';
import mongoose from "mongoose";
import authController from './controllers/auth.js';
import userController from './controllers/user.js';



main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/db')
  .then(console.log("db is connected"))
}
const app = express();
app.use(express.json());

app.get("/", (req,res)=> {
    res.send("working")
})
app.use('/auth', authController)
app.use('/user', userController)

app.listen(process.env.PORT, ()=> {
    console.log("server is running");
})