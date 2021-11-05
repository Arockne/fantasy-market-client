import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Shops from './Shops'
import Items from './Items'

function App() {
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
              element={<Items />}
            />
          </Route>  
        </Route>
      </Routes>
    </div>
  );
}

export default App;
