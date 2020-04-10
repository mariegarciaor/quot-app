import React from 'react';
import {Link} from 'react-router-dom';


const Register = () => {

    return (
        <div>
             <div>
                <h2>Registra tus datos para crear tu cuenta</h2>
                <img></img>
            </div>

            <div>
                <h4>Informacion personal</h4>
                <h5>Nombres</h5>
                <input type="text"/>
                <h5>Apellidos</h5>
                <input type="text"/>
                <h5>Empresa</h5>
                <input type="text"/>
            </div>

            <div>
                <h4>Informacion de contacto</h4>
                <h5>telefono</h5>
                <input type="tel"/>
                <h5>Correo electronico</h5>
                <input type="email"/>
                <h5>Contraseña</h5>
                <input type="password"/>
                <h5>Confirma contraseña</h5>
                <input type="password"/>
            </div>

            <div>
                <h4>Direccion</h4>
                <h5>calle y numero</h5>
                <input type="text"/>
                <h5>Colonia</h5> <h5>Codigo postal</h5>
                <input type="text"/> <input type="text"/>
                <h5>Ciudad</h5>
                <input type="text"/>
            </div>
 
            <div>
                <button>Registrate</button>
                <p>¿Ya tienes una cuenta?</p>
                <Link to="/LogIn" ClassName=""></Link>
            </div>
        </div>
    )
}


export default Register;