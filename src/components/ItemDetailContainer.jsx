import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import data from '../data/data.json'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([])
  const { idProduct } = useParams()

  const getItem = new Promise((resolve, reject) => {
    resolve(data.find((e) => e.id == Number(idProduct)))
  })

  useEffect(() => {
    getItem.then((response) => setProducto(response))
  }, [])

  return (
    <>
      <ItemDetail product={producto} />
    </>
  )
}

export default ItemDetailContainer
