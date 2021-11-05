import React from 'react'

function ItemForm() {
  return (
    <form>
      <label>Name: </label>
      <input type='text'/>
      <label>Shop: </label>
      <select />
      <label>Cost: </label>
      <input type='number'/>

      <label>Item Category: </label>
      <select />
      <label>Item Description: </label>
      <textarea />
    </form>
  )
}

export default ItemForm