import React from 'react';
import {Printer} from 'react-feather';

const PrintQuantity = () => {

    return (
        <div>
            <div className="QuoteMaker__Header">
                <h6 className="Header__Step">Paso 3</h6>
                <h1 className="Header__Title">
                    ¿Cuántas tarjetas necesitas?
                </h1>
            </div>

            <div class="progress">
                <div id="printQuantity-progress" class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            
            <div className="printSteps-container">
                <div class="row quotemaker-form">
                    <div class="col">
                        <div class="quotemarkerCard card">
                            <img src="https://i.pinimg.com/564x/25/a1/26/25a126dae6ccc394230c2e14d4ff99a0.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title quotemaker-cardtitle">100 piezas</h5>
                                <p class="card-text">Duran más de 4 meses entregando en promedio 1 por día.</p>
                                <a href="#" class="stretched-link"></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://i.pinimg.com/564x/2a/32/ff/2a32ffa4caa8e04dbd0680022720245d.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title quotemaker-cardtitle">500 piezas</h5>
                                <p class="card-text">Cubren hasta 6 meses de duración entregando hasta 4 por día.</p>
                                <a href="#" class="stretched-link"></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://i.pinimg.com/564x/0b/20/3d/0b203da05883d6989c2583484bf84b67.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title quotemaker-cardtitle">1000 piezas</h5>
                                <p class="card-text">Ideal para personas de áreas comerciales o que entregan más de 5 tarjetas al día.</p>
                                <a href="#" class="stretched-link"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default PrintQuantity;