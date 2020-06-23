import React from 'react';
import BigLogo from '../../styles/images/BigLogo.jpg';
import '../../styles/sass/main.scss'

const LogIn = () => {

    return (
      <div className="container">
        <div>
          <h1 className="title-1">¡Bienvenido!</h1>
          <h5>Inicia sesión para continuar</h5>
          <img src={BigLogo}/>
        </div>

        <form>
          <div className="email form-group row">
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3" placeholder="E-mail"/>
            </div>
          </div>

          <div className="password form-group row">
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPassword3" placeholder="Contraseña"/>
            </div>
          </div>

          <div className="checkbox form-group row">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck1"/>
              <label className="form-check-label" for="gridCheck1">
                Recordar cuenta
              </label>
            </div>
            <div>
              <a href="/ComingSoon">¿Olvidaste tu contraseña?</a>
            </div>
          </div>
          
          <div className="inicio form-group row">
            <div className="col-sm-10">
              <a href="/QuoteStart" className="btn btn-primary">Iniciar sesión</a>
            </div>
          </div>

          <div>
            <p>¿No tienes cuenta? <a href="/Register">Registrate</a></p>
          </div>


        </form>
      


      </div>
      
    )
}


export default LogIn;