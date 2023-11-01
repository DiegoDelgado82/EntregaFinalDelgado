import style from "./cartWidget.module.css"
export const CartWidget = () => {
  return (
    <div className="container">
      
        <div className="col-12 d-flex justify-content-end">
          <div className="d-flex align-items-end">
            <i className={`fa fa-shopping-cart ${style.cartWidget}`}  ></i>
            <p className={style.numberCart}>5</p>
          </div>
        </div>
      </div>
   
  );
};