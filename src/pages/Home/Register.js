import React from 'react';
import {Link} from 'react-router-dom';

const Register = () => {

    return (
        <div class="container-fluid register-page">
            <div className="register-content">
                <div className="register-titles">
                    <h1>¡Bienvenido!</h1>
                    <h3>Registra tus datos para crear tu cuenta</h3>
                    <img className="register-logo" src="https://images.squarespace-cdn.com/content/v1/598eaf83d7bdce2890ccead1/1538394638797-OQHCRKZDNE3DAQK9Q090/ke17ZwdGBToddI8pDm48kPqQfq0L3n3wpHIsRapTfg8UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcqDw7KJ9JLVnFyPtQWXPW_fGUEh2BflkccjBxWRTaY_RcTR0hSuOiDKazX4Abyxu7/business-card-gif_2.gif?format=1500w" alt="register"></img>
                </div>
                <form  className="register-form">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="inputEmail4">Nombre</label>
                        <input type="email" class="form-control" id="inputEmail4"/>
                        </div>
                        <div class="form-group col-md-6">
                        <label for="inputPassword4">Apellido</label>
                        <input type="password" class="form-control" id="inputPassword4"/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" id="inputEmail4"/>
                        </div>
                        <div class="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input type="password" class="form-control" id="inputPassword4"/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputAddress">Address</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputAddress2">Address 2</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputCity">City</label>
                            <input type="text" class="form-control" id="inputCity"/>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputState">State</label>
                            <select id="inputState" class="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputZip">Zip</label>
                            <input type="text" class="form-control" id="inputZip"/>
                        </div>
                    </div>           
                    <Link to={'/QuotStart'}><button type="submit" className="btn button-1 register-button">Registrarse</button></Link>
                </form>
            </div>
        </div>
    )
}
           
export default Register;

