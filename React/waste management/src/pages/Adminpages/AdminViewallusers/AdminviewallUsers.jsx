import React from 'react'
import './adminviewallUsers.css'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
function AdminviewallUsers() {

    const [data, setData] = useState([])

    const fetchData = () => {
        axios.post("http://localhost:3022/userviewall")
            .then((result) => {
                console.log(result.data);
                setData(result.data.data)

            })
            .catch((error) => {
                console.log(error);

            })
    }
    useEffect(() => {
        fetchData()
    }, [])

     const deleteUser = (id) => {
        axios.post(`http://localhost:3022/userdelete/${id}`)
            .then((result) => {
                console.log(result.data);

            })
            .catch((error) => {
                console.log(error);

            })
    }


  return (
    <div>
       {
                data.map((items) => (
                    <div className='display-users' key={items._id}>
                        <h2 className='display-user-head'>Name:{items.name}</h2>
                        <h2 className='display-user-head'>Email:{items.email}</h2>
                        <h2 className='display-user-head'>Phone:{items.phone}</h2>
                        <h2 className='display-user-head'>Password:{items.password}</h2>
                        <h2 className='display-user-head'>Address{items.address}</h2>
                        <h2 className='display-user-head'>User Type:{items.userType}</h2>
                        <img className='image-style' src={`http://localhost:3022/uploads/${items?.image?.filename}`} alt="?" />
                        <button onClick={() => deleteUser(items._id)}>Delete</button>
                        <Link to={`/userprofile/${items._id}`}>
                            <button className='view-all-user-admin'>View</button>
                        </Link>

                    </div>

                ))
            }
    </div>
  )
}

export default AdminviewallUsers
