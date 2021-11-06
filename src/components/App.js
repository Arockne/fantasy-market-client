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

  function handleAdditionalItem(item) {
    const shopMatch = shops.find(({id}) => id === item.shop_id);
    shopMatch.items = [ ...shopMatch.items, item ]
    const shopsWithUpdate = shops.map(shop => {
      if (shop.id === shopMatch.id) {
        return shopMatch
      }
      return shop
    })
    setShops(shopsWithUpdate)
  }

  function handleUpdateItem(updatedItem) {
    const shopMatch = shops.find(({id}) => id === updatedItem.shop_id)
    shopMatch.items = shopMatch.items.map(item => {
      if (updatedItem.id === item.id) {
        return updatedItem
      }
      return item
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
          <Route 
            path='item/new'
            element={<ItemForm shops={shops} handleItem={handleAdditionalItem}/>}
          />
          <Route
            path='/item/edit/:id'
            element={<ItemForm shops={shops} handleItem={handleUpdateItem}/>}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
