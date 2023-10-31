
export const NavBar = () => {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar opacity-10">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html"
            ><img id="logoBrand" src="./src/assets/img/logoBrand.png" alt="lmmogo"
          /></a>

          <button
            className="navbar-toggler bgMenu"
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
                  <a
                    className="nav-link text-dark"
                    href="#"
                    >Clase Particular</a
                  >
                </li>
                <li className="nav-item text-dark">
                  <a
                    className="nav-link text-dark"
                    href="#"
                    >Trabajo Práctico</a
                  >
                </li>
                <li className="nav-item text-dark">
                  <a
                    className="nav-link text-dark"
                    href="#"
                    >Investigación</a
                  >
                </li>
                <li className="nav-item text-dark">
                  <a
                    className="nav-link text-dark"
                    href="#"
                    >Consulta</a
                  >
                </li>
                <li className="nav-item text-dark">
                  <a
                    className="nav-link text-dark"
                    href="#"
                    >Contacto</a
                  >
                </li>
              </ul>
            </b>
          </div>
        </div>
      </nav>

    
    </>
  )
}

