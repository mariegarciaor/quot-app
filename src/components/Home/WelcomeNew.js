import React from 'react';
import {Link} from 'react-router-dom';
<<<<<<< Updated upstream


=======
import BigLogo from '../../images/BigLogo.jpg';
>>>>>>> Stashed changes

const Welcome = () => {

    return (
        <div>
            <h1>¡Bienvenido!</h1>
            <img className="#" src={ BigLogo } alt="Logo-Quot" style={{width: 300, height: 300}}/>
            <p>¿Te gustaría saber cuánto costarían tus tarjetas de presentación en tan solo 3 minutos?</p>
        </div>
    )
}

const WelcomeOptions = () => {

    return (
        <div>
            <Link to="/Register" className="">Registrate</Link>
            <br/>
            <Link to="/LogIn" className="">Inicia Sesión</Link>
            <br/>
            <Link to="/QuoteMaker" className="">Continua como invitado</Link>
        </div>
    )
}

export { Welcome, WelcomeOptions };

