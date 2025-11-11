import React from 'react'
import './sidebarUser.css'
function SidebarUser() {
  return (
    <div>
       <div className='user-dashboard'>
       <h3 className='user-panelheading'>User Panel</h3>
       <hr/>
      <ul className='user-ul'>
        <li className='dash-user'>Profile</li>
        <li className='dash-user'>Payment status</li>
        <li className='dash-user'>Pickup Requests</li>
        <li className='dash-user'>Logout</li>
      </ul>
    </div>
    </div>
  )
}

export default SidebarUser
