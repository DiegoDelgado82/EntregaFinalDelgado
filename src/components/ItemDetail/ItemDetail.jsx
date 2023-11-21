import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({name, descripcion, img, price, stock }) => {
   
    const onAdd = (items) => { 
        alert(`Se agregaron ${items} al carrito`)
     }

  return (
    <div className="border col-12">
      <div className="card ">
        <div className="card-body col-12 ">
          <h5 className="card-title">{name}</h5>
          <img src={img} alt="" />
          <p className="card-text col-12"> {descripcion} </p>
          <p>Precio: {price} </p>
          <ItemCount stock={stock} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};
