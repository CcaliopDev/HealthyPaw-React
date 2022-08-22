import React from 'react'
import { CartWidget } from './CartWidget'

const Navbar = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Healthy Paw
          </a>
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
                <a className="nav-link" href="#">
                  Inicio
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Ofertas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tablas nutricionales
                </a>
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
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Perros
                  </a>
                  <a className="dropdown-item" href="#">
                    Gatos
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Todo
                  </a>
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
