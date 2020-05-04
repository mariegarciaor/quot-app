import React from 'react';
import {Printer} from 'react-feather';

const PrintShipping = () => {

    return (
        <div class="container">
            <div>
                <h3>PASO 3</h3>
                <h1>¿En cuántas caras lo necesitas?</h1>
            </div>
            
            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="https://www.colorhexa.com/2cc2d1.png" class="card-img" alt="..."/>
                        <Printer />                    
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h4 class="card-title">Una cara</h4>
                            <p class="card-text">Diseño limpio, logotipo y datos en el frente de la tarjeta.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="https://colorate.azurewebsites.net/SwatchColor/54A6DE" class="card-img" alt="..."/>
                        <Printer /> 
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h4 class="card-title">Dos caras</h4>
                            <p class="card-text">¡Doble impacto! Logotipo en frente y datos por detrás.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* style="width: 25%;" */}
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
            </div>
        </div>
    )
}


export default PrintShipping;