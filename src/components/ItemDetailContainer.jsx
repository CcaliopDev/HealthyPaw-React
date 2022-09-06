import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import data from '../data/data.json'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([])

  const getItem = new Promise((resolve, reject) => {
    resolve(data)
  })

  useEffect(() => {
    getItem.then((response) => setProducto(response[0]))
  }, [])

  return (
    <>
      <ItemDetail product={producto} />
    </>
  )
}

export default ItemDetailContainer
