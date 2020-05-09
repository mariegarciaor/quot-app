import React from 'react';
import "../../styles/css/main.css"


const Payment = () => {
    return (
        <div className="container-fluid">
            <h1>CHECK OUT</h1>
            <h2>Selecciona un metodo de pago</h2>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputNombre">Nombre</label>
                        <input type="text" className="form-control" id="inputNombre" />
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="inputApellidos">Apellidos</label>
                        <input type="text" className="form-control" id="inputApellidos" />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="inputDireccion">Direccion</label>
                    <input type="text" className="form-control" id="inputDireccion" placeholder=" Av.Chapultepec 1234" />
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCiudad">Ciudad</label>
                        <input type="text" className="form-control" id="inputCiudad" />
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="inputEstado">Estado</label>
                        <select id="inputEstado" className="form-control">
                            <option  defaultValue>Jalisco...</option>
                            <option>...</option>
                        </select>
                    </div>

                    <div className="form-group col-md-2">
                        <label htmlFor="inputCp">Codigo Postal</label>
                        <input type="text" className="form-control" id="inputCp" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" htmlFor="gridCheck">
                            Check me out
                </label>
                    </div>
                </div>
                <p>Payment</p>
                <div className="d-block my3">
                    <div className="form-check custom-radio">
                        <input id="credit" name="metodoPago" type="radio" 
                        className="form-check-input" required />
                        <label className="form-check-label" htmlFor="credito"> Tarjeta de credito </label>
                    </div>
                    <div className="form-check custom-radio">
                        <input id="credit" name="metodoPago" type="radio" 
                        className="form-check-input" required />
                        <label className="form-check-label" htmlFor="debito"> Tarjeta de debito </label>
                    </div>
                    <div className="form-check custom-radio">
                        <input id="credit" name="metodoPago" type="radio" 
                        className="form-check-input" required />
                        <label className="form-check-label" htmlFor="paypal"> Paypal </label>
                    </div>
                </div>
                <div class="row">
          <div class="col-md-6 mb-3">
            <label for="cc-name">Nombre de propietario</label>
            <input type="text" class="form-control" id="cc-name" placeholder="" required=""/>
            <small class="text-muted">Nombre completo como se muestra en la tarjeta</small>
            <div class="invalid-feedback">
              El nombre del propietario es requerido
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <label for="cc-number">Credit card number</label>
            <input type="text" className="form-control" id="cc-number" placeholder="" required=""/>
            <div class="invalid-feedback">
              Credit card number is required
            </div>
          </div>

        </div>
                <button type="submit" className="btn btn-primary">Comprar</button>
            </form>

        </div>

    )
}


export default Payment;