import React from 'react';
import {Printer} from 'react-feather';

const PrintQuantity = () => {

    return (
        <div class="container">
            <div>
                <h3>PASO 4</h3>
                <h1>¿Cuántas tarjetas necesitas?</h1>
            </div>
            
            
            <div class="card" >
                <div>
                    <img src="https://www.colorhexa.com/2cc2d1.png" class="card-img-top" alt="..."/>
                    <Printer /> 
                </div>
                <div class="card-body">
                    <h4 class="card-title">100</h4>
                    <h6>Piezas</h6>
                </div>
            </div>
            
            <div class="card" >
                <div>
                    <img src="https://www.colorhexa.com/2cc2d1.png" class="card-img-top" alt="..."/>
                    <Printer /> 
                </div>
                <div class="card-body">
                    <h4 class="card-title">500</h4>
                    <h6>Piezas</h6>
                </div>
            </div>

            <div class="card" >
                <div>
                    <img src="https://www.colorhexa.com/2cc2d1.png" class="card-img-top" alt="..."/>
                    <Printer /> 
                </div>
                <div class="card-body">
                    <h4 class="card-title">1000</h4>
                    <h6>Piezas</h6>
                </div>
            </div>


            {/* style="width: 40%;" */}
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">40%</div>
            </div>
        </div>
    )
}


export default PrintQuantity;