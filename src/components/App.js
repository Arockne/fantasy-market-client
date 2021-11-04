import React, {useEffect, useState} from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Search from './Search'
import Shops from './Shops'

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
      <Shops shops={shops}/>
    </div>
  );
}

export default App;
