import React, { useState } from 'react'
import commercial from '../../assets/commercialone.webp'
import './commercial.css'
import { Link } from 'react-router-dom'
function Commercial() {
    const [data, setData] = useState({
        firstname:"",
        lastname:"",
        phonenumber:"",
        email:"",
        location:"",
        businesstype:""
    })
    const inputData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <div className='image-commercial'>
                <img className='image-commercial-class' src={commercial} alt='?' />
            </div>
            <div className="image-text">
                <h1>Commercial Trash & Recycling Service</h1><br />
                <p>Reliable, sustainable waste pickup service for small and medium businesses.</p><br />

            </div>
            <div className='image-form'>
                <form className='form-wrapper'>
                    <h1>Find business waste pickup service</h1>
                    <p>Enter business details to check availability.</p>
                    <div className="form-grid">
                        <input type="text" placeholder="First Name" name='firstname' value={data.firstname} onChange={inputData}/>
                        <input type="text" placeholder="Last Name" name='lastname' value={data.lastname} onChange={inputData}/>
                        <input type="text" placeholder="Phone Number" name='phonenumber' value={data.phonenumber}  onChange={inputData}/>
                        <input type='email' placeholder='Email' name='email' value={data.email} onChange={inputData}/>
                        <input type="text" placeholder="Location" name='location' value={data.location} onChange={inputData}/>
                        <select type="text" placeholder="Business Type" name='businesstype' value={data.businesstype} onChange={inputData}>
                            <option>-- Select User Type --</option>
                            <option value="Auto">Auto, Salon & Other Personal Services</option>
                            <option value="Construction">Construction & Demolition</option>
                            <option value="Distribution">Distribution & Warehousing</option>
                            <option value="Healthcare">Healthcare & Professional Services</option>
                            <option value="Manufacturing">Manufacturing & Industrial</option>
                            <option value="Offices">Offices & Building Management</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className='button-form'>
                        <button className='button-submit' type="submit">Check Availability</button>
                    </div>
                    
                    <p className='paragraph'>By providing your phone number and email address above and clicking Check Availability, you agree to receive emails and calls from WM related to WM’s products or services. Consent is not a condition of purchase. You may unsubscribe at any time. You also agree to WM’s Privacy Policy and the website Terms of Use.</p>
                    <hr className="horizontal-line"></hr>
                    <div className='form-contact'>
                        <h1>Want to know more? <Link className='link-color' to={'/contact'}>Contact</Link> WM today.</h1>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Commercial
