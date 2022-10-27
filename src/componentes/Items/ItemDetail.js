
import ItemCount from "./ItemCount"


function ItemDetail(props) {
 

    return (
             <div >
                
            <div >
               
                    <img className="p-8 rounded-t-lg" src={props.img} alt="productimage" />
                
                <div className="px-5 pb-5 text-center">
                    
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.nombre}</h5>
                   

                    <div className="flex-col  items-center ml-24">
                    <div className="flex items-center mt-2.5 mb-5">
                        <span className="bg-blue-100 text-blue-800 text-s font-semibold mt-5 mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Categoria: {props.categoria}</span>
                    </div>

                    </div>
                    <span className="text-white font-bold"> Precio : {props.valor} </span>
                   <ItemCount stock={props.stock} initial={0}/>
                </div>
            </div>
                    
 {/*            <div className="w-full max-w-sm bg-white  dark:bg-gray-800 dark:border-gray-700 ">
                
                <div className="px-5 pb-5 mt-10">
                   
                    <div className="flex items-center mt-2.5 mb-5">
                        <span className="text-s font-semibold mr-2 px-2.5 py-0.5 rounded text-white ml-3"> {props.reseña}</span>
                    </div>

                    <button className="text-white font-bold ml-20 mt-6 rounded-full bg-red-700 p-2 hover:bg-red-500"> Agregar al carrito</button>
                   
                </div> */}
            </div>

  )
   
  }
  
  export  default ItemDetail