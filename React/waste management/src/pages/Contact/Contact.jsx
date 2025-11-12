import React, { useState } from 'react'
import './contact.css'
import axios from 'axios'
function Contact() {
  const [data,setData]= useState({
    name:"",
    email:"",
    phone:"",
    textarea:""
  })
const inputHandler = (e)=>{
  setData({...data,[e.target.name]:e.target.value})
}

  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post("http://localhost:3022/createenquiry", data)
    .then((result)=>{
      console.log(result);
      alert("Enquiry added successfully")
      
    })
    .catch((error)=>{
      console.log(error);
      
    })
  }
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
          <form onSubmit={handleSubmit}>
            <label for="name">Name</label>
            <input type="text" name="name" value={data.name} id="name" placeholder="Your name.." onChange={inputHandler}/><br />
            <label for="email">Email</label>
            <input type="email" name="email" value={data.email} id="email" placeholder="Email.." onChange={inputHandler} /><br />
            <label for="number">Phone number</label>
            <input type="number" id="phone" name="phone" value={data.phone} placeholder="Phone.." onChange={inputHandler}/><br />
            <label for="textarea">Textarea</label>
            <input type="text" name="textarea" value={data.textarea} id="textarea" placeholder="Type here.." onChange={inputHandler}/><br />
            <input type="submit" value="submit" /><br />
          </form>
        </div>
      </div>

      
    </div>
  )
}

export default Contact
