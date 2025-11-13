import React, { useState } from "react";
import "./collecterLogin.css"; 
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
function CollecterLogin() {
  const [data, setData] = useState({
    email:"",
    password:""
  }

  );

   const navigate = useNavigate()
   const inputData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

  const handleSubmit = (e) => {
    e.preventDefault();
      axios.post("http://localhost:3022/collecterlogin", data)
      .then((result) => {
        console.log(result.data);

        if (result.data.Message === "Collecter Login Successfully") {
          alert("Login successful ✅");
          localStorage.setItem('collector', JSON.stringify(result.data.data));
          navigate(`/collecterdashboard/${result.data.data._id}`);
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
        <h2>Waste Collecter Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={inputData}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={inputData}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <Link to={'/collecterforgot'}>
         <p className="collecter-forgot">forgot password</p>
        </Link>
       
        <p className="signup-text">
          Don’t have an account? 
          <Link to="/collecterregistration">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default CollecterLogin;
