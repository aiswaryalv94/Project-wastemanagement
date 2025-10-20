import React, { useState } from 'react'
import './collecterRegistration.css'
import imagereg from '../../../assets/waste2.jpg'
function CollecterRegistration() {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        location: "",
        password: "",
        confirmpassword: ""
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
                        <button type="submit" className="submit-btn-coll">Register</button>
                    </form>
                 
                  
                </div>
                
            </div>
        </div>
    )
}
export default CollecterRegistration
