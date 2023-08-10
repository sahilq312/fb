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
          <li key={post._id} className="border border-slate-500 text-left p-4">
            <h1 className=" text-xl">{post.owner[0].name}</h1>
            <span className=" text-sm">{post.owner[0].email}</span>
            <p className="">{post.caption}</p>
            <img src={post.image} alt="" className=" w-full" />
            <span className="">{post.like}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
