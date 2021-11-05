import React from 'react'
import { creationDate } from '../helpers'

function Item({ item }) {
  const { name, desc, pounds, cost, created_at, category } = item
  const {month, monthDay} = creationDate(created_at)
  return (
    <div>
      <h3>{`${month} ${monthDay}`} {name} <span>{category}</span></h3>
      <p>{`${cost} gp`}</p>
      <p>{`${pounds} lbs`}</p>
      <p>{desc}</p>
    </div>
  )
}

export default Item

//['Wed', 'Nov', '03', '2021', '08:52:45', 'GMT-0700', '(Mountain', 'Standard', 'Time)']