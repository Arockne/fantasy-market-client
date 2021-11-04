import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const activeStyle = {
    textDecoration: "underline",
    color: 'red'
  };

  return (
    <nav>
      <NavLink
        to='/'
        style={({ isActive }) => 
          isActive ? activeStyle : undefined
        }
      >Home</NavLink>
      <NavLink
        to='shops'
        style={({ isActive }) => 
          isActive ? activeStyle : undefined
        }
      >Shops</NavLink>
    </nav>
  )
}

export default Navbar