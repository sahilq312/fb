import React, { useState } from "react";
//import { Navigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const response = fetch("http://localhost:5000/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(JSON.stringify(response))
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          placeholder="email@email.com"
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

export default Login;
