import React from "react";
import "../../styles/css/main.css";
// import "../Orders/OrderCard";

// const MyOrders = () => {
//   return (
//     <div>
//       <orderCard title="Order1" content="" />
//       <orderCard title="Order2" content="" image={myImage} />
//     </div>
//   );
// };

const MyOrders = () => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Producto seleccionado</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Precio total (con I.V.A)</li>
          <li className="list-group-item">$300</li>
          <li className="list-group-item">Status</li>
          <li className="list-group-item">En producción</li>
        </ul>
        <div className="card-body">
          <a href="#" className="Ver detalle">
            Ver detalle
          </a>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Producto seleccionado</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Precio total (con I.V.A)</li>
          <li className="list-group-item">$300</li>
          <li className="list-group-item">Status</li>
          <li className="list-group-item">En producción</li>
        </ul>
        <div className="card-body">
          <a href="#" className="Ver detalle">
            Ver detalle
          </a>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Producto seleccionado</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Precio total (con I.V.A)</li>
          <li className="list-group-item">$300</li>
          <li className="list-group-item">Status</li>
          <li className="list-group-item">En producción</li>
        </ul>
        <div className="card-body">
          <a href="#" className="Ver detalle">
            Ver detalle
          </a>
        </div>
      </div>
    </div>
  );
};
export default MyOrders;
