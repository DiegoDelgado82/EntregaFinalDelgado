import { ProductsById } from "../ProductById/ProductById";

import { useParams } from "react-router-dom";





//Mostramos los items por categoría. En caso en que no se encuentre la categoría muestra todos los items
//imgur
export const ItemDetailContainer = () => {
  const { id } = useParams();
 
  return (
    <>
     
     <ProductsById id={id} />
    
    
    </>
  );
};
