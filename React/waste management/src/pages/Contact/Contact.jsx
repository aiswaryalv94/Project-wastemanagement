import React from 'react'
import './contact.css'
function Contact() {
  return (
    <div>

      
      <div className="contact">

      <h1 className="cnt">Contact Us</h1>
      
        <div className="address">
          <p className="we">We'd love to hear from you.</p>
          <label for="button"></label>
          <input type="button" value="Call Us 080-4275-4444" /><br />
        </div>

        <div className="loginpage">
          <form>
            <label for="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Your name.." /><br />
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Email.." /><br />
            <label for="number">Phone number</label>
            <input type="number" id="phone" name="phone" placeholder="Phone.." /><br />
            <input type="submit" value="submit" /><br />
          </form>
        </div>
      </div>

      
    </div>
  )
}

export default Contact
