import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [caption, setcaption] = useState("");
  const token = localStorage.getItem("token")
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const post = {
      caption,
    }
    console.log(post);
    try {
      const response = await fetch("http://localhost:5000/post/create",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": `${token}`,
        },
        body: JSON.stringify(post)
      });
      if(response.ok){
        Navigate("/")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Caption</label>
        <input
          type="text"
          placeholder="caption"
          value={caption}
          onChange={(e) => setcaption(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default CreatePost;
