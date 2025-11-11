import React, { useEffect, useState } from 'react'
import './collecterEdit.css'
import imagereg from '../../../assets/waste2.jpg'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
function CollecterEdit() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        image: "",
        licenceno: "",
        location: "",
        password: "",
        confirmpassword: ""
    })

    const inputData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const imageData = (e) => {
        setData({ ...data, image: e.target.files[0] })
    }

    const fetchData = (e) => {
        axios.get(`http://localhost:3022/collecterviewone/${id}`)
            .then((result) => {
                console.log(result.data);
                if (result.data && result.data.data) {
                    setData(result.data.data);
                } else {
                    console.error("Invalid response format:", result.data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
    useEffect(() => {
        fetchData()
    }, [])

    function show(e) {
        e.preventDefault();
        if (data.password !== data.confirmpassword) {
            alert("Passwords do not match. Please re-enter correctly.");
            return;
        }

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("phone", data.phone);
        formData.append("image", data.image);
        formData.append("licenceno", data.licenceno);
        formData.append("location", data.location);
        formData.append("password", data.password);
        formData.append("confirmpassword", data.confirmpassword);
        axios.post(`http://localhost:3022/collecterupdate/${id}`, formData)
            .then((response) => {
                console.log(response.data);
                alert(response.data.message);
               if (response.data.message === "Collecter Details Updated Successfully") {
                    navigate(`/collecterprofile/${id}`);
}
            })
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Network error! Please try again later.");
                }
            });
    }
    return (
        <div className="form-section-coll">
            <h1>Waste Management Registration</h1>
            <div className='two-blocks-coll'>
                <div className="col-sm-6-coll">
                    <img className='image-coll' src={imagereg} alt='?' />
                </div>

                <div className='form-container-right-coll'>
                    <form className='form-container-coll' onSubmit={show}>
                        <div className='form-group-in-coll'>
                            <label>Full Name:</label>
                            <input type="text" name='name' value={data.name} onChange={inputData} required /><br />
                        </div>
                        <div className='form-group-in-coll'>
                            <label>Email:</label>
                            <input type="email" name='email' value={data.email} onChange={inputData} required /><br />
                        </div>
                        <div className='form-group-in-coll'>
                            <label>Phone:</label>
                            <input type="tel" name='phone' value={data.phone} onChange={inputData} required /><br />
                        </div>
                        <div className='form-group-in-coll'>
                            <label>Image:</label>
                            <input type="file" name='image' onChange={imageData} required /><br />
                        </div>
                        <div className='form-group-in-coll'>
                            <label>Licence Number:</label>
                            <input type="number" name='licenceno' value={data.licenceno} onChange={inputData} required /><br />
                        </div>
                        <div className='form-group-in-coll'>
                            <label>Location:</label>
                            <input name="location" value={data.location} onChange={inputData} required /><br />
                        </div>
                        <div className='form-group-in-coll'>
                            <label>Password:</label>
                            <input type="password" name='password' value={data.password} onChange={inputData} required /><br />
                        </div>
                        <div className='form-group-in-coll'>
                            <label>Confirm Password:</label>
                            <input type="password" name='confirmpassword' value={data.confirmpassword} onChange={inputData} required /><br />

                        </div>
                        <button type="submit" className="submit-btn-coll">Update</button>
                    </form>


                </div>

            </div>
        </div>
    )
}
export default CollecterEdit
