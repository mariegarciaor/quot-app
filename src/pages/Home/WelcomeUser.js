import React from 'react';
import BigLogo from '../../styles/images/BigLogo.jpg';
import {Link} from 'react-router-dom';

const WelcomeUser = () => {

    return (
        <div>
            <div>
                <h3>¡Hola</h3>
                <img className="#" src={BigLogo} alt="Logo Quot" style={{width: 300, height: 300}}/>
                <p>¿Te gustaria hacer un pedido?</p>
            </div>
            <div>
                <Link to="/QuoteMaker" className="">Cotiza ahora</Link>
                <br/>
                <Link to="/MyOrders" className="">Revisar mis pedidos</Link>
            </div>
        </div>
    )
}

export default WelcomeUser;
