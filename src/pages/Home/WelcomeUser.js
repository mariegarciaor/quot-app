import React from 'react';
import "../../styles/sass/main.scss";
import {Link} from 'react-router-dom';

const WelcomeUser = () => {

    return (
        <div class="welcome-container">
            {/* <div className="welcome-cover col-8">
                <img id="welcome-img" src="https://carddsgn.com/wp-content/uploads/2018/09/clevyr-business-cards-ar.gif" alt="Logo Quot"/>
            </div> */}
            <div className="welcome-content col-xl-4 .col-lg-4 col-sm-8">
                <img id="welcomeuser-img" src="https://diyshutters.co/wp-content/uploads/2019/06/r0bsDqL.png" alt="..." ></img>
                <h3 className="title-1">¡Hola Usuario!</h3>
                <p>¿Te gustaria cotizar un pedido?</p>
                <hr />
                <Link to="/QuotStart"><button className="btn button-1">Cotiza ahora</button></Link>
                <br />
                <Link to="/MyOrders"><p className="link-1" id="revisar-pedidos">Revisar mis pedidos</p></Link>
            </div>
        </div>
    )
}

export default WelcomeUser;
