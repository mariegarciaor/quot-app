import React from 'react';
import "../../styles/sass/main.scss"
import {Link} from "react-router-dom";
import Order from '../Orders/OrderCard'

const ReviewOrder = () => {

    return (
        <div className="container-fluid">
            <div className="container revieworder">
                <div className="card-body">
                    <h5 className="card-title title-1">Revisa tu pedido</h5>
                </div>
                <Order />                
            </div>
            <div className="order-button">
                <Link to={'/payment'}><button type="button" class="btn button-1">Continuar con la compra</button></Link>
            </div>
        </div>
    )
    }


export default ReviewOrder;