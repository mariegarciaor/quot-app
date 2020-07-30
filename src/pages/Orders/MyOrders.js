import React from "react";
import Order from '../Orders/OrderCard'
import {Link} from 'react-router-dom'

const MyOrders = () => {
  return (
    <div className="container myorders" >
      <div className="card-body">
          <h5 className="card-title title-1">Revisa tus ordenes</h5>
      </div>
      <Order />
      <Order />
      <Order />
      <div className="myorders-button">
          <Link to={'/QuotStart'}><button type="button" class="btn button-1">Cotiza otro producto</button></Link>
      </div>
    </div>
  );
};
export default MyOrders;
