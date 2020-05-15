import React from 'react';
import {Printer} from 'react-feather';

const PrintDesign = () => {

    return (
        <div class="container">
            <div>
                <h3>PASO 7</h3>
                <h1>¿Cuentas con un diseño de tus tarjetas?</h1>
            </div>
            
            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="https://www.colorhexa.com/2cc2d1.png" class="card-img" alt="..."/>
                        <Printer />                    
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h4 class="card-title">Diseño profesional</h4>
                            <p class="card-text">Solo archivos: .ai y .pdf de alta calidad.</p>
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
                            <h4 class="card-title">Idea de diseño</h4>
                            <p class="card-text">Aquí si entran: .ppt, .docx, .jpeg y .png</p>
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
                            <h4 class="card-title">No tengo diseño</h4>
                            <p class="card-text">¡No te preocupes! Tenemos un equipo experto que creará algo increíble para ti ;)</p>
                        </div>
                    </div>
                </div>
            </div>

            <a href="/PrintUploadFile" class="btn btn-primary">Siguiente</a>

            {/* style="width: 70%;" */}
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
            </div>
        </div>
        )
    }


export default PrintDesign;