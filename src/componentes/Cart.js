import CartItem from "./CartItem";
import CartContext from "../Context/CartContext";
import { useContext } from "react";



function Cart(props) {
    const { cart } = useContext(CartContext);
    const { clear } = useContext(CartContext);
    return (
        <div>
              <div>
            {cart.map((el) => (
                <CartItem
                id={el.id}
                key={el.id}

                nombre={el.nombre}
                stock={el.stock}
                categoria={el.categoria}
                img={el.img}
                valor={el.valor}
                />
                ))}  
                    </div> 
<div className= "inline-flex">
                    <button className="  m-3" onClick={() => clear(props.id)}>
                            VACIAR CARRITO
                        </button>
                        <h4 className="  m-3"> TOTAL DE LA COMPRA:${}</h4>
                <button className="items-center m-3" onClick={() => (props.id)}>
              FINALIZAR COMPRA
           </button>
</div>
           </div>
    );
}
export default Cart;