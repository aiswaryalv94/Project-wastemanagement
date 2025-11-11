import React, { useEffect, useState } from 'react'
import './userProfile.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function UserPrfile() {
    const {id} = useParams()
    const [data,setData] = useState(null)

    const fetchData = () => {
        axios.post(`http://localhost:3022/userviewone/${id}`)
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
        <div>
            <h1>{data.name}</h1>
            <p>{data.email}</p>
            <p>{data.phone}</p>
            <img className='image-style' src={`http://localhost:3022/uploads/${data?.image?.filename}`} alt="?" />
            <p>{data.password}</p>
            <p>{data.address}</p>
            <p>{data.userType}</p>
        </div>
      }
    </div>
  )
}

export default UserPrfile
