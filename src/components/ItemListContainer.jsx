import React from 'react'
import '../styles/ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import data from '../data/data.json'
const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])

  const getData = new Promise((resolve, reject) => {
    resolve(data)
  })
  useEffect(() => {
    getData.then((response) => setProductos(response))
  }, [])

  function onAdd(count, stock) {
    if (stock > 0) {
      console.log(`Has agregado ${count} productos`)
    }
  }

  return (
    <>
      <div className="contenedor">{greeting}</div>
      <ItemList items={productos} />
    </>
  )
}

export default ItemListContainer
