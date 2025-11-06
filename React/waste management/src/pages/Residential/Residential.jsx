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
          <p>Enter your details to check service availability in your area.</p>

          <div className="form-grid-residential">
            <input type="text" placeholder="First Name" name='firstname' value={data.firstname} onChange={inputHandler} />
            <input type="text" placeholder="Last Name" name='lastname' value={data.lastname} onChange={inputHandler} />
            <input type="text" placeholder="Phone Number" name='phonenumber' value={data.phonenumber} onChange={inputHandler} />
            <input type="email" placeholder="Email" name='email' value={data.email} onChange={inputHandler} />
            <input type="text" placeholder="Location" name='location' value={data.location} onChange={inputHandler} />
            <select name='housetype' value={data.housetype} onChange={inputHandler}>
              <option>-- Select Home Type --</option>
              <option value="Individual">Individual House</option>
              <option value="Apartment">Apartment / Flat</option>
              <option value="Gated">Gated Community</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="button-form-residential">
            <button className="button-submit-residential" type="submit">Check Availability</button>
          </div>

          <p className="paragraph-residential">
            By providing your phone number and email above and clicking Check Availability, 
            you agree to receive service updates and offers related to Residential Waste Management. 
            Consent is not a condition of purchase. You can unsubscribe anytime. 
            Read our Privacy Policy for more information.
          </p>

          <hr className="horizontal-line-residential" />

          <div className="form-contact-residential">
            <h1>Want to know more? <Link className="link-color-residential" to={'/contact'}>Contact</Link> us today.</h1>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Residential;
