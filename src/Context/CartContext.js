import {createContext} from 'react'
import {useState} from 'react'


const CartContext = createContext(); 

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const carritoProv = cart


    const addItem = (productos, cantidad) => {

        if (!isInCart(productos.id)) {
              console.log (productos , cantidad)
            const producto = {
                "id": productos.id,
                "img":productos.img,
                "nombre": productos.nombre,
                "valor": productos.valor,
                "cantidad":cantidad,
                "stock": productos.stock
            }
            carritoProv.push(producto)
            setCart(carritoProv)
            
        } else if (isInCart) {
            const posItem = carritoProv.findIndex(producto => producto.id === productos.id)
            carritoProv[posItem].cantidad = cantidad; 
            setCart(carritoProv)
        }
    }
    const removeItem = (productos) => {
        const newProducts = cart.filter((p) => p.id !== productos.id);
        setCart(newProducts);
    }
    
    const clear = () => {
        setCart([])
        
    }
    
    const isInCart = (id) => {
        return cart.some((el) => el.id === id)
        
    }
    
  
    
    return <CartContext.Provider value={{addItem, removeItem, clear, isInCart, cart}}>{children} </CartContext.Provider>
}

export {CartProvider}
export default CartContext