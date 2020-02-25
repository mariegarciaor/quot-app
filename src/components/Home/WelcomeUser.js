import React from 'react';
import BigLogo from '../../images/BigLogo.jpg';
import {Link} from 'react-router-dom';

const UserHome  = () => {

    return (
        <div>
            <h3>¡Hola Usuario¡</h3>
            <img className="#" src={BigLogo} alt="Logo Quot" style={{width: 300, height: 300}}/>
            <p>¿Te gustaria hacer un pedido?</p>
        </div>
    )
}

const UserHomeOptions = () => {
      
      return (
        <div>
            <Link to="/QuoteMaker" className="">Cotiza ahora</Link>
            <br/>
            <Link to="/MyOrders" className="">Revisar mis pedidos</Link>
        </div>
    )
}

export { UserHome, UserHomeOptions };