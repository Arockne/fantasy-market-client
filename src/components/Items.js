import React from 'react'
import Item from './Item'
import { useParams } from 'react-router-dom'

function Items({ shops }) {
  const {name, id} = useParams()
  const currentShop = shops.find( shop => shop.id === Number(id))
  return (
    <div>
      {/*Multiple Item component*/}
      <Item />
    </div>
  )
}

export default Items