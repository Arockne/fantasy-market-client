import React, { useState } from 'react'

function ItemForm({ shops }) {
  const [form, setForm] = useState({
    name: '',
    shopID: '',
    cost: '',
    category: '',
    desc: ''
  })

  function handleFormChange(e) {
    const {name, value} = e.target
    
    const updatedForm = {...form, [name]: value}
    
    if (name === 'shopID') {
      const shop = shops.find(({id}) => id === parseInt(value, 10))
      updatedForm.category = shop.specialization
    }

    setForm(updatedForm)
  }
  
  return (
    <form>
      <label htmlFor='name'>Name: </label>
      <input 
        id='name'
        name='name'
        type='text'
        onChange={handleFormChange}
      />
      <label htmlFor='shop'>Shop: </label>
      <select 
        id='shop' 
        name='shopID'
        onChange={handleFormChange}
      >
        {shops.map(shop => {
         return <option key={shop.id} value={shop.id}>{shop.name} - {shop.specialization}</option> 
        })}
      </select>

      <label htmlFor='cost'>Cost in Gold: </label>
      <input
        id='cost' 
        type='number' 
        name='cost'
        onChange={handleFormChange}
      />

      <label htmlFor='desc'>Item Description: </label>
      <textarea 
        id='desc' 
        name='desc'
        onChange={handleFormChange}
      />
    </form>
  )
}

export default ItemForm