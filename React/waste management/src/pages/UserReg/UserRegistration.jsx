import React, { useState } from 'react'
import './userRegistration.css'
import imagereg from '../../assets/waste2.jpg'
function UserRegistration() {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        address: "",
        userType: "",
        wasteType: "",
        frequency: "",
        checkbox: "",
    })

    const inputData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    function show(e) {
        e.preventDefault();
        console.log(data);
        alert("✅ Registration successful!");
    }
    return (
        <div className="form-section">
            <h2>Waste Management Registration</h2>
            <div className='two-blocks'>
            <div className="col-sm-6">
                <img className='image' src={imagereg} alt='?' />

                <div className='subhead'>
                <h4>Log in to your My WM account to:</h4>
                <ul className='ul-points'>
                    <li>Pay bills</li>
                    <li>Access pickup and holiday schedules</li>
                    <li>Save a payment method</li>
                    <li>Set notification preferences</li>
                </ul>
                </div>
            </div>

            <div className='form-container-right'>
            <form className='form-container' onSubmit={show}>

                <label>Full Name:</label>
                <input type="text" name='name' value={data.name} onChange={inputData} required /><br />

                <label>Email:</label>
                <input type="email" name='email' value={data.email} onChange={inputData} required /><br />

                <label>Phone:</label>
                <input type="tel" name='phone' value={data.phone} onChange={inputData} required /><br />

                <label>Password:</label>
                <input type="password" name='password' value={data.password} onChange={inputData} required /><br />

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

                <label>Preferred Waste Type:</label>
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
                    <input type="checkbox" name="checkbox" value="agreed" onChange={inputData} required />
                    <label className='checkbox-label'>I agree to the Terms & Conditions</label>
                </div>

                <button type="submit" className="submit-btn">Register</button>
            </form>
            </div>
            </div>
        </div>
    )
}
export default UserRegistration
