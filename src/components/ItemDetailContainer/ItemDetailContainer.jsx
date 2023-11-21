import { useEffect, useState } from "react"
import { getProductById } from "../../../asyncMockProduct";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import cargando from "../../assets/img/cargando2.gif"
//Llamamos al componente ItemDetail en el caso en que se encuentre el ID pasado por parametro
export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => { 
      setIsLoading(true);
      getProductById(id)
        .then(resp => {
          setIsLoading(false);
          setItem(resp)
          
      }
        )
        .catch(error => console.log(error));
        
     }, [])

     return <>{isLoading ? <div className="d-flex align-items-center justify-content-center"><img  className="cargando"src={cargando} alt="cargando"/></div>  : item && <ItemDetail {...item} />}
    
    </>;

  
}
