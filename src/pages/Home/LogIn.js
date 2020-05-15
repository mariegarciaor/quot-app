import React from 'react';
import {Link} from 'react-router-dom';
import BigLogo from '../../styles/images/BigLogo.jpg';
import '../../styles/css/main.css';


const LogIn = () => {

    return (
      <div class="container">
        <div>
          <h1>¡Bienvenido!</h1>
          <h5>Inicia sesión para continuar</h5>
          <img src={BigLogo}/>
        </div>

        <form>
          <div class="form-group row">
            <div class="col-sm-10">
              <input type="email" class="form-control" id="inputEmail3" placeholder="E-mail"/>
            </div>
          </div>

          <div class="form-group row">
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword3" placeholder="Contraseña"/>
            </div>
          </div>

          <div class="form-group row">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck1"/>
              <label class="form-check-label" for="gridCheck1">
                Recordar cuenta
              </label>
            </div>
            <div>
              <a href="/ComingSoon">¿Olvidaste tu contraseña?</a>
            </div>
          </div>
          
          <div class="form-group row">
            <div class="col-sm-10">
              <a href="/QuoteStart" class="btn btn-primary">Iniciar sesión</a>
            </div>
          </div>

          <div>
            <p>¿No tienes cuenta? <a href="/Register">Registrate</a></p>
          </div>


        </form>
      


      </div>
      
    )
}

{/* <div>
              <div>
                <h3>Inicia sesión para continuar </h3>
                <img className="#" src={BigLogo} alt="Logo Quot" style={{width: 300, height: 300}}/>
              </div>
              <div>
              
                <input type="email" placeholder="E-mail"/>
                  <i>''</i>
                <input type="password" placeholder="Password"/>
                  <i>''</i>
                <input type ="checkbox"/>
                    <label>Recordar cuenta</label>
                    
                <Link to="/ComingSoon">¿Olvidaste tu contraseña?</Link>
            
                <Link to="/WelcomeUse">Inicia sesión</Link>
      
                <p>¿No tienes cuenta?</p>
                <Link to="/Register" className="">Registrate</Link>
            </div>
      </div> */}

export default LogIn;