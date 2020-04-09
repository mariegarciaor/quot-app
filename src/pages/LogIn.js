import React from 'react';
import {Link} from 'react-router-dom';
import BigLogo from '../images/BigLogo.jpg';

const LogIn = () => {

    return (
      <div>
              <div>
                <h3>Inicia sesión para continuar </h3>
                <img className="#" src={BigLogo} alt="Logo Quot" style={{width: 300, height: 300}}/>
              </div>
              <div>
              
                <input type="email" placeholder="E-mail"/>
                  <i>''</i>
                <input type="password" placeholder="Password"/>
                  <i>''</i>
                <input type ="checkbox"/>
                    <label>Recordar cuenta</label>
                    
                <Link to="/ComingSoon">¿Olvidaste tu contraseña?</Link>
            
                <Link to="/WelcomeUse">Inicia sesión</Link>
      
                <p>¿No tienes cuenta?</p>
                <Link to="/Register" className="">Registrate</Link>
            </div>
      </div>
    )
}

export default LogIn;