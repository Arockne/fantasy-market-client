import React, {useEffect, useState} from 'react'
import Item from './Item'
import { useParams } from 'react-router-dom'

function Items() {
  const [shop, setShop] = useState({})
  const {id} = useParams()

  useEffect(() => {
    fetch(`http://localhost:9292/shop/${id}`)
    .then(resp => resp.json())
    .then(data => setShop(data))
  }, [id])

  if (!Object.keys(shop).length) return 'Loading...'

  return (
    <div>
      <h2>{shop.name}</h2>
      {shop.items.map(item => <Item key={item.id} item={item}/>)}
    </div>
  )
}

export default Items