import React from 'react'
import './adminviewallCollecters.css'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
function AdminviewallCollecters() {

    const [data, setData] = useState([])

    const fetchData = () => {
        axios.post("http://localhost:3022/collecterviewall")
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

    const deactivateCollecter = (id) => {
        axios.post(`http://localhost:3022/collecterdeactivate/${id}`)
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
                        <h2>Name:{items.name}</h2>
                        <h2>Email:{items.email}</h2>
                        <h2>Phone:{items.phone}</h2>
                        <h2>Location:{items.location}</h2>

                        <img className='image-style' src={`http://localhost:3022/uploads/${items?.image?.filename}`} alt="?" />

                        <button onClick={() => deactivateCollecter(items._id)}>
                            {items.isActive ? 'Deactivate' : 'Activate'}
                        </button>

                        <Link to={`/userprofile/${items._id}`}>
                            <button>View</button>
                        </Link>

                    </div>

                ))
            }
        </div>
    )
}

export default AdminviewallCollecters
