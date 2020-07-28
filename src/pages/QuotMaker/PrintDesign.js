import React from 'react';

const PrintDesign = () => {

    

    return (
        <div>
            <div className="QuoteMaker__Header">
                <h6 className="Header__Step">Paso 6</h6>
                <h1 className="Header__Title">
                ¿Cuentas con un diseño de tus tarjetas?
                </h1>
            </div>

            <div class="progress">
                <div id="printDesign-progress" class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            
            <div className="printSteps-container">
                <div class="row quotemaker-form">
                    <div class="col">
                        <div class="quotemarkerCard card">
                            <img src="https://i.pinimg.com/564x/75/43/71/7543713598978ad54d0d2402114c9705.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title quotemaker-cardtitle">Diseño profesional</h5>
                                <p class="card-text">Selecciona esta opción si tienes tu diseño en archivos: .ai o .pdf de alta calidad..</p>
                                <a href="#" class="stretched-link"></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://i.pinimg.com/564x/2a/32/ff/2a32ffa4caa8e04dbd0680022720245d.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title quotemaker-cardtitle">Idea de diseño</h5>
                                <p class="card-text">Selecciona esta opción si tus archivos son: .ppt, .docx, .jpeg y .png</p>
                                <a href="#" class="stretched-link"></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://i.pinimg.com/564x/0b/20/3d/0b203da05883d6989c2583484bf84b67.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title quotemaker-cardtitle">No tengo diseño</h5>
                                <p class="card-text">¡No te preocupes! Seleccion esta opción y nuestro equipo experto creará un diseño increíble para ti ;)</p>
                                <a href="#" class="stretched-link"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }


export default PrintDesign;