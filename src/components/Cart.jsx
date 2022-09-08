import React, { useContext } from 'react'
import { MyContext } from '../context/ContextData'

const Cart = () => {
  const { cart } = useContext(MyContext)
  console.log(cart)
  return (
    <>
      <h1>Hola desde el carrito</h1>
    </>
  )
}

export default Cart
