import React from 'react';
import {Link} from 'react-router-dom';
import "../../styles/css/main.css"

const PaymentSuccess = () => {
    return (
        <div className="container">
            <div>
                <h1>¡Felicidades!</h1>
                <h2>Tu pago se a realizado con exito</h2>
            </div>
            <div>
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