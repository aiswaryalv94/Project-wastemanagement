import React, { useEffect, useState } from "react";
import axios from "axios";
import "./adminDashboard.css";

function AdminDashboard() {
  const [data, setData] = useState({
    users: 0,
    collectors: 0,
    payments: 0,
    pendingPayments: 0,
    pendingRequests: 0,
    completedRequests: 0,
    joinRequestsPending: 0,
    joinRequestsApproved: 0,
    userPickupInitiated: 0,
    userPickupCompleted: 0,
  });

  useEffect(() => {
    // Replace with your backend API endpoint
    axios
      .get("http://localhost:3025/admin/overview")
      .then((res) => setData(res.data))
      .catch((err) => console.log("Error fetching admin data:", err));
  }, []);

  return (
    <div className="admin-dashboard">
      <h1 className="admin-title">Admin Dashboard</h1>

      {/* Top Summary Section */}
      <div className="card-grid">
        <Card title="Total Users" value={data.users} color="blue" />
        <Card title="Total Collectors" value={data.collectors} color="green" />
        <Card title="Total Payments" value={data.payments} color="purple" />
        <Card title="Pending Payments" value={data.pendingPayments} color="yellow" />
      </div>

      {/* Request Summary */}
      <div className="card-grid">
        <Card title="Pending Requests" value={data.pendingRequests} color="red" />
        <Card title="Completed Requests" value={data.completedRequests} color="emerald" />
        <Card title="Collector Join Pending" value={data.joinRequestsPending} color="orange" />
        <Card title="Collector Join Approved" value={data.joinRequestsApproved} color="teal" />
      </div>

      {/* Pickup Status */}
      <div className="card-grid small-grid">
        <Card title="User Pickup Initiated" value={data.userPickupInitiated} color="indigo" />
        <Card title="User Pickup Completed" value={data.userPickupCompleted} color="pink" />
      </div>
    </div>
  );
}

const Card = ({ title, value, color }) => (
  <div className={`card card-${color}`}>
    <h2 className="card-title">{title}</h2>
    <p className="card-value">{value}</p>
  </div>
);

export default AdminDashboard;
