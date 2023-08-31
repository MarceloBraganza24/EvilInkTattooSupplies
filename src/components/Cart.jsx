import {useContext} from 'react'
import {CartContext} from '../context/ShoppingCartContext'
import ItemCart from './ItemCart';
import { Link } from 'react-router-dom';
import CheckOut from './CheckOut';

const Cart = () => {

  const {cart, deleteAllItemCart} = useContext(CartContext);

  return (

    <>

      <div className='cartContainer'>

            <h1 className='cartContainer__titleBtn'>

                <div className='cartContainer__titleBtn__title'>Carrito de compras</div>

            </h1>


            {
                cart.length > 0 ? 

                <>
                
                <div className='cartContainer__divCart'>
            
                    {
                        cart.map((itemCart) =>{

                            return(

                                <ItemCart
                                id={itemCart.id}
                                img={itemCart.img}
                                title={itemCart.title}
                                price={itemCart.price}
                                quantity={itemCart.quantity}
                                />

                            )
                        })
                    }

                </div> 

                <button onClick={deleteAllItemCart} className='cartContainer__titleBtn__btnVaciarCarrito'>Vaciar Carrito</button>

                <CheckOut />
                
                </> :

                <>
                
                  <h2 className='cartContainer__h2'>No hay productos en el carrito</h2>
                  <Link to={"/Home"} className='cartContainer__linkVolverAlCatalogo'>¡Volver al Catalogo!</Link>

                </>
            }
        
      </div>

    </>

  )

}

export default Cart