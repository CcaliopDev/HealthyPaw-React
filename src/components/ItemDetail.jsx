import React, { useState, useEffect, useContext } from 'react'
import ItemCount from './ItemCount'
import '../styles/ItemDetail.css'
import { Link } from 'react-router-dom'
import { MyContext } from '../context/ContextData'

const ItemDetail = ({ product }) => {
  const { addItem } = useContext(MyContext)

  const [comprado, setComprado] = useState(false)

  useEffect(() => {
    setComprado(false)
  }, [product])

  const onAdd = (quantity) => {
    setComprado(true)
    addItem(product, quantity)
  }

  return (
    <div>
      {product === undefined ? (
        <h1>El producto no existe</h1>
      ) : (
        <div className="itemDetail">
          <img src={`/${product.img}`} className="imagenDetalle" alt="" />
          <div className="detallesEstilo">
            <h2>{product.nombre}</h2>
            <p>{product.descripcion}</p>
            <h4>Precio: ${product.precio}</h4>
            {!comprado ? (
              <ItemCount product={product} onAdd={onAdd} />
            ) : (
              <div className="counter-box">
                <Link to={'/cart'}>
                  <button className="btn">Comprar</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default ItemDetail
