import React from 'react';
import '../../styles/sass/main.scss'

const LogIn = () => {

    return (
      <div>
        <div className="login-cover">
          <div className=" container">
          <h1 className="title-1">¡Bienvenido!</h1>
          <h5>Cotizar servicios de impresión en minutos ahora es posible.</h5>
          </div>
        </div>
        <section className="container login-description">
          <div className="main-description">
            <h4>Acerca de Quot</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <form>
            <h4>Inicia sesión</h4>
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
                <a className="olvidaste-contraseña" href="/ComingSoon">¿Olvidaste tu contraseña?</a>
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

        </section>
      </div>      
    )
}


export default LogIn;