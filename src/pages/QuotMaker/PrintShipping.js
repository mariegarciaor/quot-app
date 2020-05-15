import React from 'react';
import {Printer} from 'react-feather';

const PrintShipping = () => {

    return (
        <div class="container">
            <div>
                <h3>PASO 9</h3>
                <h1>¿Qué tipo de envío te gustaría?</h1>
            </div>
            
            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="https://www.colorhexa.com/2cc2d1.png" class="card-img" alt="..."/>
                        <Printer />                    
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h4 class="card-title">Envío regular</h4>
                            <p class="card-text">Entre 4-5 días hábiles recibirás tu pedido.</p>
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
                            <h4 class="card-title">Envío exprés</h4>
                            <p class="card-text">¡En 2 días hábiles están contigo!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="https://www.beautycolorcode.com/84e1ff.png" class="card-img" alt="..."/>
                        <Printer /> 
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h4 class="card-title">Sin envío</h4>
                            <p class="card-text">Puedes recoger tu mismo tu pedido ;)</p>
                        </div>
                    </div>
                </div>
            </div>

            <a href="/ReviewOrder" class="btn btn-primary">Cotiza tu pedido</a>

            {/* style="width: 90%;" */}
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
            </div>
        </div>
        )
}


export default PrintShipping;