

import { useState } from "react";
import {useParams} from "react-router-dom";
import Item from "./Items/Items";

function Imput(){

    const [productos, setProductos] = useState();
    const {categoria} = useParams ();
    const [filter, setFilter] = useState("");
  
  
    const lista = ()=>{ 
      let items = require("../back/productos.json")
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
          resolve(items)
      }, 1500);
  });
}
useEffect(() => {
  async function fetchedItems(){
    const items = await lista(); 
    setProductos(items)
  }

  fetchedItems()
}, [] );
return ( 
          <div>
            <Imput id="filter" name ="filter" type="text" value ={filter} onChange={(event)=> setFilter(event.target.value)}   />
          
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