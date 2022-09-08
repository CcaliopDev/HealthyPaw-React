import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Item.css'
const Item = ({ item }) => {
  return (
    <div className="card itemCard">
      <img src={`/${item.img}`} className="card-img-top itemImage" alt="..." />
      <div className="card-body itemBody">
        <div>
          <h5 className="card-title">{item.nombre}</h5>
          <p className="card-text">{item.descripcion}</p>
          <p className="card-text">${item.precio}</p>
        </div>
        <Link className="card__link btn btn-primary" to={'/product/' + item.id}>
          Ver detalle
        </Link>
      </div>
    </div>
  )
}

export default Item
