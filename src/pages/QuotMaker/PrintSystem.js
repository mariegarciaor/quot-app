import React from "react";
import quotMakerInfo from './Options'

const PrintSystem = () => {

    const servicio = quotMakerInfo.system

    return (
        <div className="container quotmaker-division QuotemakerContainer">
            {/* <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100">25%</div>
            </div> */}

            {/* 
            Producto
            Impresión
            Caras
            Cantidad
            Terminado
            Papel
            Diseño
            */}

            <div className="QuoteStart__Header">
                <h6 className="Header__Step"> Paso 2 </h6>
                <h1 className="Header__Title">
                    Ingresa las caracteristicas de tu producto
                </h1>
            </div>
            <div className="row">
                <div className="col-sm-8 col-md-8 col-lg-8 quotemaker-form">
                    <h5>Escoge el sistema de impresión</h5>
                    <div class="card">
                        <a href="#" class="btn btn-primary card-body">
                            <div class="card-img"></div>
                            <div class="card-content">
                                <h5 class="card-title">Card with stretched link</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>               
                            </div>
                        </a>
                    </div>

                </div>
                <div className="col-sm-4 col-md-4 col-lg-4 quotmaker-dashboard">
                    <h4>Aquí va el dash</h4>
                </div>
            </div>
        </div>  
    )
}

export default PrintSystem;
