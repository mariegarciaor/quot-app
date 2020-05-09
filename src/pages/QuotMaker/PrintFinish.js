import React from 'react';
import {Printer} from 'react-feather'

const PrintFinish = () => {

    return (
        <div class="container">
            <div>
                <h3>PASO 5</h3>
                <h1>¿Qué terminado te gustaría?</h1>
            </div>
            
            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="https://www.colorhexa.com/2cc2d1.png" class="card-img" alt="..."/>
                        <Printer />                    
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h4 class="card-title">Bordes redondeados</h4>
                            <p class="card-text">Si buscas un diseño original este acabado ¡te encantará!</p>
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
                            <h4 class="card-title">Plastificado</h4>
                            <p class="card-text">Capa brillosa de refuerzo que brinda mayor duración.</p>
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
                            <h4 class="card-title">Barniz UV</h4>
                            <p class="card-text">Lo mejor de los dos mundos: mate y brillo ¿te animas a probarlo?</p>
                        </div>
                    </div>
                </div>
            </div>

            <a href="/PrintPaper" class="btn btn-primary">Siguiente</a>

            {/* style="width: 50%;" */}
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
            </div>
        </div>
    )
    }


export default PrintFinish;