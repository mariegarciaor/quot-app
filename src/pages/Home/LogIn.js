import React, { useState } from 'react';
import useForm from '../../hooks/useForm';
import validate from '../../hooks/validateLogIn';
import '../../styles/sass/main.css';

const LogIn = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(submit, validate);

  function submit() {
    console.log('Submitted Succesfully');
  }

    return (
      <div>
        <div className="login-cover">
          <div className=" container">
          <h1 className="title-1">¡Bienvenido!</h1>
          <h5>Cotizar servicios de impresión en minutos ahora es posible.</h5>
          </div>
        </div>
        <section className="container login-description">
          <form onSubmit={handleSubmit} noValidate>
            <h4>Inicia sesión</h4>
            <div className="email form-group row">
              <div className="col-sm-10">
                <input 
                  name="email"
                  type="email"
                  className="form-control"
                  id="inputEmail3"
                  placeholder="E-mail"
                  value={values.email}
                  onChange={handleChange}
                  />
                {errors.email && <div className="alert alert-danger">{errors.email}</div>}
              </div>
            </div>

            <div className="password form-group row">
              <div className="col-sm-10">
                <input 
                  name="password"
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                  placeholder="Contraseña"
                  value={values.password}
                  onChange={handleChange}
                  />
                {errors.password && <div className="alert alert-danger">{errors.password}</div>}
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
                <a href="/QuoteStart">
                  <button className="btn btn-primary button-1" type="submit" onClick={handleSubmit}>
                  Log In
                  </button>
                </a>
              </div>
            </div>

            <div>
              <p>¿No tienes cuenta? <a href="/Register">Registrate</a></p>
            </div>
          </form>
          <div className="main-description">
            <h4>Acerca de Quot</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </section>
      </div>      
    )
};


export default LogIn;