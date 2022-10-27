import { useState, useEffect } from "react";
import Item from "./Items";
import {useParams} from "react-router-dom";


export const ITEN = [
 {
     "id": "1",
     "stock": "1",
     "categoria":"clothes",
     "nombre": " Camiseta Dark",
     "valor": "$50 US",
     "img": "",
 },
 {
     "id": "2",
     "stock": "1",
     "categoria":"accesories",
     "nombre": " Cartera Calavera",
     "valor": "$20 US",
     "img": "",
 },
 {
     "id": "3",
     "stock": "1",
     "categoria":"shoes",
     "nombre": " Botas Cuero",
     "valor": "$150 US",
     "img": "",
 },
 {
     "id": "4",
     "stock": "1",
     "categoria":"shoes",
     "nombre": " Botas Largas Negras",
     "valor": "$250 US",
     "img": "",
 }
]
 function ItemLista(){

  const [productos, setProductos] = useState();
  const [loading, isLoading] = useState(false)
  const {categoria} = useParams();


  //SIMULACION API
  const listado = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(ITEN)
            isLoading(true)
        }, 1500);
    })
  }
  useEffect(() => {
    async function fetchedItems(){
      const items = await listado(); 
      setProductos(items)
    }

    fetchedItems()
  }, [] );

    return ( 
        <div >
      
          {!loading ? 
            productos : categoria? productos.filter((prod) => prod.categoria === categoria).map((el)=>(
              <Item 
             Id={el.id}
              nombre={el.nombre}
              stock={el.stock}
              categoria={el.categoria}
              img = {el.img}
              valor = {el.valor}

              />
     
            ))
   
          : productos.map((el)=>(
            <Item 
            Id={el.id}
              nombre={el.nombre}
              stock={el.stock}
              categoria={el.categoria}
              img = {el.img}
              valor = {el.valor}
            />
          ))
          }
          :
        
        </div>

    );
} 
export default ItemLista;