import React from 'react'
import { Link } from 'react-router-dom'

function Shop({ shop }) {
  const {name} = shop
  return (
    <div>
      <h3>{name}</h3>
    </div>
  )
}

export default Shop