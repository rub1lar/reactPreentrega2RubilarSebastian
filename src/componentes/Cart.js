import Item from "./Items";
import { CartContext } from "./Context/CartContext";


const {cart} = useContext(
    CartContext);

 function Cart({productos}){

  return ( 
    <div >
      {productos.cart((el)=> <Item 
        key={el.id}
        id={el.id}
          nombre={el.nombre}
          stock={el.stock}
          categoria={el.categoria}
          img = {el.img}
          valor = {el.valor}
        />)}
    </div>

);
} 
export default Cart;  