import React from 'react'
import './sidebar.css'
function Sidebar() {
  return (
    <div>
       <div className='collecter-dashboard'>
       <h3 className='collecter-panelheading'>Collecter Panel</h3>
       <hr/>
      <ul className='collecter-ul'>
        <li className='dash-collecter'>Profile</li>
        <li className='dash-collecter'>Payment status</li>
        <li className='dash-collecter'>Pickup Requests</li>
        <li className='dash-collecter'>Logout</li>
      </ul>
    </div>
    </div>
  )
}

export default Sidebar
