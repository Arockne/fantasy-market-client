import React, { useState } from 'react'

function ItemForm({ shops }) {
  const [form, setForm] = useState({
    name: '',
    shopId: '',
    cost: '',
    category: '',
    desc: ''
  })

  function handleFormChange(e) {
    const {name, value} = e.target
    const updatedForm = {...form, [name]: value}
    if (name === 'shopId') {
      const shop = shops.find(({id}) => id === parseInt(value, 10))
      updatedForm.category = shop.specialization
    }
    setForm(updatedForm)
  }

  function handleSubmit(e) {
    e.preventDefault()
    // fetch('http://localhost:9292/items', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    //   body: JSON.stringify
    // })
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name: </label>
      <input 
        id='name'
        name='name'
        type='text'
        onChange={handleFormChange}
        value={form.name}
      />
      <label htmlFor='shop'>Shop: </label>
      <select 
        id='shop' 
        name='shopId'
        onChange={handleFormChange}
        value={form.shopId}
      >
        {shops.map(shop => {
          return <option 
            key={shop.id} 
            value={shop.id}
          >{shop.name} - {shop.specialization}</option> 
        })}
      </select>

      <label htmlFor='cost'>Cost in Gold: </label>
      <input
        id='cost' 
        type='number' 
        name='cost'
        onChange={handleFormChange}
        value={form.cost}
      />

      <label htmlFor='desc'>Item Description: </label>
      <textarea 
        id='desc' 
        name='desc'
        onChange={handleFormChange}
        value={form.desc}
      />
      <input type='submit' value='Add Item'/>
    </form>
  )
}

export default ItemForm