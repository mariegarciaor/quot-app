import React from 'react';
import {Link} from 'react-router-dom';


const Register = () => {

    return (
        <div>
            <div class="container">
                <h3>Registra tus datos para crear tu cuenta</h3>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLY88f6-_nxcyHWFXH_fqhqtjLLYmnGoMv1oXJOF4luqEbA7rW&usqp=CAU" alt="register-image"></img>
            </div>
            <form class="container">
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
                <div class="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                <div class="form-group">
                    <label for="inputAddress2">Address 2</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" class="form-control" id="inputCity"/>
                    </div>
                    <div class="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                    </div>
                    <div class="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" class="form-control" id="inputZip"/>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck"/>
                    <label class="form-check-label" for="gridCheck">
                        Check me out
                    </label>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Sign in</button>
            </form>
        </div>
        
    )
}

{/* <div>
             <div>
                <h2>Registra tus datos para crear tu cuenta</h2>
                <img src="" alt=""/>
            </div>

            <div>
                <h4>Informacion personal</h4>
                <h5>Nombres</h5>
                <input type="text"/>
                <h5>Apellidos</h5>
                <input type="text"/>
                <h5>Empresa</h5>
                <input type="text"/>
            </div>

            <div>
                <h4>Informacion de contacto</h4>
                <h5>telefono</h5>
                <input type="tel"/>
                <h5>Correo electronico</h5>
                <input type="email"/>
                <h5>Contraseña</h5>
                <input type="password"/>
                <h5>Confirma contraseña</h5>
                <input type="password"/>
            </div>

            <div>
                <h4>Direccion</h4>
                <h5>calle y numero</h5>
                <input type="text"/>
                <h5>Colonia</h5> <h5>Codigo postal</h5>
                <input type="text"/> <input type="text"/>
                <h5>Ciudad</h5>
                <input type="text"/>
            </div>
 
            <div>
                <button>Registrate</button>
                <p>¿Ya tienes una cuenta?</p>
                <Link to="/LogIn" ClassName=""></Link>
            </div>
        </div> */}

               
export default Register;

