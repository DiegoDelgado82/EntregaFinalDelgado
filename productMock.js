const products=[

    {id:"1", name:"Matemática 1", descripcion:"Clases particulares Matemática de Primer año", stock:99, category:"claseParticular"},
    {id:"2", name:"Matemática 2", descripcion:"Clases particulares Matemática de Segundo año", stock:99, category:"claseParticular"},
    {id:"3", name:"Matemática 3", descripcion:"Clases particulares Matemática de Tercer año", stock:99, category:"claseParticular"},
    {id:"4", name:"Matemática 4", descripcion:"Clases particulares Matemática de Cuarto año", stock:99, category:"claseParticular"},
    {id:"5", name:"Matemática 5", descripcion:"Clases particulares Matemática de Quinto año", stock:99, category:"claseParticular"},
    {id:"6", name:"Matemática 6", descripcion:"Clases particulares Matemática de Sexto año", stock:99, category:"claseParticular"},
    {id:"7", name:"Trabajo Práctico Lengua", descripcion:"Asesoramiento en realización de trabajo práctico de Lengua", stock:99,    category:"trabajoPractico"},
    {id:"8", name:"Trabajo Práctico Geografía", descripcion:"Asesoramiento en realización de trabajo práctico de Geografía", stock:99, category:"trabajoPractico"},
    {id:"9", name:"Trabajo Práctico Inglés", descripcion:"Asesoramiento en realización de trabajo práctico de Inglés", stock:99,    category:"trabajoPractico"},
    {id:"10", name:"Trabajo Práctico Matemática", descripcion:"Asesoramiento en realización de trabajo práctico de Matemática", stock:99,category:"trabajoPractico"}

    
]

export const getProduct = () => {
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
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };