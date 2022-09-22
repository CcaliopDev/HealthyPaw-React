import React, { useState, useEffect } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([])
  const { idProduct } = useParams()

  useEffect(() => {
    const db = getFirestore()
    const response = doc(db, 'productos', `${idProduct}`)
    getDoc(response).then((snapshot) => {
      snapshot.exists()
        ? setProducto({ id: snapshot.id, ...snapshot.data() })
        : setProducto(undefined)
    })
  }, [idProduct])

  return (
    <>
      <ItemDetail product={producto} />
    </>
  )
}

export default ItemDetailContainer
