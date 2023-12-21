import logo from "../../../libro.png";
import "./navBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

//Creamos la barra de navegación con los Links para las distintas rutas. Al final del navBar llamamos al componente CartWidget
export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar opacity-10">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img className="logo" src={logo} alt="Logo Centro Estudio" />
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
          <div className="ml-auto d-flex align-items-rigth col-2">
          <NavLink className="nav-link text-dark" to="/cart">
          <CartWidget />
        </NavLink>
          </div>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <b>
              <ul className="navbar-nav">
                <li className="nav-item text-dark">
                  <NavLink
                    className="nav-link text-dark"
                    to="/category/claseParticular"
                  >
                    Clase Particular
                  </NavLink>
                </li>
                <li className="nav-item text-dark">
                  <NavLink
                    className="nav-link text-dark"
                    to="/category/trabajoPractico"
                  >
                    Trabajo Práctico
                  </NavLink>
                </li>
                <li className="nav-item text-dark">
                  <NavLink
                    className="nav-link text-dark"
                    to="/category/investigacion"
                  >
                    Investigación
                  </NavLink>
                </li>
                <li className="nav-item text-dark">
                  <NavLink
                    className="nav-link text-dark"
                    to="/category/consulta"
                  >
                    Consulta
                  </NavLink>
                </li>
                <li className="nav-item text-dark">
                  <NavLink className="nav-link text-dark" to="/">
                    Contacto
                  </NavLink>
                </li>
              </ul>
            </b>
          </div>
        </div>

       
      </nav>
    </>
  );
};
