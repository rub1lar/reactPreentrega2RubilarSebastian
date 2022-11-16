

import "./ItemListContainer/Item.css"

 function CartItem (props) {
    return (
      
        <div className= "itemc">  
        
            <div className="w-full max-w-sm  rounded-lg">
                <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold ">{props.categoria}</h5>
                <h5 className="text-xl font-semibold ">{props.CartItemcantidad}</h5>
            


                        <h5 className="text-xl font-semibold ">{props.nombre}</h5>
                    <img className="p-10 w-50 mx-auto" src={props.img} alt="" />
                    <div className="flex justify-between items-center">
                        <span >{props.valor}</span>
                        </div>
                      
                </div>
            </div>

        </div>

    )

}
export default CartItem;