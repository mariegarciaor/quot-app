import React from 'react';

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
           <h3>Inicia sesión para continuar </h3>
           <img src="path/to/image" alt="session "/>

           <div>
               <i>''</i>
               <h5>Correo electronico</h5>
               <input type="email"/>
               <h5>Contraseña</h5>
               <input type="Password"/>
               <i></i>
 
               <Link to="/WelcomeUser"></Link>
               <a className="btn btn-primary" href="/WelcomeUser" role="button">Iniciar sesion</a>


               <Link to="/">¿Olvidaste tu contraseña?</Link>


               <input type ="checkbox"/><label>Recordar</label>

               <p>¿No tienes cuenta?</p>
               <Link to="/Register" className="">Registrate</Link>
               

           </div>
>>>>>>> Stashed changes
        </div>
    )
    }


export default LogIn;