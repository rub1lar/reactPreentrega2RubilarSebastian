

import { useState, useEffect } from "react";
import Item from "./Items";
import {useParams} from "react-router-dom";


 function ItemLista(){
  const [filter, setFilter] = useState("");

  const [productos, setProductos] = useState();
  const [loading, isLoading] = useState(false)
  const {categoria} = useParams();
  const [resultadobusqueda, setResultadoBusqueda] = useState();


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
      setResultadoBusqueda(productos)
    }

    fetchedItems()

  }, [productos] );

  const filtrar = (itemABuscar) => { 

    //anilizar lo que tengo q filtrar
     let action = productos.filter((item)=> item.nombre.toLowerCase().startsWith(itemABuscar.trim().toLowerCase())) 
    setResultadoBusqueda(action) }


    return ( 
        <div >
             <input id="filter" name ="filter" type="text" value ={filter} onChange={(event)=> setFilter(event.target.value)} /> 
      
          {!loading ? 
            productos : categoria? 
          
              productos.filter((prod) => prod.categoria === categoria).map((el)=>(
                 <Item 
                key={el.id}
                id={el.id}
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
            id={el.id}
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