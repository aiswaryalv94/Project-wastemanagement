import React, { useState } from "react";
import axios from "axios";

function CollecterForgot() {
  const [collecter, setCollecter] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCollecter({ ...collecter, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3022/forgotcollecterpass", {
        email: collecter.email,
        password: collecter.password, 
      })
      .then((result) => {
        if (result.data.message === "Spotted Wastecollecter") {
          alert(" Password updated successfully!");
        } else {
          alert(result.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Error resetting password. Please try again.");
      });
  };

  return (
    <div className="forgot-container">
      <div className="forgot-box">
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={collecter.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>New Password</label>
            <input
              type="password"
              name="password"
              value={collecter.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="reset-btn">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default CollecterForgot;
