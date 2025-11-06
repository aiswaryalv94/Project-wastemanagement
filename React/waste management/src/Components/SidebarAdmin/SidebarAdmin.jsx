import React from 'react'
import './sidebarAdmin.css'
function SidebarAdmin() {
  return (
    <div className='admin-dashboard'>
       <h3 className='admin-panelheading'>Admin Panel</h3>
       <hr/>
      <ul>
        <li className='dash-admin'>Users</li>
        <li className='dash-admin'>Collectors</li>
        <li className='dash-admin'>Requests</li>
         <li className='dash-admin'>Logout</li>
      </ul>
    </div>
  )
}

export default SidebarAdmin