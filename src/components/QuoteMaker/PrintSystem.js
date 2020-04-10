import React from "react";
import "../../pages/css/main.css";
import { ReactComponent as Digital} from '../../images/digital.svg';
import printerSettings from "../QuoteMaker/Options.js"

/*
    return (
        <div className="container">
           <div className="card mb-3">
               <div className="row no-gutters">
                   <div className="col-md-4">
                       <Digital className="card-img" />
                   </div>
                   <div className="col-md-8">
                       <div className="card-body">
                           <h4>Digital</h4>
                           <p>¡La más barata!<br />
                           Ideal para paquetes de 100 y 500 piezas.</p>
                       </div>
                   </div>
               </div>
           </div>
           <div className="card mb-3">
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
           </div>
           <div className="card mb-3">
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
           </div>
        </div>
=======
//state, setState
const userSelection = () => {
    getElementById

    return(
        printerSettings.system.options[0].cost

<Option
  data={printerSettings.system.options.selection_name}
  onClick={() => userSelection(printerSettings.system.options.selection_name)}
/>;

const Option = (props) => {
  props.data.selection_name

return(
    <div>
        { printerSettings.system.options.map((selection) => {
            <Option data={selection} />
        }) }
    </div>
)
}
*/


const PrintSystem = () => {
  return (
    <div>
      <div>
        <h4 className="title-3 teal">PASO 2</h4>
        <h1 className="title-1 dark-blue">Título de pregunta</h1>
      </div>
      <div className="container">
        <button className="card mb-3" id="Digital" onClick="userSelection()" >
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src="" className="card-img" alt="Digital Print" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h4>{printerSettings.system.options[0].selection_name}</h4>
                <p>{printerSettings.system.options[0].description}</p>
              </div>
            </div>
          </div>
        </button>

        <button className="card mb-3" id="Offset" onClick="userSelection()">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src="" className="card-img" alt="Digital Print" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h4>Offset</h4>
                <p>Perfecto para pedidos de 1000 piezas</p>
              </div>
            </div>
          </div>
        </button>

        <button  className="card mb-3" id="Serigrafia" onClick="userSelection()">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src="" className="card-img" alt="Digital Print" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h4>Serigrafía</h4>
                <p>
                  ¡La más barata!
                  <br />
                  Ideal para paquetes de 100 y 500 piezas.
                </p>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default PrintSystem;
