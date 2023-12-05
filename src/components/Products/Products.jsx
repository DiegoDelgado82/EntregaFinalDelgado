import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import { db } from '../../config/firebaseConfig';
import { ItemList } from "../ItemList/ItemList";
import { Link } from "react-router-dom";
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
    
    
        <ItemList products={products} />
      
    </>   
  )
}
