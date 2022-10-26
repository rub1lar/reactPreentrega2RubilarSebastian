import React, { Fragment } from 'react'
import ItemLista from '../Items/ItemList';



function ItemList (props){
return (
  <Fragment>
<div >
   <h1 className="titulo">{props.bienvenida}  </h1>
<h2 className="body">{props.title} </h2>
</div>

<div >
<ItemLista/> 
</div>
</Fragment>
)

}




export default ItemList;