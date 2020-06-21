import React from 'react';
import {Link} from 'react-router-dom';
import BigLogo from '../../styles/images/BigLogo.jpg';

const WelcomeNew = () => {

    return (
        <div className="container-fluid wNew">
            <div className="row wNew__Header">
                <h1 className="col-12 Header__Title">¡Bienvenido!</h1>
                <img className="Header__Image" src={ BigLogo } alt="Logo-Quot"/>
                <p className="Header__Text">
                    ¿Te gustaría saber cuánto costarían tus tarjetas de presentación en tan solo 3 minutos?
                </p>
            </div>
            <div className="row wNew__Bottom">
                <Link  to="/Register" className="col-12 col-sm-5 btn Bottom__Register">Registrate</Link>
                <Link to="/Login" className="col-12 mt-2 mt-sm-0 btn offset-sm-2 col-sm-5 border-white text-white Bottom__Login">Inicia Sesión</Link>
                <br/>
                <Link to="/QuoteStart" className="col-12 text-center mt-3 text-white Bottom__Invited">Continua como invitado</Link>
            </div>
        </div>
    )
}


export default WelcomeNew;

