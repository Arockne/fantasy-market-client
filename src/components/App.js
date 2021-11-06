import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './Main'
import Shops from './Shops'
import Items from './Items'
import ItemForm from './ItemForm'
import { updateMatchingId, findShop } from '../helpers'

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
    const shopMatch = findShop(shops, deletedItem);
    shopMatch.items = shopMatch.items.filter(({id}) => {
      return id !== deletedItem.id
    })
    const shopsWithUpdate = shops.map(shop => updateMatchingId(shop, deletedItem))
    setShops(shopsWithUpdate)
  }

  function handleAdditionalItem(item) {
    const shopMatch = findShop(shops, item);
    shopMatch.items = [ ...shopMatch.items, item ]
    const shopsWithUpdate = shops.map(shop => updateMatchingId(shop, shopMatch))
    setShops(shopsWithUpdate)
  }

  function handleUpdateItem(updatedItem) {
    const shopMatch = findShop(shops, updatedItem)
    shopMatch.items = shopMatch.items.map(item => updateMatchingId(item, updatedItem))
    const shopsWithUpdate = shops.map(shop => updateMatchingId(shop, shopMatch))
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
