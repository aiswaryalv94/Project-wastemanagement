import React, { useState } from 'react';
import './collecterDashboard.css';

function CollectorDashboard() {
  const [page, setPage] = useState('Dashboard');

  return (
    <div className="dashboard-wrapper">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Waste Management</h2>
        <ul>
          <li onClick={() => setPage('Dashboard')}>Dashboard</li>
          <li onClick={() => setPage('Pickup Requests')}>Pickup Requests</li>
          <li onClick={() => setPage('Completed')}>Completed Collections</li>
          <li onClick={() => setPage('Profile')}>Profile</li>
          <li onClick={() => setPage('Logout')}>Logout</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1>{page}</h1>
        {page === 'Dashboard' && <p>Welcome! Overview of your tasks.</p>}
        {page === 'Pickup Requests' && <p>List of pending pickups.</p>}
        {page === 'Completed' && <p>Completed collections are shown here.</p>}
        {page === 'Profile' && <p>Edit your personal information.</p>}
        {page === 'Logout' && <p>You have been logged out.</p>}
      </div>
    </div>
  );
}

export default CollectorDashboard;
