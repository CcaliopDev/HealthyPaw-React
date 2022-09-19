import React, { createContext, useState } from 'react'

export const MyContext = createContext()

const ContextData = ({ children }) => {
  const [cart, setCart] = useState([])
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0)

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      cart.find((e) => e.id === item.id).quantity += quantity
      setCart(cart)
      setCount(cartLenght(cart))
    } else {
      const newItem = item
      newItem.quantity = quantity
      cart.push(newItem)
      setCart(cart)
      setCount(cartLenght(cart))
    }
  }

  const removeItem = (itemId) => {
    const newCart = cart.filter((e) => e.id !== itemId)
    setCart(newCart)
    setCount(cartLenght(newCart))
  }

  const clear = () => {
    setCart([])
    setCount(0)
  }

  const isInCart = (id) => {
    if (cart.find((item) => item.id === id) === undefined) {
      return false
    } else {
      return true
    }
  }

  const cartLenght = (arr) => {
    return arr.reduce((sum, item) => sum + item.quantity, 0)
  }

  return (
    <MyContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        isInCart,
        clear,
        setTotal,
        total,
        count,
      }}
    >
      {children}
    </MyContext.Provider>
  )
}

export default ContextData
