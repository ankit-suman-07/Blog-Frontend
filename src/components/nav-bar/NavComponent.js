import React from 'react'
import { NavLink } from 'react-router-dom';

import "./NavComponent.css"

const NavComponent = () => {
  return (
    <div className='nav-style' >
        <div className='logo' >
            blog<span className='dot' >.</span>
        </div>
        <div>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
      >
        Contact
      </NavLink>
      </div>
    </div>
  )
}

export default NavComponent
