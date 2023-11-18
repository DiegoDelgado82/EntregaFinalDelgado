import style from "./cartWidget.css"
export const CartWidget = () => {
  return (
    <div className="container">
      
        <div className="col-12 d-flex justify-content-end">
          <div className="d-flex align-items-end">
            <i className={`fa fa-shopping-cart ${style.cartWidget}`}  ></i>
            <p className={style.numberCart} id="numberCart">5</p>
          </div>
        </div>
      </div>
   
  );
};