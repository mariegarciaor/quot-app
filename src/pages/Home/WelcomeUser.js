import React from 'react';
import BigLogo from '../../styles/images/BigLogo.jpg';
import "../../styles/sass/main.scss";
import {Link} from 'react-router-dom';

const WelcomeUser = () => {

    return (
        <div class="container">
            <div className="header">
                <h3>¡Hola Usuario!</h3>
                <img className="#" src={BigLogo} alt="Logo Quot" style={{width: 300, height: 300}}/>
                <p>¿Te gustaria hacer un pedido?</p>
            </div>
            <div className="link">
                <Link to="/QuoteMaker" className="col-12 btn Bottom_cotizar">Cotiza ahora</Link>
                <br/>
                <Link to="/MyOrders" className="">Revisar mis pedidos</Link>
            </div>
        </div>
    )
}

export default WelcomeUser;
