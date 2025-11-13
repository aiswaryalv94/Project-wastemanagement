import React, { useState } from 'react';
import './collecterDashboard.css';
import {Link, useParams} from 'react-router-dom'
function CollectorDashboard() {
 const {id} = useParams()
  return (
    <div className="dashboard-wrapper">
      <div className="sidebar">
        <h2>Waste Management</h2>
      </div>
      <div className="main-content">

        <div className='coll-container'>
          <h2>Profile</h2>
          <Link to={`/collecterprofile/${id}`} className='profile-link'>
            Go To Your Profile
          </Link>
        </div>

        <div className='coll-container'>
          <h2>Payment status</h2>
        </div>

        <div className='coll-container'>
          <h2>Pick up Manage</h2>
          <Link to={`/collecterpickup/${id}`} className='profile-link'>Pick up Manage</Link>
        </div>

     
      </div>
    </div >
  );
}

export default CollectorDashboard;
