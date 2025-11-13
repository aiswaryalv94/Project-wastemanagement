import React, { useState } from 'react'
import './userRegistration.css'
import imagereg from '../../assets/new.jpg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function UserRegistration() {

    const navigate = useNavigate()
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        image: "",
        password: "",
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

    function show(e) {
        e.preventDefault();
        console.log(data);
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("phone", data.phone);
        formData.append("image", data.image);
        formData.append("password", data.password);
        formData.append("address", data.address);
        formData.append("userType", data.userType);
        axios.post("http://localhost:3022/userregistration", formData)
            .then((result) => {
                console.log(result.data);
                alert(result.data.message);
                if (result.data.success) {
                    navigate("/userlogin")
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
        <div className="form-section-user">
            <h2>Waste Management Registration</h2>

            <div className="registration-block-user">
                
                <div className="two-blocks-user">
                    <div className="col-sm-6-user">
                        <img className="image-user" src={imagereg} alt="?" />
                    </div>

                    <div className="form-container-right-user">
                        <form className="form-container-user" onSubmit={show}>
                            <label>Full Name:</label>
                            <input type="text" name="name" value={data.name} onChange={inputData} required />

                            <label>Email:</label>
                            <input type="email" name="email" value={data.email} onChange={inputData} required />

                            <label>Phone:</label>
                            <input type="tel" name="phone" value={data.phone} onChange={inputData} required />

                            <label>Image:</label>
                            <input type="file" name="image" onChange={imageFile} required />

                            <label>Password:</label>
                            <input type="password" name="password" value={data.password} onChange={inputData} required />

                            <label>Address:</label>
                            <textarea rows="3" name="address" value={data.address} onChange={inputData} required></textarea>

                            <label>User Type:</label>
                            <select name="userType" value={data.userType} onChange={inputData} required>
                                <option value="">-- Select User Type --</option>
                                <option value="household">Household</option>
                                <option value="business">Business</option>
                                <option value="community">Community</option>
                                <option value="municipality">Municipality</option>
                            </select>

                            <button type="submit" className="submit-btn">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default UserRegistration
