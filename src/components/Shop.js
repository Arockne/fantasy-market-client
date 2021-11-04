import React from 'react'
import Items from './Items'

function Shop({ shop }) {
  console.log(shop.name)
  return (
    <div>
      <p></p>
      <Items />
    </div>
  )
}

export default Shop