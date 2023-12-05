import React, { useEffect, useState } from 'react'
import {collection, getDocs, query,where} from "firebase/firestore"
import { db } from '../../config/firebaseConfig'
import { ItemDetail} from '../ItemDetail/ItemDetail';

export const Products = () => {
  const [products, setProducts]= useState([]);
  
  const getProductBD=(category)=>{
    //const myProducts= query(collection(db,"producs"),where("category","==","claseParticular"));
const myProducts= category ? query(collection(db,"producs"), where("category","==","claseParticular")) :query(collection(db,"producs"));
    
getDocs(myProducts)

    .then( (resp)=> {
     //   console.log(resp.docs[0].id)
      //  console.log(resp.docs[0].data())

    //    const product={
            
  //          id:resp.docs[0].id,
 //           ...resp.docs[0].data()
            
 //       }
 //       console.log(product)

const productList =resp.docs.map(doc=>{
    const product={
        id:doc.id,
        ...doc.data()
    };
    return product;
   
})
console.log(productList)
setProducts(productList)
   })
   
 .catch (error=>console.log(error));



  }

  useEffect(()=>{

    getProductBD();


  },[])
  
    return (
     <>
     
<h2>Productos</h2>
        {
          //LLAMAR A ITEMLISTCONTAINER???  
            products.map((product)=>(
                <div key={product.id}>
                    <p>Nombre:{product.name}</p>
                    <p>Descripción:{product.description}</p>
                    <p>Precio:{product.price}</p>
                    <hr/>
                </div>
                


            ))
        }
    <div>Products</div>
    
    </>   
  )
}
