import React from 'react';
import useForm from '../../hooks/useForm';
import validate from '../../hooks/validateLogIn';
import {Link} from 'react-router-dom';

const Register = () => {
    const { handleChange, handleSubmit, values, errors, } = useForm (submit, validate);

    function submit () {
        console.log('User registered succesfully');
    }

    return (
        <div className="container payment-container">
            <div className="register-titles" >
                <h1 className="title-3">Crea tu cuenta</h1>
                <h2 className="title-2">¡Cotiza tus servicios de impresión en minutos!</h2>
            </div>

            <form className="payment-form">
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
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputNombre">Correo electrónico</label>
                        <input type="text" className="form-control" id="inputNombre" />
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="inputApellidos">Contraseña</label>
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
                <div className="register-button">
                    <Link to={'/WelcomeUser'}><button type="button" class="btn button-1 register-button">Registrate</button></Link>
                </div>                
            </form>
        </div>
    )
}
           
export default Register;
