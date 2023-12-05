 const products = [
  {id:"1", name:"Matemática 1", descripcion:"Clases particulares Matemática de Primer año", image:"../../img/mate.jpg", stock:99, category:"claseParticular", price:3500},
  {id:"2", name:"Matemática 2", descripcion:"Clases particulares Matemática de Segundo año",image:"../../img/mate.jpg", stock:99, category:"claseParticular",price:3600},
  {id:"3", name:"Matemática 3", descripcion:"Clases particulares Matemática de Tercer año",image:"../../img/mate.jpg", stock:99, category:"claseParticular",price:3700},
  {id:"4", name:"Matemática 4", descripcion:"Clases particulares Matemática de Cuarto año",image:"../../img/mate.jpg", stock:99, category:"claseParticular",price:4000},
  {id:"5", name:"Matemática 5", descripcion:"Clases particulares Matemática de Quinto año",image:"../../img/mate.jpg", stock:99, category:"claseParticular", price:4500},
  {id:"6", name:"Matemática 6", descripcion:"Clases particulares Matemática de Sexto año",image:"../../img/mate.jpg", stock:99, category:"claseParticular", price:5000},
  {id:"7", name:"Trabajo Práctico Lengua", descripcion:"Asesoramiento en realización de trabajo práctico de Lengua",image:"../../img/lengua.jpg", stock:99,    category:"trabajoPractico", price:7000},
  {id:"8", name:"Trabajo Práctico Geografía", descripcion:"Asesoramiento en realización de trabajo práctico de Geografía",image:"../../img/geografia.jpg", stock:99, category:"trabajoPractico", price:7000},
  {id:"9", name:"Trabajo Práctico Inglés", descripcion:"Asesoramiento en realización de trabajo práctico de Inglés",image:"../../img/ingles.jpg", stock:99,    category:"trabajoPractico", price:7000},
  {id:"10", name:"Trabajo Práctico Matemática", descripcion:"Asesoramiento en realización de trabajo práctico de Matemática", image:"../../img/mate.jpg", stock:99,category:"trabajoPractico", price:7000}

];






  
  export const getProducts = () => {
    return new Promise((resolve, reject) => {
      
      if (products.length > 0) {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };

  export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
      
      if (products.length > 0) {
        const product = products.find( p => p.id === id);
        
        setTimeout(() => {
          if(!product) {
            reject(`No se encuentra el productos con el id ${id}`)
          }
          resolve(product);
        }, 1500);
      } else {
        reject("No hay productos");
      }
    });
  };
  

