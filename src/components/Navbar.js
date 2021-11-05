import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Navbar() {
  const activeStyle = {
    textDecoration: "underline",
    color: 'red'
  };

  return (
    <div>
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
        <NavLink
          to='item/new'
          style={({ isActive }) => 
            isActive ? activeStyle : undefined
          }
        >Add Item</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default Navbar