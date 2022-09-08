import React from 'react'
import '../styles/ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import data from '../data/data.json'
import { useParams } from 'react-router-dom'
const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])
  const { idCategory } = useParams()

  const getData = new Promise((resolve, reject) => {
    if (!idCategory) {
      resolve(data)
    } else {
      resolve(data.filter((p) => p.categoria === idCategory.toLowerCase()))
    }
  })
  useEffect(() => {
    getData.then((response) => {
      setProductos(response)
    })
  }, [idCategory])

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
