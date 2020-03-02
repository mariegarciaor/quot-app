import React from 'react';
import BigLogo from '../../images/BigLogo.jpg';
import {Link} from 'react-router-dom';
import Register from '../../pages/Register';



const Welcome = () => {

    return (
        <div>
            <h1>¡Bienvenido!</h1>
            <img className="#" src={BigLogo} alt="Logo Quot" style={{width: 300, height: 300}}/>
            <p>¿Te gustaría saber cuánto costarían tus tarjetas de presentación en tan solo 3 minutos?</p>
        </div>
    )
}

const WelcomeOptions = () => {

    return (
        <div>
            <Link to="/Register" className="">Registrate</Link>
            <br/>
            <Link to="/WelcomeUser" className="">Inicia Sesión</Link>
            <br/>
            <Link to="/QuoteMaker" className="">Continua como invitado</Link>
        </div>
    )
}

export { Welcome, WelcomeOptions };

