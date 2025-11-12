import React, { useState } from "react";
import axios from "axios";
import "./userForgot.css";

function UserForgot() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3022/forgotpassword", {
      email: user.email,
      password: user.password,
    })
      .then((result) => {
        if (result.data.message === "Spotted User") {
          alert(" Password updated successfully!");
        } else {
          alert(res.data.message);
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
          <div className="form-group-forgot">
            <label className="forgot-label">Email</label>
            <input
              className="input-forgot"
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group-forgot">
            <label className="forgot-label">New Password</label>
            <input
              className="input-forgot"
              type="password"
              name="password"
              value={user.password}
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

export default UserForgot;
