
import "./carrito.css"
import { NavLink } from "react-router-dom";
import CartContext from "../../Context/CartContext";
import { useContext, useState, useEffect } from 'react'


function CartWidget() {
  const { cart, addItem } = useContext(CartContext)
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    console.log("Se ha agregado o removido algo al carrito")
    setCartLength(cart.length)
  }, [cart, addItem])
  return (
    <NavLink to={`/cart`} ><button type="button">
      <img src={""}></img>
      {cartLength > 0 ?
        <div className="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6
          text-xs font-bold text-white bg-red-500 rounded-full border-1 border-white dark:border-gray-900">{cartLength}</div>
        : <></>}
    </button></NavLink>



  );
}

export default CartWidget;