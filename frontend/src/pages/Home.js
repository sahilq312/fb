import React, { useEffect, useState } from "react";

const Home = () => {
  const [post, setPost] = useState([])
  const token = localStorage.getItem("token");
  useEffect(()=> {
    fetch('http://localhost:5000/post/posts',{
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        'auth-token': `${token}`
      }
    })
    .then(response=> response.json())
    .then(data=>{
      setPost(data)
    })
  },[token])
  return <div>
    <ul>
      {post.map(post=>(
        <li key={post._id}>
          <h3>{post.owner}</h3>
          <p>{post.caption}</p>
        </li>
      ))}
    </ul>
  </div>;
};

export default Home;
