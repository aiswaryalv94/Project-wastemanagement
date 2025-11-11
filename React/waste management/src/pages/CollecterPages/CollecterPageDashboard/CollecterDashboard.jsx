import React, { useState } from 'react';
import './collecterDashboard.css';
import {Link} from 'react-router-dom'
function CollectorDashboard() {
 
  return (
    <div className="dashboard-wrapper">
      <div className="sidebar">
        <h2>Waste Management</h2>
      </div>
      <div className="main-content">

        <div className='coll-container'>
          <h2>Profile</h2>
          <Link to={'/collecterprofile'} className='profile-link'>
            Go To Your Profile
          </Link>
        </div>

        <div className='coll-container'>
          <h2>Payment status</h2>
        </div>

        <div className='coll-container'>
          <h2>Pick up request</h2>
        </div>

     
      </div>
    </div >
  );
}

export default CollectorDashboard;
