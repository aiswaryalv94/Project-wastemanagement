import React from 'react'
import './userDashbrd.css'
import { Link, useParams} from 'react-router-dom'

function UserDashbrd() {

 const {id} = useParams()

  return (
    <div>
      <h1 className='user-mainhead'>Waste Management</h1>
      <div className='user-container-form'>

        <div className='user-container'>
          <h2>Profile</h2>
          <Link to={`/userprofile/${id}`} className='profile-link'>
            Go To Your Profile
          </Link>
        </div>

        <div className='user-container'>
          <h2>Pickup Requests</h2>
          <Link to={"/pickuprequest"} className='profile-link'>
            Pickup Requests</Link>
        </div>

      </div>
    </div>
  )
}

export default UserDashbrd
