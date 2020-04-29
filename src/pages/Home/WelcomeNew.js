import React from 'react';
import {Link} from 'react-router-dom';

const WelcomeNew = () => {

    return (
        <div>
            <div>
                <h1>¡Bienvenido!</h1>
                <p>Cotiza tus tarjetas de presentación ¡en menos de 3 minutos!</p>
            </div>
            <div>
                <Link to="/Register" className="">Registrate</Link>
                <br/>
                <Link to="/Login" className="">Inicia Sesión</Link>
                <br/>
                <Link to="/QuoteMaker" className="">Continua como invitado</Link>
            </div>
        </div> 
    )
}

export default WelcomeNew;

