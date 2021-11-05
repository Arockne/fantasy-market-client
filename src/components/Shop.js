import React from 'react'
import { Link } from 'react-router-dom'

function Shop({ shop }) {
  const {name, id} = shop
  return <Link to={`/shops/${id}`}>{name}</Link>
}

export default Shop