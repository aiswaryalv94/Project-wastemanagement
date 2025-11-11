import React from 'react'
import './sidebarUser.css'
import { Link, useParams } from 'react-router-dom'
function SidebarUser() {
  const {id} = useParams()
  return (
    
    <div>
       <div className='user-dashboard'>
       <h3 className='user-panelheading'>User Panel</h3>
       <hr/>
      <ul className='user-ul'>
         <li className="dash-user">
          <Link to={`/userprofile/${id}`}>Profile</Link>
        </li>
        <li className="dash-user">
          <Link to={`/paymentstatus/${id}`}>Payment Status</Link>
        </li>
        <li className="dash-user">
          <Link to={`/pickuprequests/${id}`}>Pickup Requests</Link>
        </li>
        <li className="dash-user">
          <Link to="/">Logout</Link>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default SidebarUser
