import React from 'react'
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore'
import '../styles/ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const { idCategory } = useParams()

  useEffect(() => {
    setLoading(true)
    setProductos([])
    const db = getFirestore()

    const itemCollection = collection(db, 'productos')
    const collectionFiltered = query(
      collection(db, 'productos'),
      where('categoria', '==', `${idCategory}`),
    )

    getDocs(!idCategory ? itemCollection : collectionFiltered)
      .then((snapshot) => {
        setProductos(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
        )
      })
      .finally(() => setLoading(false))
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
      <Loader loading={loading} />
    </>
  )
}

export default ItemListContainer
