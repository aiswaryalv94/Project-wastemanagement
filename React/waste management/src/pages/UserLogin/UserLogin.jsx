import React, { useState } from "react";
import "./userLogin.css"; 
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
function UserLogin() {
   const [user,setUser]= useState({
    email:"",
    password:""
   })

   const navigate = useNavigate()
   
   const inputData = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3022/userlogin", user)
      .then((result) => {
        console.log(result.data);

        if (result.data.Message === "User Login Successfully") {
          alert("Login successful");
          navigate(`/userdashboard/${result.data.data._id}`);
        } else {
          alert(result.data.Message  || "Invalid Email or Password");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        alert("Network error! Please try again later.");
      }); 
  };
  
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Waste Management User Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={inputData}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={inputData}
              required
            />
          </div>
          {/* <Link to={'/userdashboard'}> */}
          <button type="submit" className="login-btn">
            Login
          </button>
          {/* </Link> */}
        </form>
        <p className="forgot-text">
          <Link to={'/userforgot'}>forgot password</Link>
        </p>

        <p className="user-sign-up">
           Don’t have an account? 
          <Link  to="/userregistration">Sign up</Link>
        </p>
        
      </div>
    </div>
  );
}

export default UserLogin;
