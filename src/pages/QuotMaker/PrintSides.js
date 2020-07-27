import React from 'react';
import {Printer} from 'react-feather'

const PrintSides = () => {
    return (
        <div>
            <div className="QuoteMaker__Header">
                <h6 className="Header__Step">PASO 2</h6>
                <h1 className="Header__Title">
                    ¿En cuántas caras lo necesitas?
                </h1>
            </div>

            <div class="progress">
                <div id="printSides-progress" class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            
            <div className="printSteps-container">
                <div class="row quotemaker-form">
                    <div class="col">
                        <div class="quotemarkerCard card">
                            <img src="https://i.pinimg.com/564x/25/a1/26/25a126dae6ccc394230c2e14d4ff99a0.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title quotemaker-cardtitle">Una cara</h5>
                                <p class="card-text">Diseño limpio, logotipo y datos en el frente de la tarjeta.</p>
                                <a href="#" class="stretched-link"></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://i.pinimg.com/564x/2a/32/ff/2a32ffa4caa8e04dbd0680022720245d.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title quotemaker-cardtitle">Dos caras</h5>
                                <p class="card-text">¡Doble impacto! Logotipo en frente y datos por detrás.</p>
                                <a href="#" class="stretched-link"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrintSides;