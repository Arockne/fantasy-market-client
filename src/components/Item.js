import React from 'react'
import { Link } from 'react-router-dom'
import { creationDate } from '../helpers'

function Item({ item, onDeletion, shop }) {
  const { name, desc, pounds, cost, created_at, category, id } = item
  const {month, monthDay} = creationDate(created_at)

  function handleDelete(e) {
    fetch(`http://localhost:9292/items/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(deletedItem => {
      shop.items = shop.items.filter(item => item.id !== deletedItem.id)
      onDeletion(shop)
    })
  }

  return (
    <div className='item'>
      <div>
        <p>{`${month} ${monthDay}`}</p>
      </div>
      <div className='item-name-container'>
        <h3>{name}</h3>
        <aside>{category}</aside>
      </div>
      <p>{`${cost} gp`}</p>
      <p>{`${pounds} lbs`}</p>
      <p>{desc}</p>
      <div className='item-buttons'>
        <Link to={`/item/edit/${id}`}>✏️</Link>
        <button
          onClick={handleDelete}
        >🗑️</button>
      </div>
    </div>
  )
}

export default Item
