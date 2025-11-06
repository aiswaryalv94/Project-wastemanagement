import React from 'react'
import './sidebar.css'
function Sidebar() {
  return (
    <div>
       <div className='admin-dashboard'>
       <h3 className='admin-panelheading'>Collecter Panel</h3>
       <hr/>
      <ul>
        <li className='dash-admin'>Pickup Requests</li>
        {/* <li className='dash-admin'>Completed Collections</li> */}
        <li className='dash-admin'>Payment status</li>
        <li className='dash-admin'>Profile</li>
        <li className='dash-admin'>Logout</li>
      </ul>
    </div>
    </div>
  )
}

export default Sidebar
