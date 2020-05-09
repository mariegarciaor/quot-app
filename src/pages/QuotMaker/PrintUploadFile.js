import React from 'react';

const PrintUploadFile = () => {

    return (
        <div class="container">
            <div>
                <h3>PASO 8</h3>
                <h1>Sube tus archivos</h1>
                <h5>Puedes subir tu diseño, logo,
                     ejemplos, y cualquier contenido que creas que podamos necesitar.</h5>
            </div>
            
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
                </div>
                <div class="custom-file">
                    <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                </div>
            </div>

            <a href="/PrintShipping" class="btn btn-primary">Siguiente</a>

            {/* style="width: 80%;" */}
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
            </div>
        </div>
        )
    }


export default PrintUploadFile;