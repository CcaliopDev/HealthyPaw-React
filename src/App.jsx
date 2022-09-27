import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart'
import Checkout from './components/Checkout'

import ContextData from './context/ContextData'

function App() {
  return (
    <ContextData>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer greeting="Bienvenidos a nuestro Pet Shop" />
            }
          />
          <Route
            path="/category/:idCategory"
            element={
              <ItemListContainer greeting="Bienvenidos a nuestro Pet Shop" />
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:idProduct" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </ContextData>
  )
}

export default App
