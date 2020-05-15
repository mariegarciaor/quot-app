import React from 'react';
import {Link} from 'react-router-dom';
import "../../styles/css/main.css"

const PaymentDeclined = () => {

    return (
        <div className="container">
            <div>
                <h1> !OH NO¡</h1>
                <h2> Hubo un problema al procesar tu pago </h2>
            </div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLY88f6-_nxcyHWFXH_fqhqtjLLYmnGoMv1oXJOF4luqEbA7rW&usqp=CAU" alt="register-image" />
                <button type="button">volver a intentarlo</button>
                <Link to="/Payment">¿O porque no pruebas con Oxxo Pay?</Link>
            </div>
        </div>
    )
}


export default PaymentDeclined;