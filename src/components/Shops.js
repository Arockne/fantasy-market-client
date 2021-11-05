import React, {useState, useEffect} from 'react'
import Shop from './Shop'
import { Outlet } from 'react-router-dom'

function Shops() {
  const [shops, setShops] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/shops')
    .then(resp => resp.json())
    .then(data => setShops(data))
  },[])

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