import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function HeaderExtra() {
  return (
    <div>
       <div className='full'>
      <nav className='headings'>
        <div className='brandpic'>
          <Link to="/" className='brandname'>WM</Link>
        </div>

        <ul className="nav">
          <li><NavLink to="/" className="drpdwnfont" activeClassName="active">Home</NavLink></li>
          {/* <li><NavLink to="/residential" className="drpdwnfont" activeClassName="active">Residential</NavLink></li>
          <li><NavLink to="/commercial" className="drpdwnfont" activeClassName="active">Commercial</NavLink></li>
          <li><NavLink to="/sustain" className="drpdwnfont" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/contact" className="drpdwnfont" activeClassName="active">Contact</NavLink></li> */}
        </ul>
        </nav>
    </div>
    </div>
  )
}

export default HeaderExtra
