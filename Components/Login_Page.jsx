import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import  App from '../App';
import "./loginPage.css"; 

import { useNavigate } from 'react-router';

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  
  localStorage.setItem("isLoggedIn", "false");
  const userName = "Sagar";
  const pass = "Radha";

  const checkCredential = (e) => {
    e.preventDefault();

    if (username === userName && password === pass) {
      console.log("successful");

      // redirect
    //   navigate('/admin');
        localStorage.setItem("isLoggedIn", "true");

        navigate('/home');

    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className='loginPage'>

      <form >

        <h1>Login</h1>

        <label>Enter Username</label>

        <input
          type="text"
          placeholder='Email, Name, Number'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Enter Password</label>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={checkCredential}>
          Login
        </button>

      </form>

     

    </div>
  );
}

export default Login;