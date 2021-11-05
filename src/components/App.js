import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
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

  function onDeletion(deletedItem) {
    const shopMatch = shops.find(({id}) => id === deletedItem.shop_id);
    shopMatch.items = shopMatch.items.filter(({id}) => {
      return id !== deletedItem.id
    })
    const shopsWithUpdate = shops.map(shop => {
      if (shop.id === shopMatch.id) {
        return shopMatch
      }
      return shop
    })
    setShops(shopsWithUpdate)
  }

  return (
    <div className='app'>
      <Routes>
        <Route
          path='/'
          element={<Header />}
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
              element={<Items shops={shops} onDeletion={onDeletion}/>}
            />
          </Route>  
        </Route>
        <Route 
          path='item/new'
          element={<ItemForm />}
        />
      </Routes>
    </div>
  );
}

export default App;
