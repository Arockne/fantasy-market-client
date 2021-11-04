import React from 'react'
import Shop from './Shop'

function Shops({ shops }) {
  return (
    <div>
      <p>Click on a shop to go to</p>
      {shops.map(shop => <Shop key={shop.id} shop={shop}/>)}
    </div>
  )
}

export default Shops