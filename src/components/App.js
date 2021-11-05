import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Shops from './Shops'
import Items from './Items'

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route 
          path='/'
          element={"Hello World!"}
        />
        <Route 
          path='shops'
          element={<Shops />} 
        > 
          <Route
            path=':id'
            element={<Items />}
          />
        </Route>  
      </Routes>
    </div>
  );
}

export default App;
