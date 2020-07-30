import React from 'react';
import design from '../../styles/images/design.jpg'
import designIdea from '../../styles/images/design-idea.jpg'
import noDesign from '../../styles/images/no-design-2.jpg'

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
                            <img src={design} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title quotemaker-cardtitle">Diseño profesional</h5>
                                <p class="card-text">Selecciona esta opción si tienes tu diseño en archivos: .ai o .pdf de alta calidad..</p>
                                <a href="#" class="stretched-link"></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={designIdea} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title quotemaker-cardtitle">Idea de diseño</h5>
                                <p class="card-text">Selecciona esta opción si tus archivos son: .ppt, .docx, .jpeg y .png</p>
                                <a href="#" class="stretched-link"></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={noDesign} class="card-img-top" alt="..."/>
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