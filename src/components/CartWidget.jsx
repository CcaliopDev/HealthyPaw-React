import React, { useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { MyContext } from '../context/ContextData'
import { Link } from 'react-router-dom'
import '../styles/CartWidget.css'

export const CartWidget = () => {
  const { count } = useContext(MyContext)

  return (
    <>
      <Link className="widget" to={'/cart'}>
        <ShoppingCartIcon fontSize="large" />
      </Link>
      <p>{count > 0 ? count : ' '}</p>
    </>
  )
}
