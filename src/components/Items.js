import Item from './Item'
import { useParams } from 'react-router-dom'

function Items({ shops, handleShopUpdate }) {
  const {id} = useParams()
  const shop = shops.find(shop => {
    return shop.id === parseInt(id, 10)
  })

  return (
    <div className='item-container'>
      {shop.items.map(item => <Item key={item.id} item={item} shop={shop} handleShopUpdate={handleShopUpdate}/>)}
    </div>
  )
}

export default Items