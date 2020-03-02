import React from 'react';
import {Link} from 'react-router-dom';
import BigLogo from '../images/BigLogo.jpg';

const LogIn = () => {

    return (
        <div>
<<<<<<< Updated upstream
           <h1>Prueba Login</h1>
=======
            <div>
                <h3>Inicia sesión para continuar </h3>
                <img className="#" src={BigLogo} alt="Logo Quot" style={{width: 300, height: 300}}/>
            </div>

            <div>
                <input type="email" placeholder="E-mail"/>
                <input type="password" placeholder="Password"/>
                
                <input type ="checkbox"/>
                    <label>Recordar cuenta</label>
                    
                <Link to="/ComingSoon">¿Olvidaste tu contraseña?</Link>
                

                <Link to="/QuoteMaker">Inicia sesión</Link>
                <p>¿No tienes cuenta?</p>
                <Link to="/Register" className="">Registrate</Link>
            </div>
>>>>>>> Stashed changes
        </div>
    )
    }


export default LogIn;