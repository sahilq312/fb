import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  posts:[{
    type: "ObjectId",
    ref: "Post",
  }],
  following: [
    {
      type: "ObjectId",
      ref: "User",
    },
  ],
  follower: [
    {
      type: "ObjectId",
      ref: "User",
    },
  ],
  country: String,
  about: String,
});
const User = mongoose.model("User", userSchema);
export default User;