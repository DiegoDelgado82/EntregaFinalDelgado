import { ItemCount } from "../ItemCount/ItemCount";
//desectructuramos el item para mostrar la información en una card, agregamos al componente ItemCount para cargar la cantidad
export const ItemDetail = ({id,name,image, descripcion, price, stock}) => {
   console.log("NOmbre:"+id)
    const onAdd = (items) => { 
        alert(`Se agregaron ${items} al carrito`)
     }

  return (
    <div className="border col-12">
      <div className="card ">
        <div className="card-body col-12 ">
          <h5 className="card-title">{name}</h5>
          <img src={image} alt="" />
          <p className="card-text col-12"> {descripcion} </p>
          <p>Precio: {price} </p>
          <ItemCount stock={stock} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};
