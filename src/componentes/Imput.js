

import { useState } from "react";
import {useParams} from "react-router-dom";
import Item from "./Items/Items";

function Imput(){

    const [productos, setProductos] = useState();
    const {categoria} = useParams ();
    const [filter, setFilter] = useState("");
  
  
    const lista =  require("../back/productos.json") 
    setProductos(lista)

      return ( 
          <div>
           <input id="filter" name ="filter" type="text" value ={filter} onChange={(event)=> setFilter(event.target.value)} /> 
          
            { productos.filter((prod) => prod.categoria === categoria).map((el)=>(
                <Item 
               key={el.id}
               id={el.id}
                nombre={el.nombre}
                stock={el.stock}
                categoria={el.categoria}
                img = {el.img}
                valor = {el.valor}
                />
              )) }
               </div>
  
        
              );
  } 
  export default Imput; 