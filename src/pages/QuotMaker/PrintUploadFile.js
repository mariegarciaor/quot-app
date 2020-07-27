import React from 'react';

const PrintUploadFile = () => {

    return (
        <div>
            <div className="QuoteMaker__Header">
                <h6 className="Header__Step"> Paso 8 </h6>
                <h1 className="Header__Title">
                Sube tus archivos:
                </h1>
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
        </div>
        )
    }


export default PrintUploadFile;