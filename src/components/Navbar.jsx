import React from 'react'
import { CartWidget } from './CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to={'/'}>
            Healthy Paw
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to={'/'}>
                  Inicio
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/'}>
                  Ofertas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/'}>
                  Tablas nutricionales
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Raciones
                </a>
                {/* </Link> */}
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to={'/category/perro'}>
                    Perros
                  </Link>
                  <Link className="dropdown-item" to={'/category/gato'}>
                    Gatos
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to={'/'}>
                    Todo
                  </Link>
                </div>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Search"
              />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
            <CartWidget />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
