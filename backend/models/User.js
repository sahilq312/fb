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
  posts:[ {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  }],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  follower: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  country: String,
  about: String,
});
const User = new mongoose.model("user", userSchema);
export default User;
