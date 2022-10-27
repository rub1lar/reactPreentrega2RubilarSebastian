import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ITEN from "./ItemList";


function ItemDetailContainer() {

    const {productoid} = useParams();
    const [productos, setProductos] = useState();
  const [loading, isLoading] = useState(true)

  //SIMULACION API
  const getItem = () => {

    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(ITEN)
            isLoading(false)
        }, 1500);
    })
  }


  useEffect(() => {
    async function fetchedItems(){
      const items = await getItem(); 
      setProductos(items)
    }

    fetchedItems()
  }, []);

 return(

    
        <div className="md:flex justify-start ml-10 h-[100vh] ">   
        {loading ? productos : productos
          .filter((prod) => prod.id.includes(productoid))
          .map((el)=>(

            <ItemDetail 
            key={el.id}
            nombre={el.nombre}
            calificacion={el.calificacion}
            autor={el.autor}
            img = {el.img}
            categoria = {el.categoria}
            reseña = {el.reseña}
            id={el.id}
            valor = {el.valor}
            stock= {el.stock}

            />
          ))}
        
      


        
        </div>

    );
     

}

export default ItemDetailContainer;