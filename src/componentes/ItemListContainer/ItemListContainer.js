import React, { Fragment } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemLista from '../Items/ItemList';

const {id} = useParams
const [productos, setProductos] = useState;

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
    setProductos(items)
  }

  fetchedItems()
}, [] );

const arrayFiltrado = productos.filter( x => x.category === id );


function ItemListContainer (props){




return (
  <Fragment>

<ItemLista/> 

</Fragment>
)

}




export default ItemListContainer;