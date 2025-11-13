import React, { useEffect, useState } from "react";
import axios from "axios";
import "./adminDashboard.css";
import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div>
      <h1 className="headingone">Waste Management</h1>
      <div className="admin-container-form">
        <div className="admin-container">
          <h2>Total users</h2>
          <Link to={'/adminuserallview'}>
            <button className="total-user-viewbtn">View</button></Link>
        </div>

        <div className="admin-container">
          <h2>Total collecters</h2>
          <Link to={'/adminviewallcollecters'}>
            <button className="total-collecter-viewbtn">View</button></Link>
        </div>
        <div className="admin-container">
          <h2 className="enqryh2">Enquiries</h2>
          <Link className="link-enqry" to="/adminviewenquiry">Enquiries</Link>
        </div>
      </div>
    </div>




  )
}
export default AdminDashboard;
