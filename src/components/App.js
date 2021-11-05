import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Shops from './Shops'
import Items from './Items'

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

  return (
    <div className='app'>
      <Routes>
        <Route
          path='/'
          element={<Header />}
        >
          <Route 
            path='shops'
            element={<Shops />} 
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
              element={<Items shops={shops} />}
            />
          </Route>  
        </Route>
      </Routes>
    </div>
  );
}

export default App;
