import React from 'react';
import {Printer} from 'react-feather'


const PrintPaper = () => {

    return (
        <div>
            <div className="QuoteMaker__Header">
                <h6 className="Header__Step">Paso 5</h6>
                <h1 className="Header__Title">
                    Escoge un papel que defina tu identidad:
                </h1>
            </div>

            <div class="progress">
                <div id="printPaper-progress" class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            
            <div className="printSteps-container">
                <div class="row quotemaker-form">
                    <div class="col">
                        <div class="quotemarkerCard card">
                            <img src="https://i.pinimg.com/564x/25/a1/26/25a126dae6ccc394230c2e14d4ff99a0.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title quotemaker-cardtitle">Couché</h5>
                                <p class="card-text">Papel súper suave, súper blanco y sin poros ;)</p>
                                <a href="#" class="stretched-link"></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://i.pinimg.com/564x/2a/32/ff/2a32ffa4caa8e04dbd0680022720245d.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title quotemaker-cardtitle">Opalina</h5>
                                <p class="card-text">Si buscar un acabado suave y moderno ¡Esta es tu opción!</p>
                                <a href="#" class="stretched-link"></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://i.pinimg.com/564x/0b/20/3d/0b203da05883d6989c2583484bf84b67.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title quotemaker-cardtitle">Sulfatado</h5>
                                <p class="card-text">¡Tan brillante y duradera que no podrás escribir en ellas! O:</p>
                                <a href="#" class="stretched-link"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }


export default PrintPaper;