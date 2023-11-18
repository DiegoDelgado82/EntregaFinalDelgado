

export const Promises = () => {
    const promesa=new Promise((resolve, reject)=>{

        const condicion= true;
        if (condicion){
        resolve("la condicion se cumple")
       }   else{
        reject("la condicion no se cumple")

            }
        
    });

    //obtener informacion de promesa

    /*promesa
     .then(resp=>console.log(resp))
     .catch(error=>console.log(error))    
*/
const resolvePromise= async()=>{
    try{
        const response=await promesa;
        console.log(response)
    }catch(error){
        console.log(error);
    }
}

resolvePromise()

  return (
    <div>Promises</div>
  )
}
