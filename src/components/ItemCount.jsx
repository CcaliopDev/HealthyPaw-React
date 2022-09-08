import { useState } from 'react'
import '../styles/ItemCount.css'

const ItemCount = ({ product, onAdd }) => {
  const [count, setCount] = useState(1)
  const stock = product.stock

  const añadirProducto = () => {
    if (stock > 0) {
      onAdd(count)
      setCount(0)
    }
  }

  function add() {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  function substract() {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  function reset() {
    setCount(1)
  }

  return (
    <div>
      <div className="counter-box">
        <h2>Stock: {stock} </h2>
        <h2>Cantidad: {count} </h2>
        <div>
          <button className="btn" onClick={substract}>
            -
          </button>
          <button className="btn" onClick={reset}>
            Reset
          </button>
          <button className="btn" onClick={add}>
            +
          </button>
        </div>

        <div>
          <button className="btn" onClick={añadirProducto}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemCount
