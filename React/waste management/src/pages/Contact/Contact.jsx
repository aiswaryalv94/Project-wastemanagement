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
            <label for="username">User name</label>
            <input type="text" name="username" id="username" placeholder="Your name.." /><br />
            <label for="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Password.." /><br />
            <label for="email">Email</label>
            <input type="text" id="email" name="email" placeholder="Email.." /><br />
            <input type="submit" value="submit" /><br />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
