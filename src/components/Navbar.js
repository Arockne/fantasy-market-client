import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Navbar() {
  const activeStyle = {
    textDecoration: 'none',
    color: '#f15a08'
  };

  const notActiveStyle = {
    textDecoration: 'none',
    color: '#867d73'
  }

  return (
    <div>
      <nav className='header-nav'>
        <NavLink
          to='/'
          style={({ isActive }) => 
            isActive ? activeStyle : notActiveStyle
          }
        >Home</NavLink>
        <NavLink
          to='shops'
          style={({ isActive }) => 
            isActive ? activeStyle : notActiveStyle
          }
        >Shops</NavLink>
        <NavLink
          to='item/new'
          style={({ isActive }) => 
            isActive ? activeStyle : notActiveStyle
          }
        >Add Item</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default Navbar