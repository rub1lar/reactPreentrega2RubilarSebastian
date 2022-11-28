import CartItem from "./CartItem";
import CartContext from "../Context/CartContext";
import { useContext , useState} from "react";
import { Link } from "react-router-dom";
import InputModal from "./ImputModal";


function Cart(props) {




    const { cart, clear, cartQuantity, cartTotal } = useContext(CartContext);
    const [total, setTotal] = useState(0)

    function resumenPrecio() {
      const subtotal = cart.reduce((previus, current) => previus + (current.valor * current.cantidad), 0)
      const iva = (subtotal * 0.21).toFixed(0)
      const total = Number(subtotal * 1.21).toFixed(0);
      const valores = [subtotal, iva, total]
      setTotal(valores)
  
    }

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
                  <h4 className="  m-3"> subtotal:${cartTotal()}</h4>
          <button className="items-center m-3" onClick={resumenPrecio}>
        Resumen total con iva
     </button>

     <div className="flex items-center">
          <h2 className="text-xl font-sans mx-4">Subtotal: </h2>
          <h1 className="text-xl ml-2 hover:animate-pulse cursor-default">$ {total[0]} </h1>
          <h2 className=" text-xl font-sans mx-4">IVA: </h2>
          <h1 className="text-xl ml-2   hover:animate-pulse cursor-default">$ {total[1]} </h1>
          <h2 className=" text-2xl font-sans mx-10">Total: </h2>
          <h1 className="text-2xl ml-2   hover:animate-pulse cursor-default">$ {total[2]} </h1>

          <InputModal cart={cart} valorTotal={total[2]}/> 
      </div>


</div>
     </div>}
       </>
    );
}
export default Cart;