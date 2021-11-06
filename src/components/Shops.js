import React from 'react'
import Shop from './Shop'
import { Outlet } from 'react-router-dom'

function Shops({ shops }) {
  return (
    <div>
      <nav>
        {shops.map(shop => <Shop key={shop.id} shop={shop}/>)}
      </nav>
      <Outlet />
    </div>
  )
}

export default Shops