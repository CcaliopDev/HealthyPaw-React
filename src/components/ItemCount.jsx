import { useState } from 'react'
import '../styles/ItemCount.css'

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1)

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
        <h1>Counter</h1>
        <p>Stock: {stock} </p>
        <p>Cantidad: {count} </p>
        <div>
          <button className="btn" onClick={substract}>
            {' '}
            -{' '}
          </button>
          <button className="btn" onClick={reset}>
            {' '}
            Reset{' '}
          </button>
          <button className="btn" onClick={add}>
            {' '}
            +{' '}
          </button>
        </div>

        <div>
          <button className="btn" onClick={() => onAdd(count)}>
            {' '}
            Agregar al carrito{' '}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemCount
