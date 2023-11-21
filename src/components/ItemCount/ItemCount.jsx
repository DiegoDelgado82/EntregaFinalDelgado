import { useState } from "react";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);
  
  const increment = () => {
    if (count < stock) {
      return setCount(count + 1);
    }
    setCount(count);
  };

  const decrement = () => {
    if (count === 0) {
      return setCount(0);
    }
    setCount(count - 1);
  };


  return (
    <div>
      
        <p>Cantidad de horas</p>
        <button className="btn btn-info mx-2 border-black" onClick={decrement}>
          -
        </button>
        <strong>{count}</strong>
        <button className="btn btn-info mx-2 border-black" onClick={increment}>
          +
        </button>
        
      
      <div className="col-6">
      <button className="btn btn-outline-primary mt-2 col-8 " onClick={() => onAdd(count)}>Solicitar Servicio</button>
      </div>
     
      
      
    </div>
  );
};
