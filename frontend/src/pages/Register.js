import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("")
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const Navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("token");
    if (auth) {
      Navigate("/");
    }
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
    };
    console.log(user);
    try {
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        const { token } = await response.json();
        //console.log(token)
        localStorage.setItem("token", token);
        Navigate("/");
      }
      if (!response.ok) {
        console.error(Error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="  text-black">
      <h1>Register</h1>
      <label>Username</label>
        <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className=""
         />
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </label>
        <button> Submit </button>
      </form>
    </div>
  );
};

export default Register;
