import React from 'react';
import {Link} from 'react-router-dom';

const Register = () => {

    return (
        <div class="container">
            <div>
                <h1>¡Bienvenido!</h1>
                <h3>Registra tus datos para crear tu cuenta</h3>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLY88f6-_nxcyHWFXH_fqhqtjLLYmnGoMv1oXJOF4luqEbA7rW&usqp=CAU" alt="register"></img>
            </div>
            <form>
                <div className="form-row">
                    <h3>Texto</h3>
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="inputPassword4"/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                <div className="form-group">
                    <label for="inputAddress2">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" className="form-control" id="inputCity"/>
                    </div>
                    <div className="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select id="inputState" className="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                    </div>
                    <div className="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                    <label className="form-check-label" for="gridCheck">
                        Check me out
                    </label>
                    </div>
                </div>
                <Link to={'/QuotStart'}><button type="button" className="btn button-1">Registrarse</button></Link>
            </form>
        </div>
    )
}
           
export default Register;

