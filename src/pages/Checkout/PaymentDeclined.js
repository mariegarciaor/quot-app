import React from 'react';
import {Link} from 'react-router-dom';


const PaymentDeclined = () => {

    return (
        <div className="container-fluid pDeclined">
            <div className="row text-white mt-2 pDeclined__Header">
                <h1 className="col-12 text-center"> !OH NO¡</h1>
                <h3 className="col-12 text-center"> Hubo un problema al procesar tu pago </h3>
            </div>
            <div className="pDeclined__Body">
                <img className="Body__Image"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLY88f6-_nxcyHWFXH_fqhqtjLLYmnGoMv1oXJOF4luqEbA7rW&usqp=CAU"
                     alt="register" />
                <button className="Body__Tryagain"
                    type="button">
                    volver a intentarlo
                </button>
                <Link className="Body__Oxxopay"
                    to="/Payment">¿O porque no pruebas con Oxxo Pay?</Link>
            </div>
        </div>
    )
}


export default PaymentDeclined;