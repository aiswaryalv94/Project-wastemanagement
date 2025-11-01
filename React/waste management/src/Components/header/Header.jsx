import React from 'react'
import './Header.css'
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/')
  }
  const goToResidential = () => {
    navigate('/residential')
  }
  const goToNextPage = () => {
    navigate("/userlogin")
  };
  const goToReg = () => {
    navigate("/userregistration")
  };
  const goToContact = () => {
    navigate("/contact")
  };
  const goToSustain = () => {
    navigate("/sustain")
  }
  const goToCommercial = () => {
    navigate("/commercial")
  }


  return (
    <div className='full'>
      {/* <div className='backgroundpiclandingpage'></div> */}
      <nav className='headings'>
        <div className='brandpic'>
          <p className='brandname'>WM</p>
        </div>
        <div className="dropdown">
          <ul className="nav">
            <li><a className="drpdwnfont" onClick={goToHome}>Home</a></li>
            <li><a className="drpdwnfont" onClick={goToResidential} >Residential</a></li>
            <li><a className="drpdwnfont" onClick={goToCommercial}>Commercial</a></li>
            <li><a className="drpdwnfont" onClick={goToSustain}>Sustainability & Recycling</a></li>
            {/* <li><a className="drpdwnfont" >About Us</a></li> */}
            <li><a className="drpdwnfont active" onClick={goToContact}>Contact</a></li>


            <button className='loginbutton' onClick={goToNextPage}>Sign In</button>
            <button className='registration' onClick={goToReg}> Register </button>


          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
