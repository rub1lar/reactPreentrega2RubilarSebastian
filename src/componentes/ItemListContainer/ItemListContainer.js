import React, { Fragment } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemLista from '../Items/ItemList';
function ItemListContainer (props){
  const [productos, setProductos] = useState([]);
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
  <Fragment>
<ItemLista productos={productos}/> 
</Fragment>
)

}

export default ItemListContainer;