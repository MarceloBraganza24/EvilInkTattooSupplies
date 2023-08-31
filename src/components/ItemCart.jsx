import {useContext} from 'react'
import {CartContext} from '../context/ShoppingCartContext'

const ItemCart = ({id,title,quantity,img,price}) => {

    const {deleteItemCart} = useContext(CartContext);

  return (

    <>

        <div className='itemCart'>

            <div className='itemCart__img'>
                <img className='itemCart__img__prop' src={img} alt="img" />
            </div>

            <div className='itemCart__titleDescrPrice'>
                <div className='itemCart__titleDescrPrice__title'>{title}</div>
                <div className='itemCart__titleDescrPrice__descrPrice'>
                    <div className='itemCart__titleDescrPrice__descrPrice__descr'>Cantidad:{quantity}</div>
                    <div className='itemCart__titleDescrPrice__descrPrice__price'>${price}</div>
                </div>
                <div className='itemCart__titleDescrPrice__subtotal'>Subtotal:{quantity * price}</div>
            </div>

            <div className='itemCart__btn'>
                <div className='itemCart__btn__delete'>
                    <img onClick={()=>deleteItemCart(id)} className='itemCart__btn__delete__prop' src="../src/assets/btnEliminar.png" alt="img" />
                </div>
            </div>

        </div>

    </>

  )

}

export default ItemCart