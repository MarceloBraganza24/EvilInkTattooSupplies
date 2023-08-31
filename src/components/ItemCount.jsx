import {useContext,useState} from 'react'
import {CartContext} from '../context/ShoppingCartContext'
import { toast } from 'react-toastify';

const ItemCount = ({id, img, title, price}) => {

    const {cart, setCart} = useContext(CartContext);
    
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const addToCart = () => {

        toast('Has agregado un producto al Carrito!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        
        setCart((currItems) =>{

            const isItemFound = currItems.find((item) => item.id === id)
            
            if(isItemFound) {

                return currItems.map((item) => {

                    if (item.id === id) {

                        return { ...item, quantity: item.quantity + count }

                    } else {

                        return item

                    }                                        
                })

            } else {

                return [ ...currItems, {id, img, title, price, quantity: count} ]
            }

            

        })

    }
    
  return (

    <>
        <div className='detail__data__count'>

            <h2>Cantidad:</h2>

            <button className='detail__data__count__plus' onClick={increment}>+</button>

            <div className='detail__data__count__prop'>{count}</div>

            { count != 1 ?
                <button className='detail__data__count__minus' onClick={decrement}>-</button> : <button disabled className='detail__data__count__minus' onClick={decrement}>-</button>
            }

        </div> 

        <button onClick={addToCart} className='detail__data__btn'>Agregar al Carrito</button>
    </>

  )

}

export default ItemCount