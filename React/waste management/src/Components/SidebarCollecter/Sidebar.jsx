import React from 'react'
import './sidebar.css'
import { Link, useParams } from 'react-router-dom'
function Sidebar() {
  const {id} = useParams()
  return (
    <div>
       <div className='collecter-dashboard'>
       <h3 className='collecter-panelheading'>Collecter Panel</h3>
       <hr/>
      <ul className='collecter-ul'>
        <li className="dash-collecter">
                  <Link to={`/collecterprofile/${id}`}>Profile</Link>
        </li>
        <li className="dash-collecter">
                  <Link to={`/collecterpayment/${id}`}>Payment Status</Link>
        </li>
        <li className="dash-collecter">
                  <Link to={`/collecterpickup/${id}`}>Pickup Requests</Link>
        </li>

        <li className="dash-collecter">
                  <Link to={`/collecterdashboard/${id}`}>Back to Dashboard</Link>
                </li>
        
        <li className="dash-collecter">
                  <Link to={`//${id}`}>Logout</Link>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default Sidebar
