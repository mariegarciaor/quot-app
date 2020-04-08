import React from 'react';
import BigLogo from '../../images/BigLogo.jpg';
import {Link} from 'react-router-dom';

const WelcomeUser  = () => {

    return (
        <div>
<<<<<<< Updated upstream
            <h3>¡Hola Usuario¡</h3>
            <img className="#" src={BigLogo} alt="Logo Quot" style={{width: 300, height: 300}}/>
            <p>¿Te gustaria hacer un pedido?</p>
=======
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
>>>>>>> Stashed changes
        </div>
    )
}

export default WelcomeUser;

<<<<<<< Updated upstream
export { UserHome, UserHomeOptions };
=======
>>>>>>> Stashed changes
