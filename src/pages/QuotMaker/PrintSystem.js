import React from "react";

const PrintSystem = () => {
    return (
        <div>
            <div className="QuoteMaker__Header">
                <h6 className="Header__Step">Paso 1</h6>
                <h1 className="Header__Title">
                    Selecciona un sistema de impresión:
                </h1>
            </div>

            <div class="progress">
                <div id="printSystem-progress" class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            
            <div className="printSteps-container">
                <div class="row quotemaker-form">
                    <div class="col">
                        <div class="quotemarkerCard card">
                            <img src="https://i.pinimg.com/564x/25/a1/26/25a126dae6ccc394230c2e14d4ff99a0.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title quotemaker-cardtitle">Digital</h5>
                                <p class="card-text">¡La más barata! Ideal para paquetes de 100 y 500 piezas.</p>
                                <a href="#" class="stretched-link"></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://i.pinimg.com/564x/2a/32/ff/2a32ffa4caa8e04dbd0680022720245d.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title quotemaker-cardtitle">Offset</h5>
                                <p class="card-text">Perfecto para pedidos de 1000 piezas.</p>
                                <a href="#" class="stretched-link"></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://i.pinimg.com/564x/0b/20/3d/0b203da05883d6989c2583484bf84b67.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title quotemaker-cardtitle">Serigrafia</h5>
                                <p class="card-text">Frente de la tarjeta. Logotipo y datos completos juntos.</p>
                                <a href="#" class="stretched-link"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                   
        </div>
    )
}


export default PrintSystem;
