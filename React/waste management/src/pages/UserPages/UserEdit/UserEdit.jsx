import React, { useState } from 'react'
import './userEdit.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
function UserEdit() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        image: "",
        address: "",
        userType: "",
        // wasteType: "",
        // frequency: "",
        // checkbox: "",
    })

    const inputData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const imageFile = (e) => {
        setData({ ...data, image: e.target.files[0] })
    }
        
    const fetchData= (e)=>{
      axios.get(`http://localhost:3022/userviewone/${id}`)
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
    useEffect (()=>{
        fetchData()
    },[])

    function show(e) {
        e.preventDefault();
        console.log(data);
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("phone", data.phone);
        formData.append("image", data.image);
        formData.append("address", data.address);
        formData.append("userType", data.userType);
        axios.post(`http://localhost:3022/userupdate/${id}`, formData)
            .then((result) => {
                console.log(result.data);
                alert(result.data.message);
                if (result.data.success) {
                    navigate(`/userprofile/${id}`)
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
        <div className="form-section">
            <h2>Waste Management Registration</h2>
            <div className='two-blocks'>

                <div className='form-container-right'>
                    <form className='form-container' onSubmit={show}>

                        <label>Full Name:</label>
                        <input type="text" name='name' value={data.name} onChange={inputData} required /><br />

                        <label>Email:</label>
                        <input type="email" name='email' value={data.email} onChange={inputData} required /><br />

                        <label>Phone:</label>
                        <input type="tel" name='phone' value={data.phone} onChange={inputData} required /><br />

                        <label>Image:</label>
                        <input type="file" name='image' onChange={imageFile} required /><br />

                        {/* <label>Password:</label> */}
                        {/* <input type="password" name='password' value={data.password} onChange={inputData} required /><br /> */}

                        <label>Address:</label>
                        <textarea rows="3" name="address" value={data.address} onChange={inputData} required></textarea><br />

                        <label>User Type:</label>
                        <select name="userType" value={data.userType} onChange={inputData} required>
                            <option value="">-- Select User Type --</option>
                            <option value="household">Household</option>
                            <option value="business">Business</option>
                            <option value="community">Community</option>
                            <option value="municipality">Municipality</option>
                        </select>

                        {/* <label>Preferred Waste Type:</label>
                        <select name="wasteType" value={data.wasteType} onChange={inputData} required>
                            <option value="">-- Select Waste Type --</option>
                            <option value="plastic">Plastic</option>
                            <option value="organic">Organic</option>
                            <option value="ewaste">E-Waste</option>
                            <option value="metal">Metal</option>
                            <option value="paper">Paper</option>
                            <option value="mixed">Mixed</option>
                        </select>

                        <label>Pickup Frequency:</label>
                        <select name="frequency" value={data.frequency} onChange={inputData} required>
                            <option value="">-- Select Frequency --</option>
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                        </select>

                        <div className="checkbox">
                            <input type="checkbox" name="checkbox" value="agreed" onChange={(e) => setData({ ...data, checkbox: e.target.checked })} required />
                            <label className='checkbox-label'>I agree to the Terms & Conditions</label>
                        </div> */}

                        <button type="submit" className="submit-btn">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default UserEdit
