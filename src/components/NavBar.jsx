import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (

    <div className='navBar'>

        <div className='navBar__lLC'>

            <LoginSingUp/>

            <LogoTitle/>

            <CartWidget/>

        </div>

        <div className='navBar__b'>

            <Bar/>

        </div> 

    </div>

  ) 

}

export default NavBar

const LoginSingUp = () => {

    return (

        <div className='navBar__lLC__divLoginSingUp'>

            <Link to={"/login"} className='navBar__lLC__divLoginSingUp__login'>Iniciar Sesión</Link>
            <Link to={"/singUp"} className='navBar__lLC__divLoginSingUp__singUp'>Registrarse</Link>

        </div>


    )

}

const LogoTitle = () => {

    return (

        <div className='navBar__lLC__divTitleLogo'>

            <div className='navBar__lLC__divTitleLogo__logo'>
                <Link to={"/home"}>
                    <img src="../src/assets/logoEvilTattoo.ico" alt="logoEvilTattoo.ico" className='navBar__lLC__divTitleLogo__logo__prop'/>
                </Link>
            </div>
            <h1 className='navBar__lLC__divTitleLogo__title'>Evil Ink Tattoo Supplies</h1>

        </div>

    )

}

const Bar = () => {
    

    return (

        <div className='navBar__b__divBar'>

            <div></div>

            <div className='navBar__b__divBar__btns'>

                <Link to={"/home"} className='navBar__b__divBar__btns__inicio'>Inicio</Link>

                <Link to={"/ulCategories"} className='navBar__b__divBar__btns__categories'>
                    
                    <button className='navBar__b__divBar__btns__categories__btn'>Productos</button>
                    <span className='navBar__b__divBar__btns__categories__v'>v</span>
                     
                </Link>

                <Link to={"/contact"} className='navBar__b__divBar__btns__contacto'>Contacto</Link>

            </div>            

            <div></div>

        </div>

    )

}