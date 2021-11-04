import React, {useEffect, useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Navbar from './Navbar'
import Search from './Search'
import Shops from './Shops'
import Items from './Items'

function App() {
  const [shops, setShops] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/shops/items')
    .then(resp => resp.json())
    .then(data => setShops(data))
  },[])

  console.log(shops)

  return (
    <div className="App">
      <Header />
      <Navbar />
      <Search />
      <Routes>
        <Route 
          path='/'
          element={"Hello World!"}
        />
        <Route 
          path="shops"
          element={<Shops shops={shops}/>} 
        />  
      </Routes>
    </div>
  );
}

export default App;
