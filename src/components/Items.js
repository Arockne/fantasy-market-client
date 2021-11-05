import React, {useEffect, useState} from 'react'
import Item from './Item'
import { useParams } from 'react-router-dom'

function Items({ shops }) {
  const {id} = useParams()
  const shop = shops.find(shop => {
    return shop.id === parseInt(id, 10)
  })

  return (
    <div>
      <h2>{shop.name}</h2>
      {shop.items.map(item => <Item key={item.id} item={item}/>)}
    </div>
  )
}

export default Items