import React from 'react'
import './sidebarAdmin.css'
import { Link } from 'react-router-dom'
function SidebarAdmin() {
  return (
    <div className='admin-dashboard'>
      <h3 className='admin-panelheading'>Admin Panel</h3>
      <hr />
      <ul className='admin-ul'>

        <li className="dash-admin">
           <Link to={'/adminuserallview'}>Users</Link>
        </li>
        <li className="dash-admin">
          <Link to={'/adminviewallcollecters'}>Collectors</Link>
        </li>
        <li className="dash-admin">
          <Link to="/adminviewenquiry">Enquiries</Link>
        </li>
        <li className="dash-admin">
          <Link to="/admindashboard">Back to dashboard</Link>
        </li>
        <li className="dash-admin">
          <Link to="/">Logout</Link>
        </li>
      </ul>
    </div>
  )
}

export default SidebarAdmin