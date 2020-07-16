import React from "react";
import quotMakerInfo from './Options'

const PrintSystem = () => {

    const servicio = quotMakerInfo.system

    return (
        <div className="container quotmaker-division QuotemakerContainer">

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
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100">25%</div>
            </div>
        
            <div className="quotemaker">
                <h5 className="quotmaker-sectionTitle">Escoge el sistema de impresión</h5>
                    {/* inicio grid */}
                <div class="row row-cols-1 row-cols-md-3 quotemaker-form">
                    <div class="col mb-4">
                        <div class="quotemarkerCard card">
                            <img src="https://cdn.thewirecutter.com/wp-content/uploads/2020/03/laser-printers-2020-lowres-9946-630x420.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title quotemaker-cardtitle">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <a href="#" class="stretched-link"></a>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card">
                            <img src="https://dam.which.co.uk/6d22daf4-18cb-4348-9d30-29ce186d6da3.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title quotemaker-cardtitle">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <a href="#" class="stretched-link"></a>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card">
                            <img src="https://www.rscsbd.com/image/cache/catalog/journal3/items/PRINTER/HP-500x500.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title quotemaker-cardtitle">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="stretched-link"></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* termina grid */}
                <div className="quotmaker-nextButton">
                    <button type="button" class="btn btn-info ">← Anterior</button>
                    <button type="button" class="btn btn-info">Siguiente →</button>
                </div>
            </div>
        </div> 
    )
}

export default PrintSystem;
