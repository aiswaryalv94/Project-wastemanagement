import React, { useState } from 'react';
import './residential.css';
import residential from '../../assets/residential.webp';
import { Link } from 'react-router-dom';

function Residential() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
    location: "",
    housetype: ""
  });

  const inputHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="image-residential">
        <img className="image-residential-class" src={residential} alt="Residential Waste" />
      </div>
      <div className="image-text-residential">
        <h1>Residential Trash & Recycling Services</h1><br />
        <p>Reliable, eco-friendly waste solutions for homes, apartments, and communities.</p><br />
      </div>

      <div className="image-form-residential">
        <form className="form-wrapper-residential">
          <h1>Find Residential Pickup Services</h1>
         
          <p>Discover how our residential waste collection keeps your community clean and sustainable.</p>

          <div className="info-grid-residential">
            <div className="info-card">
              <h3>🏠 Reliable Doorstep Collection</h3>
              <p>We provide timely and hassle-free pickup from individual homes, apartments, and gated communities.</p>
            </div>

            <div className="info-card">
              <h3>♻️ Eco-Friendly Recycling</h3>
              <p>Your waste is sorted, processed, and recycled responsibly to reduce landfill impact and support a greener planet.</p>
            </div>

            <div className="info-card">
              <h3>🕓 Flexible Scheduling</h3>
              <p>Choose from daily, weekly, or customized collection plans that best fit your household needs.</p>
            </div>

            <div className="info-card">
              <h3>💬 Customer Support</h3>
              <p>Our team is always ready to assist you with queries or service requests — ensuring a smooth experience.</p>
            </div>
          </div>

          <div className="button-form-residential">
            <Link to={'/contact'} className="button-submit-residential">Get In Touch</Link>
          </div>
          <p className="paragraph-residential">
            By providing your phone number and email above and clicking Check Availability,
            you agree to receive service updates and offers related to Residential Waste Management.
            Consent is not a condition of purchase. You can unsubscribe anytime.
            Read our Privacy Policy for more information.
          </p>

          {/* <hr className="horizontal-line-residential" />

          <div className="form-contact-residential">
            <h1>Want to know more? <Link className="link-color-residential" to={'/contact'}>Contact</Link> us today.</h1>
          </div> */}
        </form>
      </div>





    </div>
  );
}

export default Residential;
