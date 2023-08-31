import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../main";
import { toast } from "react-toastify";

const SingUp = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
    
        await createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            navigate("/login");
            toast('Te has registrado con éxito, ahora inicia sesión!', {
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
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    };





  return (
    
    <div className='loginContainer'>
      
        <div className='loginContainer__divLogin'>
            
            <h1 className='loginContainer__divLogin__h1'>Bienvenido a la App Evil Ink Tattoo Supplies</h1>

            <h2 className='loginContainer__divLogin__h2'>Registrate aquí mismo</h2>

            <h3 className='loginContainer__divLogin__h3'>Email</h3>

            <div className='loginContainer__divLogin__divInput'>
                <input onChange={(e) => setEmail(e.target.value)} required id="email" value={email} type="email" placeholder="Email" className='loginContainer__divLogin__divInput__input'/>
            </div>

            <h3 className='loginContainer__divLogin__h3'>Contraseña</h3>

            <div className='loginContainer__divLogin__divInput'>
                <input onChange={(e) => setPassword(e.target.value)} value={password} required type="password" placeholder="Contraseña" className='loginContainer__divLogin__divInput__input'/>
            </div>            

            <div className='loginContainer__divLogin__btn'>                
                <button onClick={onSubmit} className='loginContainer__divLogin__btn__prop'>Registrarse</button>
            </div>

        </div>

    </div>

  )

}

export default SingUp