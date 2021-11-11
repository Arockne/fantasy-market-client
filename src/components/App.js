import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './Main'
import Shops from './Shops'
import Items from './Items'
import ItemForm from './ItemForm'

function App() {
  const [shops, setShops] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/shops/items')
    .then(resp => resp.json())
    .then(data => setShops(data))
  }, [])

  if (!shops.length) {
    return <p>Loading...</p>
  }

  function handleShopUpdate(shopWithUpdate) {
    const shopsWithUpdate = shops.map(shop => {
      if (shop.id === shopWithUpdate.id) {
        return shopWithUpdate;
      }
      return shop;
    })
    setShops(shopsWithUpdate)
  }

  return (
    <div className='app'>
      <Routes>
        <Route
          path='/'
          element={<Main />}
        >
          <Route 
            path='shops'
            element={<Shops shops={shops}/>} 
          > 
            <Route 
              index
              element={
                <main>
                  <p>Select a shop</p>
                </main>
              }
            />
            <Route
              path=':id'
              element={<Items shops={shops} handleShopUpdate={handleShopUpdate}/>}
            />
          </Route>  
          <Route 
            path='item/new'
            element={<ItemForm shops={shops} handleShopUpdate={handleShopUpdate}/>}
          />
          <Route
            path='/item/edit/:id'
            element={<ItemForm shops={shops} handleShopUpdate={handleShopUpdate}/>}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
