import React from 'react';

const Order = () => {
    return (
        <div className="container-fluid">
            <div className="card">
                <img className="card-img-top" src="..." alt="Card cap"/>
                <div className="card-body">
                    <h5 className="card-title">Revisa tu cotizacion</h5>
                </div>
                <ul className="list-group1 list-group-flush">
                    <li className="list-group-item">1000 tarjetas</li>
                    <li className="list-group-item">Laminado</li>
                    <li className="list-group-item">Papel couche</li>
                    <li className="list-group-item">Esquinas redondeadas</li>
                    <li className="list-group-item">Envio express</li>
                </ul>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Precio total con I.V.A</li>
                </ul>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Fecha estimada de entrega</li>
                </ul>
            </div>
        </div>
    )
}


export default Order;