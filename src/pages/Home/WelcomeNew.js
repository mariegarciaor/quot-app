import React from 'react';
import {Link} from 'react-router-dom';

const WelcomeNew = () => {

    return (
        <div class="welcome-container welcomenew">
            <div className="welcome-content col-xl-4 .col-lg-4 col-sm-8">
                <h3 className="title-1">¡Bienvenido!</h3>
                <p>¿Te gustaría saber cuánto costarían tus tarjetas de presentación en tan solo 3 minutos?</p>
                <hr />
                <div className="Welcomenew-buttons">
                    <Link to="/Register"><button className="btn button-1">Registrate</button></Link>
                    <Link to="/Login"><button className="btn button-1">Inicia Sesión</button></Link>
                </div>
                <br />
                <Link to="/QuoteStart"><p className="link-1" id="continuaComoInvitado">Continua como invitado</p></Link>
            </div>
        </div>
    )
}


export default WelcomeNew;

