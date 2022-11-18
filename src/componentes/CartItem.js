import CartContext from "../Context/CartContext";
import { useContext } from "react";
import "./ItemListContainer/Item.css";
import CartItemCount from "./Items/CartItemCount";

function CartItem(props) {
    const { removeItem } = useContext(CartContext);


    return (
        <div className='itemc'>
            <div className='w-full max-w-sm  rounded-lg'>
                <div className='px-5 pb-5'>
                    <h5 className='text-xl font-semibold '>
                        {props.categoria}
                    </h5>
                    <h5 className='text-xl font-semibold '>{props.cantidad}</h5> 
                    <h5 className='text-xl font-semibold '>{props.nombre}</h5>
                    <img className='p-10 w-50 mx-auto' src={props.img} alt='' />
                    <div className='flex justify-between items-center'>
                        <span>${props.valor}</span>
                        {<CartItemCount stock={props.stock} initial={1}  />}

                        <button onClick={() => removeItem(props)}>
                            Remover Toda Esta Categoria
                        </button>   
                        <button onClick={() => (props)}>
                            Actualizar Cantidad
                        </button>   
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CartItem;