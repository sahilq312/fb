import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  caption: {
    type: String,
    required: true,
  },
  owner: [{
     type: "ObjectId",
    ref: "User"
  }],
  image: {
    type: String
   },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: [
    {
      type: "ObjectId",
      ref: "User",
    },
  ],
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
});
const Post = new mongoose.model("Post", postSchema);
export default Post;
