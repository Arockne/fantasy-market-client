import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { 
  changeCamelKeysToSnake, 
  emptyItemFormFields,
  changeSnakeKeysToCamel
} from '../helpers.js'

function ItemForm({ shops, handleAdditionalItem }) {
  const [form, setForm] = useState(emptyItemFormFields())
  const {id} = useParams()
  const {pathname} = useLocation()
  const editingItem = pathname === `/item/edit/${id}`; 

  useEffect(() => {
    if (editingItem) {
      fetch(`http://localhost:9292/items/${id}`)
      .then(resp => resp.json())
      .then(data => {
        data = changeSnakeKeysToCamel(data)
        setForm(data)
      })
    } else {
      setForm(emptyItemFormFields())
    }
  }, [id, pathname, editingItem])

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

    const postForm = changeCamelKeysToSnake(form)
    fetch('http://localhost:9292/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postForm)
    })
    .then(resp => resp.json())
    .then(data => {
      handleAdditionalItem(data)
      setForm(emptyItemFormFields())
    })
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

      <label htmlFor='pounds'>Pounds: </label>
      <input 
        id='pounds'
        type='number'
        name='pounds'
        onChange={handleFormChange}
        value={form.pounds}
      />

      <label htmlFor='desc'>Item Description: </label>
      <textarea 
        id='desc' 
        name='desc'
        onChange={handleFormChange}
        value={form.desc}
      />
      <input type='submit' value={`${editingItem ? 'Edit' : 'Add'} Item`}/>
    </form>
  )
}

export default ItemForm