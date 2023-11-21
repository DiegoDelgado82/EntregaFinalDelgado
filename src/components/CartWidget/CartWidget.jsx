
//muestra el carrito de compra con el número de items cargados (falta cargar la cantidad de items. Hacer un componente ItemCountCart)
export const CartWidget = () => {
  return (
    <div className="container">
      
        <div className="col-12 d-flex justify-content-end">
          <div className="d-flex align-items-end">
            <i className={`fa fa-shopping-cart styles.numberCart` }  ></i>
            <p id="numberCart">5</p>
          </div>
        </div>
      </div>
   
  );
};