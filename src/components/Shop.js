import React from 'react'
import { NavLink } from 'react-router-dom'

function Shop({ shop }) {
  const {name, id} = shop

  const activeStyle = {
    color: '#2a4129',
    fontSize: '1.5rem'
  }
  const notActiveStyle = {
    color: '#e3b6a4'
  }
  return <NavLink 
    to={`/shops/${id}`}
    style={({ isActive }) => 
    isActive ? activeStyle : notActiveStyle
    }
  >{name}</NavLink>
}

export default Shop