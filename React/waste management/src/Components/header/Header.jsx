import React, { useState } from 'react';
import './Header.css';
import { NavLink, Link } from "react-router-dom";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='full'>
      <nav className='headings'>
        <div className='brandpic'>
          <Link to="/" className='brandname'>WM</Link>
        </div>

        <ul className="nav">
          <li><NavLink to="/" className="drpdwnfont" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/residential" className="drpdwnfont" activeClassName="active">Residential</NavLink></li>
          <li><NavLink to="/commercial" className="drpdwnfont" activeClassName="active">Commercial</NavLink></li>
          <li><NavLink to="/sustain" className="drpdwnfont" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/contact" className="drpdwnfont" activeClassName="active">Contact</NavLink></li>
        </ul>


        <div className="login-dropdown">
          <button onClick={toggleDropdown} className="signin-btn">
            Sign In
          </button>

          {isDropdownOpen && (
            <div className="dropdown-content">
              <Link to="/userlogin" onClick={() => setIsDropdownOpen(false)}>
                User Login
              </Link>
              <Link to="/collecterlogin" onClick={() => setIsDropdownOpen(false)}>
                Collector Login
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;