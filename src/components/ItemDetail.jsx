import React from 'react'
import '../styles/ItemDetail.css'

const ItemDetail = ({ product }) => {
  return (
    <div>
      {product === undefined ? (
        <h1>El producto no existe</h1>
      ) : (
        <div className="itemDetail">
          <img src={`${product.img}`} className="imagenDetalle" alt="" />
          <div className="detallesEstilo">
            <h2>{product.nombre}</h2>
            <p>{product.descripcion}</p>
            <h4>Precio: ${product.precio}</h4>
            <button className="comprarBtn">Comprar</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ItemDetail
