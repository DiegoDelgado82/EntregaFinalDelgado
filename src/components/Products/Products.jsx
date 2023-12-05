import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import cargando from "../../assets/img/cargando.gif";
import { db } from "../../config/firebaseConfig";
import { ItemList } from "../ItemList/ItemList";
export const Products = () => {
  const [products, setProducts] = useState([]);

  const getProductBD = (category) => {
     const myProducts = category
      ? query(
          collection(db, "producs"),
          where("price", "===", 7000)
        )
      : query(collection(db, "producs"));

    getDocs(myProducts)
      .then((resp) => {
    
        const productList = resp.docs.map((doc) => {
          const product = {
            id: doc.id,
            ...doc.data(),
          };
          setIsLoading(false);
          return product;
        });
        console.log(productList);
        setProducts(productList);
      })

      .catch((error) => console.log(error));
  };
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getProductBD();
  }, []);

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
