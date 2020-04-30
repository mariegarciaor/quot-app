import React from "react";
import "../../styles/css/main.css";
import printerSettings from "./Options.js"


const PrintSystem = () => {
    const userSelection = (event)=> {
        console.log("user Selection click");
        let target  = event.target;
        let  idValue = target.getAttribute("id");
        while(!idValue){
            target = target.parentNode;
            idValue = target.getAttribute("id");
            if(target.classList.contains("container")) break;
        }

        console.log(idValue)
    };

    return (
        <div>
            <div>
                <h4 className="title-3 teal">PASO 2</h4>
                <h1 className="title-1 dark-blue">Título de pregunta</h1>
            </div>
            <div className="container">
                <button className="card mb-3" id="Digital" onClick={userSelection}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src="" className="card-img" alt="Digital Print"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4>{printerSettings.system.options[0].selection_name}</h4>
                                <p>{printerSettings.system.options[0].description}</p>
                            </div>
                        </div>
                    </div>
                </button>

                <button className="card mb-3" id="Offset" onClick={userSelection}>
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

                <button className="card mb-3" id="Serigrafia" onClick={userSelection}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src="" className="card-img" alt="Digital Print"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4>Serigrafía</h4>
                                <p>
                                    ¡La más barata!
                                    <br/>
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
