import React, { useEffect, useState } from 'react'
import './userProfile.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
function UserPrfile() {
    const {id} = useParams()
    const [data,setData] = useState([])
    const navigate = useNavigate()
    const fetchData = () => {
        axios.get(`http://localhost:3022/userviewone/${id}`)
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

    const DeleteUser = (id)=>{
      axios.post(`http://localhost:3022/userdelete/${id}`)
      .then((result)=>{
        console.log(result.data);
        navigate("/userregistration")
        
      })
      .catch((error)=>{
        console.log(error);
        
      })
    }
  return (
    
    <div>
      {
        <div className='user-profile-container'>
           <img className='image-style' src={`http://localhost:3022/uploads/${data?.image?.filename}`} alt="?" />
            <h1>Name:{data.name}</h1>
            <p>Email:{data.email}</p>
            <p>Phone:{data.phone}</p>
            {/* <p>{data.password}</p> */}
            <p>Address:{data.address}</p>
            <p>UserType:{data.userType}</p>
            <Link to={`/useredit/${id}`}>
            <button>Edit</button>
            </Link>
            <button onClick={()=>DeleteUser(`${id}`)}>Delete</button>
        </div>
      }
    </div>
  )
}

export default UserPrfile
