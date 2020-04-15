import React from 'react';
import {Link} from 'react-router-dom';
import BigLogo from '../../styles/images/BigLogo';

const WelcomeNew = () => {

    return (
        <div>
            <h1>¡Bienvenido!</h1>
            <img className="#" src={ BigLogo } alt="Logo-Quot" style={{width: 300, height: 300}}/>
            <p>¿Te gustaría saber cuánto costarían tus tarjetas de presentación en tan solo 3 minutos?</p>
        </div>
        <div>
            <Link to="/Register" className="">Registrate</Link>
            <br/>
            <Link to="/Login" className="">Inicia Sesión</Link>
            <br/>
            <Link to="/QuoteMaker" className="">Continua como invitado</Link>
        </div>
    )
}


export default WelcomeNew;

