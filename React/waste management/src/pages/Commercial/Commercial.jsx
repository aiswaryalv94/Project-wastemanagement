import React, { useState } from 'react'
import commercial from '../../assets/commercialone.webp'
import './commercial.css'
import { Link } from 'react-router-dom'
function Commercial() {
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        phonenumber: "",
        email: "",
        location: "",
        businesstype: ""
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
                    <h1>Commercial Waste Management Solutions</h1>
                    <p>Empowering businesses with reliable, sustainable, and cost-effective waste solutions.</p>

                    <div className="info-grid-commercial">
                        <div className="info-card-commercial">
                            <h3>🏢 Customized Pickup Plans</h3>
                            <p>We provide tailored waste pickup schedules that align with your business hours and operational needs.</p>
                        </div>

                        <div className="info-card-commercial">
                            <h3>♻️ Sustainable Recycling</h3>
                            <p>Our team ensures your recyclable materials are processed responsibly — reducing environmental footprint.</p>
                        </div>

                        <div className="info-card-commercial">
                            <h3>🚛 Bulk Waste Handling</h3>
                            <p>From construction debris to industrial byproducts, we manage large-scale waste efficiently and safely.</p>
                        </div>

                        <div className="info-card-commercial">
                            <h3>💼 Business Support</h3>
                            <p>Dedicated customer service to address your requests, updates, and feedback — ensuring smooth operations.</p>
                        </div>
                    </div>

                    <div className='button-form'>
                        <Link to={'/contact'} className='button-submit'>Contact Our Team</Link>
                    </div>

                    <p className='paragraph'>
                        Join thousands of businesses choosing eco-friendly waste management.
                        Together, let’s build a cleaner, greener future.
                    </p>

                
                </form>

            </div>


        </div>
    )
}

export default Commercial
