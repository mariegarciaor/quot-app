import React from 'react';

const LogIn = () => {

    return (
        <div>
           <h3>Inicia sesión para continuar </h3>
           <img src="path/to/image" />


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