import React from 'react';
import {Printer} from 'react-feather';

const PrintShipping = () => {

    return (
        <div class="container">
            <div className="QuoteStart__Header">
                <h6 className="Header__Step">PASO 9</h6>
                <h1 className="Header__Title">
                    ¿Qué tipo de envío te gustaría?
                </h1>
            </div>

            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100">25%</div>
            </div>
            
            <div className="quotemaker">
                <div class="row row-cols-1 row-cols-md-3 quotemaker-form">
                    <div class="col mb-4">
                        <div class="quotemarkerCard card">
                            <img src="https://i.pinimg.com/564x/25/a1/26/25a126dae6ccc394230c2e14d4ff99a0.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title quotemaker-cardtitle">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <a href="#" class="stretched-link"></a>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card">
                            <img src="https://i.pinimg.com/564x/2a/32/ff/2a32ffa4caa8e04dbd0680022720245d.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title quotemaker-cardtitle">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <a href="#" class="stretched-link"></a>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card">
                            <img src="https://i.pinimg.com/564x/0b/20/3d/0b203da05883d6989c2583484bf84b67.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title quotemaker-cardtitle">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="stretched-link"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}


export default PrintShipping;