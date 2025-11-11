import React, { useEffect, useState } from "react";
import axios from "axios";
import "./adminDashboard.css";

function AdminDashboard() {
  return (
    <div>
      <h1 className="headingone">Waste Management</h1>
      <div className="admin-container-form">
      <div className="admin-container"><h2>Total users</h2></div>
      <div className="admin-container"><h2>Total collecters</h2></div>
      <div className="admin-container"><h2>Requests</h2></div>
      </div>
    </div>




  )
}
export default AdminDashboard;
