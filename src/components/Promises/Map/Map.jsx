import { useEffect } from "react"
import { getProduct } from "../../../../productMock"


export const Map = () => {

    useEffect(()=>{
        getProduct()
        .then(response=> console.log(document.getElementById("numberCart").textContent=response))
        .catch(error=>console.log(error));        
    })
  return (
    <div>Map</div>
  )
}
