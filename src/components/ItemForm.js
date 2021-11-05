import React, { useState } from 'react'

function ItemForm({ shops }) {
  const [form, setForm] = useState({
    name: '',
    shopID: '',
    cost: '',
    category: '',
    desc: ''
  })

  return (
    <form>
      <label htmlFor='name'>Name: </label>
      <input 
        id='name'
        name='name'
        type='text'
      />
      <label htmlFor='shop'>Shop: </label>
      <select id='shop' name='shopID'>
        {shops.map(shop => {
         return <option key={shop.id} value={shop.id}>{shop.name} - {shop.specialization}</option> 
        })}
      </select>

      <label htmlFor='cost'>Cost: </label>
      <input
        id='cost' 
        type='number' 
        name='cost'
      />

      <label htmlFor='desc'>Item Description: </label>
      <textarea id='desc' name='desc'/>
    </form>
  )
}

export default ItemForm