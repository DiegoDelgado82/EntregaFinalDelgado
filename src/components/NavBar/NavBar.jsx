import logo from "../../../libro.png"
import style from "./navbar.module.css"
import { CartWidget } from '../CartWidget/CartWidget';
import {NavLink} from "react-router-dom"

export const NavBar = () => {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar opacity-10">
        <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
             <img id={style.logoBrand} src={logo} alt="Logo Centro Estudio" />
        </NavLink>


          <button
            className="navbar-toggler ml-auto  "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="menuBurger"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <b>
              <ul className="navbar-nav">
               
                <li className="nav-item text-dark">
                  <NavLink
                    className="nav-link text-dark"
                    to="/cartwidget"
                    >Clase Particular</NavLink>
                </li>
                <li className="nav-item text-dark">
                  <NavLink
                    className="nav-link text-dark"
                    to="/"
                    >Trabajo Práctico</NavLink>
                </li>
                <li className="nav-item text-dark">
                  <NavLink
                    className="nav-link text-dark"
                    to="/"
                    >Investigación</NavLink>
                </li>
                <li className="nav-item text-dark">
                  <NavLink
                    className="nav-link text-dark"
                    to="/"
                    >Consulta</NavLink>
                </li>
                <li className="nav-item text-dark">
                  <NavLink
                    className="nav-link text-dark"
                    to="/"
                    >Contacto</NavLink>
                </li>
              </ul>
            </b>
          </div>
          
        </div>
        <CartWidget/>
      </nav>

    
    </>
  )
}

