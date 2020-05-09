import React from "react";
import "../../styles/css/main.css";
import {Printer} from 'react-feather'


const PrintSystem = () => {
    return (
        <div class="container">
            <div>
                <h3>PASO 2</h3>
                <h1>Escoge el sistema de impresión</h1>
            </div>
            
            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="https://www.colorhexa.com/2cc2d1.png" class="card-img" alt="..."/>
                        <Printer />                    
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h4 class="card-title">Digital</h4>
                            <p class="card-text">¡La más barata! Ideal para paquetes de 100 y 500 piezas.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="https://colorate.azurewebsites.net/SwatchColor/54A6DE" class="card-img" alt="..."/>
                        <Printer /> 
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h4 class="card-title">Offset</h4>
                            <p class="card-text">Perfecto para pedidos de 1000 piezas.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="https://www.beautycolorcode.com/84e1ff.png" class="card-img" alt="..."/>
                        <Printer /> 
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h4 class="card-title">Serigrafia</h4>
                            <p class="card-text">Realza tus tarjetas de presentación con barniz brillante en logos.</p>
                        </div>
                    </div>
                </div>
            </div>

            <a href="/PrintSides" class="btn btn-primary">Siguiente</a>

            {/* style="width: 20%;" */}
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">20%</div>
            </div>
        </div>
    )
}

// const printSystem = () => {
//     const userSelection = (event)=> {
//         console.log("user Selection click");
//         let target  = event.target;
//         let  idValue = target.getAttribute("id");
//         while(!idValue){
//             target = target.parentNode;
//             idValue = target.getAttribute("id");
//             if(target.classList.contains("container")) break;
//         }

//         console.log(idValue)
//     };

//     return (
//         <div>
//             <div>
//                 <h4 className="title-3 teal">PASO 2</h4>
//                 <h1 className="title-1 dark-blue">Título de pregunta</h1>
//             </div>
//             <div className="container">
//                 <button className="card mb-3" id="Digital" onClick={userSelection}>
//                     <div className="row no-gutters">
//                         <div className="col-md-4">
//                             <img src="" className="card-img" alt="Digital Print"/>
//                         </div>
//                         <div className="col-md-8">
//                             <div className="card-body">
//                                 <h4>{printerSettings.system.options[0].selection_name}</h4>
//                                 <p>{printerSettings.system.options[0].description}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </button>

//                 <button className="card mb-3" id="Offset" onClick={userSelection}>
//                     <div className="row no-gutters">
//                         <div className="col-md-4">
//                             <img src="" className="card-img" alt="Digital Print"/>
//                         </div>
//                         <div className="col-md-8">
//                             <div className="card-body">
//                                 <h4>Offset</h4>
//                                 <p>Perfecto para pedidos de 1000 piezas</p>
//                             </div>
//                         </div>
//                     </div>
//                 </button>

//                 <button className="card mb-3" id="Serigrafia" onClick={userSelection}>
//                     <div className="row no-gutters">
//                         <div className="col-md-4">
//                             <img src="" className="card-img" alt="Digital Print"/>
//                         </div>
//                         <div className="col-md-8">
//                             <div className="card-body">
//                                 <h4>Serigrafía</h4>
//                                 <p>
//                                     ¡La más barata!
//                                     <br/>
//                                     Ideal para paquetes de 100 y 500 piezas.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </button>
//             </div>
//         </div>
//     );
// };

export default PrintSystem;
