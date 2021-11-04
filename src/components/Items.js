import React from 'react'
import Item from './Item'
import { useParams } from 'react-router-dom'

function Items({ shops }) {
  return (
    <div>
      {/*Multiple Item component*/}
      <Item />
    </div>
  )
}

export default Items