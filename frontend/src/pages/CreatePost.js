import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [caption, setCaption] = useState("");
  const [productImg, setProductImg] = useState("");
  const token = localStorage.getItem("token");
  const Navigate = useNavigate();

  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];
    TransformFileData(file);
  };
    console.log("Selected Image:", productImg);

  const TransformFileData = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImg(reader.result);
      };
    } else {
      setProductImg("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const post = {
      caption,
      image: productImg
    };
    console.log(post);
    console.log("Image to upload:", productImg);

    try {
      const formData = new FormData();
      formData.append("caption", caption);
      formData.append("image", productImg);

      const response = await fetch("http://localhost:5000/post/create", {
        method: "POST",
        headers: {
          "auth-token": `${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        Navigate("/");
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
          onChange={(e) => setCaption(e.target.value)}
        />
        <label>Image</label>
        <input
          id="imgUpload"
          accept="image/*"
          type="file"
          onChange={handleProductImageUpload}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {productImg ? (
          <>
            <img src={productImg} alt="error!" />
          </>
        ) : (
          <p>Product image upload preview will appear here!</p>
        )}
    </>
  );
}

export default CreatePost;



/* import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [caption, setcaption] = useState("");
  const [image, setImage] = useState("");
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
        <label>Image</label>
        <input 
        type="file"
        accept="image"
        value={image}
        onChange={(e)=> setImage(e.target.files[0])}/>
        <button>Submit</button>
      </form>
    </>
  );
};

export default CreatePost; */
