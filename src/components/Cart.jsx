import React, { useContext, useEffect } from 'react'
import CartItem from './CartItem'
import { MyContext } from '../context/ContextData'
import { Link } from 'react-router-dom'
import '../styles/ItemList.css'
import '../styles/Cart.css'

const Cart = () => {
  const { clear, cart, setTotal, total } = useContext(MyContext)
  const clean = () => {
    clear()
  }

  useEffect(() => {
    const cartTotal = cart.reduce(
      (total, cartItem) => total + cartItem.precio * cartItem.quantity,
      0,
    )
    setTotal(cartTotal)
  }, [cart])

  return (
    <div className="cartContainer">
      {cart.length > 0 ? (
        <>
          <div className="row estiloLista">
            {cart.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </div>
          <div>
            <h3 style={{ textAlign: 'center' }}>Total: U$S {total}</h3>
            <div>
              <button className="card__link btn btn-primary" onClick={clean}>
                Limpiar carrito
              </button>
              <button className="card__link btn btn-primary">
                Terminar compra
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 style={{ textAlign: 'center' }}>El carrito está vacío</h1>
          <Link style={{ textAlign: 'center' }} to="/">
            <button className="card__link btn btn-primary" onClick={clean}>
              Ir a la tienda
            </button>
          </Link>
        </>
      )}
    </div>
  )
}

export default Cart
