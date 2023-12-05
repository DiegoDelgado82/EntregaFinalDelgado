import { useEffect, useState } from "react";
import { getProducts } from "../../../asyncMockProduct";
//import { getProducts } from "../../config/firebaseConfig.js";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import cargando from "../../assets/img/cargando.gif";
import "./itemListContainer.css";

//Mostramos los items por categoría. En caso en que no se encuentre la categoría muestra todos los items
export const ItemListContainer = () => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getProducts()
      .then((resp) => {
        if (category) {
          const productsFilter = resp.filter(
            (product) => product.category === category
          );

          if (productsFilter.length > 0) {
            setProducts(productsFilter);
          } else {
            setProducts(resp);
          }
        } else {
          setProducts(resp);
        }

        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [category]);

  return (
    <>
      {isLoading ? (
        <div className="d-flex align-items-center justify-content-center">
          <img className="cargando" src={cargando} alt="cargando" />
        </div>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};
