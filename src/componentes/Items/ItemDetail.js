
import ItemCount from "./ItemCount"
import  "./detail.css"
import { useState, useContext } from 'react'
import CartContext from '../../Context/CartContext'
import {NavLink} from 'react-router-dom'
function ItemDetail(props) {
    const { addItem } = useContext(CartContext)




    const [cargado, estaCargado] = useState(false)
    const [cantidad, setCantidad] = useState(0)

    function onAdd(numero) {
        setCantidad(numero);
    }

    function agregarCarrito(producto) {
        
        addItem(producto, cantidad)
        estaCargado(true)


    }

    return (
             <div className='detail'>
                
            <div >
               <div  className="detail2 mx-auto">                 
                     <img   className="detail2 mx-auto" src={props.img} alt="productimage" />
                 </div>
                   
                <div className="detail px-5 pb-5 text-center">
                    
                        <h5 className="text-xl text-white font-semibold">{props.nombre}</h5>
                        <h5 className="text-xl text-grey font-semibold">{props.categoria}</h5>
                        <h5 className="text-xl text-white font-semibold">{props.detalle}</h5>


                    <div className="flex-col  items-center ml-24">
                    </div>
                    <span className=" font-bold"> Precio : {props.valor} </span>
                    {!cargado ? <ItemCount stock={props.stock} initial={1} funcion={onAdd} />
            : 
            <div className=" ml-30 mt-9 fill-neutral-200 flex justify-center">
       {/*      <NavLink to={`/cart`} > <button type="button">
      <img  src={""}></img> </button> </NavLink> */}
</div> }
       
       
   {/*              <div className=" ml-30 mt-9 fill-neutral-200 flex justify-center">
            <NavLink to={`/cart`} > <button type="button" className="inline-flex relative items-center p-3 text-sm 
                font-medium text-center text-white  rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 ">
      <img className="h-14 mx-4 cursor-pointer" src="" ></img> </button> </NavLink>
</div>  */}
                </div>
            </div>

            <div className="w-full max-w-sm pt-3 bg-white dark:bg-gray-800 dark:border-gray-700">

                <div className="px-5 pb-5 mt-10">
                    <button className="item-center font-bold ml-20 mt-6 rounded-full bg-red-700 p-2 hover:bg-red-500" onClick={() => agregarCarrito(props)}> Agregar al carrito</button>

                </div>
            </div>


        </div>
    )

}

export default ItemDetail