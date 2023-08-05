import React, { useEffect, useState } from "react";

const Home = () => {
  const [post, setPost] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    fetch("http://localhost:5000/post/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      });
  }, [token]);
  return (
    <div className="">
      <ul>
        {post.map((post) => (
          <li key={post._id}>
            <h1>{post.owner[0].name}</h1>
            <span>{post.owner[0].email}</span>
            <p>{post.caption}</p>
            <img src={post.img} alt="" />
            <span>{post.like}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
