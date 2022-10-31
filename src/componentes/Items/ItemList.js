import { useState, useEffect } from "react";
import Item from "./Items";
import {useParams} from "react-router-dom";


 function ItemLista(){

  const [productos, setProductos] = useState();
  const [loading, isLoading] = useState(false)
  const {categoria} = useParams();


  //SIMULACION API
  const listado = () => {
    let items = require("../../back/productos.json")
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(items)
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
             key={el.id}
              nombre={el.nombre}
              stock={el.stock}
              categoria={el.categoria}
              img = {el.img}
              valor = {el.valor}
              />
     
            ))
          : productos.map((el)=>(
            <Item 
            key={el.id}
              nombre={el.nombre}
              stock={el.stock}
              categoria={el.categoria}
              img = {el.img}
              valor = {el.valor}
            />
          ))
          }
        </div>

    );
} 
export default ItemLista;