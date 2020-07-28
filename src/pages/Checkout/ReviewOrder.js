import React from 'react';
import "../../styles/sass/main.scss"
import {Link} from "react-router-dom";
import Order from '../Orders/OrderCard'

const ReviewOrder = () => {

    return (
        <div className="container">
           <Order />
            <div className="button">
                <Link to={'/payment'}><button type="button" class="btn button-1">Continuar con la compra</button></Link>
            </div>
        </div>
    )
    }


export default ReviewOrder;