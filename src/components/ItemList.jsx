import React from 'react'
import Item from './Item'
import '../styles/ItemList.css'

const ItemList = ({ items }) => {
  return (
    <div className="row estiloLista">
      {items.map((el) => (
        <Item item={el} key={el.id} />
      ))}
    </div>
  )
}

export default ItemList
