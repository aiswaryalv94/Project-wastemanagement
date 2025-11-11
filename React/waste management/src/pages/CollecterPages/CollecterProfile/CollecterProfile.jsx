import React, { useEffect, useState } from 'react'
import './collecterProfile.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
function CollecterProfile() {
    const {id} = useParams()
    const [data,setData] = useState([])
    const navigate = useNavigate()
    const fetchData = () => {
        axios.get(`http://localhost:3022/collecterviewone/${id}`)
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


  return (
    
    <div>
      {
        <div className='collecter-profile-container'>
           <img className='image-style' src={`http://localhost:3022/uploads/${data?.image?.filename}`} alt="?" />
            <h1>Name:{data.name}</h1>
            <p>Email:{data.email}</p>
            <p>Phone:{data.phone}</p>
            <p>Location:{data.location}</p>
            
            <Link to={`/collecteredit/${id}`}>
            <button>Edit</button>
            </Link>
           
        </div>
      }
    </div>
  )
}

export default CollecterProfile
