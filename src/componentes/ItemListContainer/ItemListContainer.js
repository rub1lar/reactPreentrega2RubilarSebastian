import React, { Fragment } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemLista from '../Items/ItemList';

import {collection ,doc,getDocs , getFirestore } from "firebase/firestore"

function ItemListContainer (props){
  const [productos, setProductos] = useState([]);
  const {id} = useParams();


  useEffect(() => {
      const db = getFirestore(); 

      const itemsCollection = collection(db, "items");
      
      getDocs(itemsCollection).then((snapshop)=>{
        if (snapshop.size===0){
          console.log ( "no resultados");
        }
        setProductos(snapshop.docs.map((doc)=>({id: doc.id, ...doc.data() } )));
      }); 
  },
   [] );

return (
  <Fragment>
<ItemLista productos={productos}/> 

</Fragment>
)

}

export default ItemListContainer;