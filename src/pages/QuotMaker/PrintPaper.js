import React from 'react';
import {Printer} from 'react-feather'


const PrintPaper = () => {

    return (
        <div class="container">
            <div>
                <h3>PASO 6</h3>
                <h1>Ahora escoge un papel que defina tu identidad</h1>
            </div>
            
            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="https://www.colorhexa.com/2cc2d1.png" class="card-img" alt="..."/>
                        <Printer />                    
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h4 class="card-title">Couché</h4>
                            <p class="card-text">Papel súper suave, súper blanco y sin poros ;)</p>
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
                            <h4 class="card-title">Opalina</h4>
                            <p class="card-text">Si buscar un acabado suave y moderno ¡Esta es tu opción!</p>
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
                            <h4 class="card-title">Sulfatado</h4>
                            <p class="card-text">¡Tan brillante y duradera que no podrás escribir en ellas! O:</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* style="width: 60%;" */}
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
            </div>
        </div>
        )
    }


export default PrintPaper;