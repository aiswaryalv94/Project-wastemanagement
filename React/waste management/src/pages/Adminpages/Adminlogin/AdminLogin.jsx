import React, { useState } from 'react'
import './adminLogin.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function AdminLogin() {
  const navigate = useNavigate()

  const [admin, setAdmin] = useState({
    email: "",
    password: ""
  });


  const inputData = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3022/adminlogin", admin)
      .then((response) => {
        if (response.data.Message === "Admin Login Successfully") {
          alert("Login successful ✅");
          navigate("/admindashboard");
        } else {
          alert(response.data.Message || "Invalid Email or Password");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        alert("Network error! Please try again later.");
      });
  };

  return (
    <div>
      <div className="login-container">
        <div className="login-box">
          <h2>Waste Management Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name='email'
                value={admin.email}
                onChange={inputData}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name='password'
                value={admin.password}
                onChange={inputData}
                required
              />
            </div>
            <button type="submit" className="login-btn">Login</button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
