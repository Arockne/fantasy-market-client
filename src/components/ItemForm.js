import React, { useState } from 'react'

function ItemForm() {
  const [form, setForm] = useState({
    name: '',
    shopID: '',
    cost: '',
    category: '',
    desc: ''
  })

  return (
    <form>
      <label for='name'>Name: </label>
      <input 
        id='name'
        name='name'
        type='text'
      />
      <label for='shop'>Shop: </label>
      <select id='shop' name='shopID'/>

      <label for='cost'>Cost: </label>
      <input id='cost' type='number'/>

      <label for='category'>Item Category: </label>
      <select id='category' name='category'/>

      <label for='desc'>Item Description: </label>
      <textarea id='desc' name='desc'/>
    </form>
  )
}

export default ItemForm