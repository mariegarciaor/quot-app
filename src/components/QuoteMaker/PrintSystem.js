import React from 'react';
import "../../pages/css/main.css";



const PrintSystem = () => {


    return (
       <div>
            <div>
                <h4 className="title-3 teal">PASO 2</h4>
                <h1 className="title-1 dark-blue">Título de pregunta</h1>
            </div>
            <div className="container">
           <button className="card mb-3">
               <div className="row no-gutters">
                   <div className="col-md-4">
                       <img src="" className="card-img" alt="Digital Print"/>
                   </div>
                   <div className="col-md-8">
                       <div className="card-body">
                             <h4>Digital</h4>
                           <p>¡La más barata!<br />
                           Ideal para paquetes de 100 y 500 piezas.</p>
                       </div>
                   </div>
               </div>
           </button>
           <button className="card mb-3">
               <div className="row no-gutters">
                   <div className="col-md-4">
                       <img src="" className="card-img" alt="Digital Print"/>
                   </div>
                   <div className="col-md-8">
                       <div className="card-body">
                           <h4>Offset</h4>
                           <p>Perfecto para pedidos de 1000 piezas</p>
                       </div>
                   </div>
               </div>
           </button>
           <button className="card mb-3">
               <div className="row no-gutters">
                   <div className="col-md-4">
                       <img src="" className="card-img" alt="Digital Print"/>
                   </div>
                   <div className="col-md-8">
                       <div className="card-body">
                           <h4>Serigrafía</h4>
                           <p>¡La más barata!<br />
                           Ideal para paquetes de 100 y 500 piezas.</p>
                       </div>
                   </div>
               </div>
           </button>
        </div>
       </div>        
            
    )
    }


export default PrintSystem;