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
                <input type="password" placeholder="Password"/>
                
                <input type ="checkbox"/>
                    <label>Recordar cuenta</label>
                    
                <Link to="/ComingSoon">¿Olvidaste tu contraseña?</Link>
                

                <Link to="/QuoteMaker">Inicia sesión</Link>
                <p>¿No tienes cuenta?</p>
                <Link to="/Register" className="">Registrate</Link>
            </div>
           <h3>Inicia sesión para continuar </h3>
           <img src="path/to/image"/>


           <div>
               <i></i>
               <h5>Correo electronico</h5>
               <input type="email"/>
               <h5>Contraseña</h5>
               <input type="Password"/>
               <i></i>
 
               <link></link>
               <button>inicia sesión</button>
               <a class="btn btn-primary" href="/QuoteMarket" role="button">Link</a>


               <link>¿Olvidaste tu contraseña?</link>


               <input type ="checkbox"/><label>Recordar</label>

               <p>¿No tienes cuenta?</p>
               <Link to="/Register" className="">Registrate</Link>
               

           </div>
        </div>
    )
    }

export default LogIn;