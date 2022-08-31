import React from 'react'

const Item = ({ item }) => {
  console.log(item.img)
  return (
    <div className="card col-4">
      <img src={`${item.img}`} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{item.nombre}</h5>
        <p className="card-text">{item.descripcion}</p>
        <p className="card-text">${item.precio}</p>
        <a href="#" className="card__link btn btn-primary">
          Ver detalle
        </a>
      </div>
    </div>
  )
}

export default Item
