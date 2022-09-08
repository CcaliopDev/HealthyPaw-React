import React, { createContext, useState } from 'react'

export const MyContext = createContext()

const ContextData = ({ children }) => {
  const [cart, setCart] = useState([])

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      cart.find((e) => e.id === item.id).quantity += quantity
      setCart(cart)
    } else {
      const newItem = item
      newItem.quantity = quantity
      cart.push(newItem)
      setCart(cart)
    }
  }

  const removeItem = (itemId) => {
    const newCart = cart.filter((e) => e.id !== itemId)
    setCart(newCart)
  }

  const clear = () => {
    setCart([])
  }

  const isInCart = (id) => {
    if (cart.find((item) => item.id === id) === undefined) {
      return false
    } else {
      return true
    }
  }

  return (
    <MyContext.Provider
      value={{
        cart,
        addItem,
      }}
    >
      {children}
    </MyContext.Provider>
  )
}

export default ContextData
