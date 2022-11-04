
import ItemCount from "./ItemCount"
import  "./detail.css"

function ItemDetail(props) {
 
    
    return (
             <div className=''>
                
            <div className="detail">
               
                    <img className="p-8 rounded-t-lg" src={props.img} alt="productimage" />
                
                <div className="px-5 pb-5 text-center">
                    
                        <h5 className="text-xl font-semibold">{props.nombre}</h5>


                    <div className="flex-col  items-center ml-24">
                    </div>
                    <span className=" font-bold"> Precio : {props.valor} </span>
                   <ItemCount initial={0}/>
                
                <div className="px-5 pb-5 mt-10 items-center">
                   
                    <button className="  font-bold ml-20 mt-6 rounded-full bg-red-700 p-2 hover:bg-red-500"> Agregar al carrito</button>
                   
                </div>
       

                </div>

            </div>
                    
     


        </div>
  )
   
  }
  
  export  default ItemDetail;