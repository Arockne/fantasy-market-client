import React from 'react'
import { Link } from 'react-router-dom'
import { creationDate } from '../helpers'

function Item({ item, onDeletion }) {
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
    .then(data => {
      onDeletion(data)
    })
  }

  return (
    <div>
      <h3>{`${month} ${monthDay}`} {name} <span>{category}</span></h3>
      <p>{`${cost} gp`}</p>
      <p>{`${pounds} lbs`}</p>
      <p>{desc}</p>
      <div>
        <Link to={`/item/edit/${id}`}>Edit</Link>
        <button
          onClick={handleDelete}
        >Delete</button>
      </div>
    </div>
  )
}

export default Item
