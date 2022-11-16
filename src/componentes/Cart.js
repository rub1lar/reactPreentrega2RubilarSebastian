import CartItem from "./CartItem";
import CartContext from "../Context/CartContext";
import { useContext } from "react";

function Cart() {
    const { cart } = useContext(CartContext);

    return (
        <div>
            {cart.map((el) => (
                <CartItem
                    id={el.id}
                    nombre={el.nombre}
                    stock={el.stock}
                    categoria={el.categoria}
                    img={el.img}
                    valor={el.valor}
                />
            ))}
        </div>
    );
}
export default Cart;