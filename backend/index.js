import express from 'express';
import mongoose from "mongoose";



main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fb');
}
const app = express();
app.use(express.json());

app.listen(process.env.PORT, ()=> {
    console.log("server is running");
})