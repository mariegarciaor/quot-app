import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/sass/main.scss';


const PaymentSuccess = () => {
    return (
        <div className="container-fluid paymentsuccess">
            <div className="header paymentsuccess-titles">
                <h1 className="title-3">¡Felicidades!</h1>
                <h2 className="title-2">Tu pago se a realizado con éxito</h2>
                <hr />
            </div>
            <div className="body">
                <img className="paymentsucess-img" src="https://dge4uaysoh8oy.cloudfront.net/lp/137/images/Hero-Business-Card-Maker.png" alt="" />
                <h5>Tarjetas de presentación</h5>
                <h3 className="title-4">$500</h3>
                <p>Precio total (con I.V.A)</p>
            </div>
            <div className="paymentsuccess-button">
                <Link className="detalles" to={'/MyOrders'}><button type="button" class="btn button-1">Ver detalle</button></Link>
            </div>
        </div>
    )
}


export default PaymentSuccess;