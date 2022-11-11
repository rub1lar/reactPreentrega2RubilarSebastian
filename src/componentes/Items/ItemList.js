

import { useState, useEffect } from "react";
import Item from "./Items";
import {useParams} from "react-router-dom";


 function ItemLista(){

  const [productos, setProductos] = useState();

  const {id} = useParams();


  //SIMULACION API
  const listado = () => {
    let items = require("../../back/productos.json")
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(items)
           
        }, 1500);
    })
  }

  useEffect(() => {
    async function fetchedItems(){
      const items = await listado(); 
      if(id){
        setProductos(items.filter((prod)=> prod.categoria === id))
      }else{
        setProductos(items)
      }
      
    }

    fetchedItems()
  }, [id] );

  return ( 
    <div >
      {productos.map((el)=> <Item 
        key={el.id}
        id={el.id}
          nombre={el.nombre}
          stock={el.stock}
          categoria={el.categoria}
          img = {el.img}
          valor = {el.valor}
        />)}
    </div>

);
} 
export default ItemLista;