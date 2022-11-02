/* import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

 


function ItemDetailContainer() {

    const {productoid} = useParams();
    const [productos, setProductos] = useState();
  const [loading, isLoading] = useState(false)

  //SIMULACION API
  
  const getItem = () => {
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
      const items = await getItem(); 
      setProductos(items)
    }

    fetchedItems()
  }, []);

 return(
        <div >   
        {loading ? productos : 
        productos.filter((prod) => prod.id.includes(productoid)).map((el)=>(
          
            <ItemDetail 
            key={el.id}
            id={el.id}
            nombre={el.nombre}
            img = {el.img}
            categoria = {el.categoria}
            valor = {el.valor}
            stock= {el.stock}
            />
          ))}

        </div>
    )
}


export default ItemDetailContainer; */

import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

 


function ItemDetailContainer() {

    const {productoid} = useParams();
    const [productos, setProductos] = useState();
  const [loading, isLoading] = useState(true)

  //SIMULACION API
  
  const getItem = () => {
    let items = require("../../back/productos.json")
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(items)
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
        <div >   
        {loading ? productos : 
        productos.filter((prod) => prod.id.includes(productoid)).map((el)=>(
          
            <ItemDetail 
            key={el.id}
            nombre={el.nombre}
            calificacion={el.calificacion}
            img = {el.img}
            categoria = {el.categoria}
            valor = {el.valor}
            stock= {el.stock}
            />
          ))}

        </div>
    );
}


export default ItemDetailContainer;