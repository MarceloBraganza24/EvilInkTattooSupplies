import { createContext, useState } from "react"
import { toast } from "react-toastify"

export const CartContext = createContext(null)

export const ShoppingCartContext = ({children}) => {

    const [cart, setCart] = useState([])

    const qtyProducts = cart.length

    const deleteItemCart = (itemId) => {
        toast('Has eliminado un producto del carrito!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        const cartUpdate = cart.filter(taza => taza.id !== itemId)
        setCart(cartUpdate)
    }

    const deleteAllItemCart = () => {
        toast('El carrito está vacío!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        setCart([])
    }

    return (

        <CartContext.Provider value={{cart, setCart, qtyProducts, deleteItemCart, deleteAllItemCart}}>
            {children}
        </CartContext.Provider>

    )

}