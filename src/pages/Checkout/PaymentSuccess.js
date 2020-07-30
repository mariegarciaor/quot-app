import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/sass/main.scss';


const PaymentSuccess = () => {
    return (
        <div className="container">
            <div className="header">
                <h1>¡Felicidades!</h1>
                <h2>Tu pago se a realizado con exito</h2>
            </div>
            <div className="body">
                <h5>Producto seleccionado</h5>
                <p>Precio total (con I.V.A)</p>
                <p>status</p>
            </div>
            <div>
                <Link to="/ReviewOrder">Ver detalle</Link>
            </div>
        </div>
    )
}


export default PaymentSuccess;