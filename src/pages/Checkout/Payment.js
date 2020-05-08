import React from 'react';
import "../../styles/css/main.css"


const Payment = () => {
    return (
        <div class="container-fluid">
            <h1>CHECK OUT</h1>
            <h2>Selecciona un metodo de pago</h2>
            <form>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputNombre">Nombre</label>
                        <input type="text" class="form-control" id="inputNombre" />
                    </div>

                    <div class="form-group col-md-6">
                        <label for="inputApellidos">Apellidos</label>
                        <input type="text" class="form-control" id="inputApellidos" />
                    </div>
                </div>

                <div class="form-group">
                    <label for="inputDireccion">Direccion</label>
                    <input type="text" class="form-control" id="inputDireccion" placeholder=" Av.Chapultepec 1234" />
                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputCiudad">Ciudad</label>
                        <input type="text" class="form-control" id="inputCiudad" />
                    </div>

                    <div class="form-group col-md-4">
                        <label for="inputEstado">Estado</label>
                        <select id="inputEstado" class="form-control">
                            <option selected>Jalisco...</option>
                            <option>...</option>
                        </select>
                    </div>

                    <div class="form-group col-md-2">
                        <label for="inputCp">Codigo Postal</label>
                        <input type="text" class="form-control" id="inputCp" />
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                        <label class="form-check-label" for="gridCheck">
                            Check me out
                </label>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Comprar</button>
            </form>

        </div>

    )
}


export default Payment;