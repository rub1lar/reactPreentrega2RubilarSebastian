import CartItem from "./CartItem";
import CartContext from "../Context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";



function Cart(props) {
    const { cart, clear, cartQuantity, cartTotal } = useContext(CartContext);
    console.log(cart, 'vista cart')
    return (
       <>
       {cart.length === 0 
       ?<p>Tu carrito esta vacio! <Link to='/'>Podes comenzar tu compra aqui</Link></p>
        : <div>
        <div>
      {cart.map((el) => (
          <CartItem
          id={el.id}
          key={el.id}
          cantidad={el.cantidad}
          nombre={el.nombre}
          stock={el.stock}
          categoria={el.categoria}
          img={el.img}
          valor={el.valor}
          />
          ))}  
              </div> 
              <div className= "inline-flex">
              <button className="  m-3" onClick={() => clear()}>
                      VACIAR CARRITO
                  </button>
                  <h4 className="  m-3"> TOTAL DE ITEMS:{cartQuantity()}</h4>
                  <h4 className="  m-3"> TOTAL DE LA COMPRA:${cartTotal()}</h4>
          <button className="items-center m-3" onClick={() => (props.id)}>
        FINALIZAR COMPRA
     </button>
</div>
     </div>}
       </>
    );
}
export default Cart;