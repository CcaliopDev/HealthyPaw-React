import React from 'react'
import Item from './Item'

const ItemList = ({ items }) => {
  return (
    <div className="row">
      {items.map((el) => (
        <Item item={el} key={el.id} />
      ))}
    </div>
  )
}

export default ItemList
