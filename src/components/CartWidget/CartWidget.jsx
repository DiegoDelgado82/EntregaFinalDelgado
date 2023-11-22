
import  "./cartwidget.css"
//muestra el carrito de compra con el número de items cargados 
export const CartWidget = () => {
  return (
    <div className="container">
      
        <div className="col-12 d-flex justify-content-end">
          <div className="d-flex align-items-end">
            <i className={'fa fa-shopping-cart cartWidget' }  ></i>
            <p className="numberCart">5</p>
          </div>
        </div>
      </div>
   
  );
};