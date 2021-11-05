import React from 'react'
import Shop from './Shop'
import { Outlet } from 'react-router-dom'

function Shops({ shops }) {
  return (
    <div>
      <p>Click on a shop to go to</p>
      <nav>
        {shops.map(shop => <Shop key={shop.id} shop={shop}/>)}
      </nav>
      <Outlet />
    </div>
  )
}

export default Shops