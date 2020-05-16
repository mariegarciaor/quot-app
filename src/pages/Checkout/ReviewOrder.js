import React from 'react';


const ReviewOrder = () => {

    return (
        <div className="container">
           <div class="card">
                <img class="card-img-top" src="..." alt="Card cap"/>
                <div class="card-body">
                    <h5 class="card-title">Revisa tu cotizacion</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">1000 tarjetas</li>
                    <li class="list-group-item">Laminado</li>
                    <li class="list-group-item">Papel couche</li>
                    <li class="list-group-item">Esquinas redondeadas</li>
                    <li class="list-group-item">Envio express</li>
                </ul>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Precio total con I.V.A</li>
                </ul>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Fecha estimada de entrega</li>
                </ul>
                <div>
                    <button type="button" class="btn btn-primary">Continuar con la compra</button>
                </div>
            </div>
        </div>
    )
    }


export default ReviewOrder;