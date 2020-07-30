import React from 'react';

const Order = () => {
    return (
        <div className="container-fluid">
            <div className="card order-card">
                <div className="card-body order-card-info">
                    <h5 className="card-title title-2">Pedido #</h5>
                    <img src="https://cms.cloudinary.vpsvc.com//image/fetch/q_auto:eco,w_700,f_auto,dpr_auto/https://s3-eu-west-1.amazonaws.com/sitecore-media-bucket/prod%2Fen-GB%2F%7B7073E395-6FEC-447B-B5EA-CCE73B79F22B%7D" class="card-img-top revieworder-img" alt="..."/>
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