import {useContext} from 'react'
import {CartContext} from '../context/ShoppingCartContext'
import { Link } from 'react-router-dom'
import { signOut } from "firebase/auth";
import { auth } from "../main";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const CartWidget = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth)
          .then(() => {
            navigate("/login");
            toast('Hasta la próxima, Gracias por visitar nuestra App', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
          })
          .catch((error) => {
          });
      };

    const {qtyProducts} = useContext(CartContext)

    return (
        
        <div className='divCartWidget'>

            <div className='divCartWidget__grid'>

                <h2 onClick={handleLogout} className='divCartWidget__grid__logOut'>Cerrar Sesión</h2>

                <Link className='divCartWidget__grid__img' to={"/cart"}>
                    <img src="../src/assets/cartWidget.png" alt="cartWidget" className='divCartWidget__grid__img__prop'/>
                </Link>

                <div className='divCartWidget__grid__number'>
                    <span className='divCartWidget__grid__number__prop'>{qtyProducts}</span>
                </div>

            </div>

        </div>

    )

}

export default CartWidget