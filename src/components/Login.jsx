import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../main";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            navigate("/home");
            toast('Bienvenido, has iniciado sesion con éxito!', {
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
            const errorCode = setError("Email or password is incorrect");
            const errorMessage = error.message;
          });
    };


  return (

    <div className='loginContainer'>
      
        <div className='loginContainer__divLogin'>
            
            <h1 className='loginContainer__divLogin__h1'>Bienvenido a la App Evil Ink Tattoo Supplies</h1>

            <h2 className='loginContainer__divLogin__h2'>Inicio de Sesión</h2>

            <h3 className='loginContainer__divLogin__h3'>Email</h3>

            <div className='loginContainer__divLogin__divInput'>
                <input onChange={(e) => setEmail(e.target.value)} id='email-address' name='email' type="email" placeholder='Email' className='loginContainer__divLogin__divInput__input'/>
            </div>

            <h3 className='loginContainer__divLogin__h3'>Contraseña</h3>

            <div className='loginContainer__divLogin__divInput'>
                <input onChange={(e) => setPassword(e.target.value)} id='password' name='password' required placeholder='Contraseña' type="password" className='loginContainer__divLogin__divInput__input'/>
            </div>

            {error}

            <div className='loginContainer__divLogin__btn'>                
                <button onClick={onLogin} className='loginContainer__divLogin__btn__prop'>Iniciar Sesión</button>
            </div>

                          
            <Link to={"/singUp"} className='loginContainer__divLogin__btn'>
                <button className='loginContainer__divLogin__btn__prop'>Registrarse</button>
            </Link>
            

        </div>

    </div>

  )

}

export default Login