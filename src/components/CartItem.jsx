import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../context/ContextData'
import '../styles/Item.css'

function CartItem({ product }) {
  //Context data and remove function
  const { removeItem } = useContext(MyContext)
  const remove = () => {
    removeItem(product.id, product.quantity)
  }

  return (
    <div className="card itemCard">
      <Link to={'/product/' + product.id}>
        <img
          src={`/${product.img}`}
          className="card-img-top itemImage"
          alt="..."
        />
      </Link>
      <div>
        <h5 className="card-title">{product.nombre}</h5>
        <p className="card-text">
          Precio: ${product.precio} x {product.quantity}
        </p>
      </div>
      <h5>Total: U$S {product.precio * product.quantity}</h5>
      <button className="card__link btn btn-primary" onClick={remove}>
        Eliminar
      </button>
    </div>
  )
}

export default CartItem
