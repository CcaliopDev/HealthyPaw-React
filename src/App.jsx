import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      {/* <ItemListContainer greeting="Bienvenidos a nuestro Pet Shop" /> */}
      <ItemDetailContainer />
    </>
  )
}

export default App
