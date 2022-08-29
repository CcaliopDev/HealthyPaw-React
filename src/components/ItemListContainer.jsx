import React from 'react'
import '../styles/ItemListContainer.css'
import ItemCount from './ItemCount'

const ItemListContainer = ({ greeting }) => {
  function onAdd(count, stock) {
    if (stock > 0) {
      console.log(`Has agregado ${count} productos`)
    }
  }

  return (
    <>
      <div className="contenedor">{greeting}</div>
      <ItemCount stock={0} onAdd={onAdd} />
    </>
  )
}

export default ItemListContainer
